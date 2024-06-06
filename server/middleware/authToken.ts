import jwt from "jwt-simple";
import AuthTokenModel, {
  AuthTokenInterface,
  JWTTokenInterface
} from "../models/AuthToken.model";
import UserAuthModel, { UserAuthInterface } from "../models/UserAuth.model";
import TokenFamilyModel, {
  FamilyTokenInterface
} from "../models/TokenFamily.model";

export default defineEventHandler(async event => {
  const config = useRuntimeConfig();

  const url: string = getRequestURL(event).pathname;
  if (
    !(url.startsWith("/api/auth/") && !url.endsWith("signout")) ||
    url === "/api/refresh"
  ) {
    const bearerToken: string | undefined = getRequestHeader(
      event,
      "Authorization"
    );

    if (
      bearerToken === undefined ||
      !bearerToken.startsWith("Bearer ") ||
      bearerToken.split(" ").length !== 2
    ) {
      throw createError({
        message: "Unauthorized, invalid Access Token.",
        statusCode: 401,
        fatal: false
      });
    }
    const JWTToken: JWTTokenInterface = jwt.decode(
      bearerToken.split(" ")[1],
      config.JWT_TOKEN_SECRET
    );

    if (JWTToken.type !== "access_token") {
      throw createError({
        message: "Unauthorized, not an Access Token.",
        statusCode: 401,
        fatal: false
      });
    }
    if (Math.round(Date.now() / 1000) > JWTToken.exp) {
      throw createError({
        message: "Unauthorized, expired Token.",
        statusCode: 401,
        fatal: false
      });
    }

    const userAuth: UserAuthInterface | null = await UserAuthModel.findOne({
      _id: JWTToken.userId
    });
    if (userAuth === null) {
      throw createError({
        message: "Unauthorized, this Token is link to no User.",
        statusCode: 401,
        fatal: false
      });
    }

    const authToken: AuthTokenInterface | null = await AuthTokenModel.findOne({
      access_token: bearerToken.split(" ")[1]
    });
    if (authToken === null) {
      throw createError({
        message: "Unauthorized, this Token doesn't exist",
        statusCode: 401,
        fatal: false
      });
    } else if (authToken?.already_refresh) {
      throw createError({
        message: "Unauthorized, this Token has been refresh.",
        statusCode: 401,
        fatal: false
      });
    }

    const tokenFamily: FamilyTokenInterface | null =
      await TokenFamilyModel.findOne({
        _id: JWTToken.familyId
      });
    if (tokenFamily === null) {
      throw createError({
        message: "Unauthorized, this Token has no family.",
        statusCode: 401,
        fatal: false
      });
    } else if (!tokenFamily?.is_valid) {
      throw createError({
        message: "Unauthorized, this Token family has been invalidated.",
        statusCode: 401,
        fatal: false
      });
    }

    event.context.auth = userAuth;
    event.context.authToken = authToken;
    event.context.tokenFamily = tokenFamily;
  }
});
