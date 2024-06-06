import UserAuthModel, { createUserAuth } from "~/server/models/UserAuth.model";
import { SignUpBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const body = await readBody(event);

  const { error, value } = SignUpBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  const userAuth = new UserAuthModel(
    await createUserAuth(
      value.username,
      value.email,
      value.password,
      "Organisator"
    )
  );
  try {
    await UserAuthModel.create(userAuth);
    return { message: "Organisator Created" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
