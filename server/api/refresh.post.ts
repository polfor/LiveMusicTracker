import jwt from "jwt-simple";
import TokenFamilyModel, {
  FamilyTokenInterface
} from "../models/TokenFamily.model";
import AuthTokenModel, {
  AuthTokenInterface,
  JWTTokenInterface,
  createToken
} from "~/server/models/AuthToken.model";
import { RefreshToken } from "~/server/validation";

export default defineEventHandler(async event => {
  const config = useRuntimeConfig();

  const body = await readBody(event);

  const { error, value } = RefreshToken.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  const JWTToken: JWTTokenInterface = jwt.decode(
    value.refresh_token,
    config.JWT_TOKEN_SECRET
  );

  if (JWTToken.type !== "refresh_token") {
    throw createError({
      message: "Unauthorized, not a Refresh Token.",
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

  const authToken: AuthTokenInterface | null = await AuthTokenModel.findOne({
    refresh_token: value.refresh_token
  });
  if (authToken === null) {
    throw createError({
      message: "Unauthorized, this Token doesn't exist",
      statusCode: 401,
      fatal: false
    });
  }

  const tokenFamily: FamilyTokenInterface | null =
    await TokenFamilyModel.findOne({
      _id: authToken.family_id
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

  if (authToken?.already_refresh) {
    tokenFamily.is_valid = false;
    try {
      await TokenFamilyModel.findByIdAndUpdate(tokenFamily.id, tokenFamily);
    } catch (e: any) {
      throw createError({ message: e.message });
    }

    throw createError({
      message:
        "Unauthorized, this Token has always been refresh. Gonna invalidate the family.",
      statusCode: 401,
      fatal: false
    });
  }

  authToken.already_refresh = true;
  try {
    await AuthTokenModel.findByIdAndUpdate(authToken.id, authToken);
  } catch (e: any) {
    throw createError({ message: e.message });
  }

  const newAuthToken = await createToken(
    tokenFamily.user_id,
    JWTToken.email,
    tokenFamily.id
  );

  return {
    accessToken: newAuthToken.access_token,
    refreshToken: newAuthToken.refresh_token
  };
});
