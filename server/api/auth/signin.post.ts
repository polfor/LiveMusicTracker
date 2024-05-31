import * as bcrypt from "bcrypt";
import { createToken } from "~/server/models/AuthToken.model";
import UserAuthModel, {
  UserAuthInterface
} from "~/server/models/UserAuth.model";
import { SignInBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const body = await readBody(event);

  const { error, value } = SignInBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  const userAuth: UserAuthInterface | null = await UserAuthModel.findOne({
    mail: value.email
  });
  if (userAuth === null) {
    throw createError({
      message: "Unauthorized, no match for this email.",
      statusCode: 401,
      fatal: false
    });
  } else if (
    !(await bcrypt.compare(value.password, userAuth?.hashed_password))
  ) {
    throw createError({
      message: "Unauthorized, wrong password.",
      statusCode: 401,
      fatal: false
    });
  }

  // Create a token family

  const userId: string = userAuth.id;
  const userMail: string = userAuth.mail;

  const authToken = await createToken(userId, userMail);

  return {
    accessToken: authToken.access_token,
    refreshToken: authToken.refresh_token
  };
});
