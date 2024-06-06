// @ts-ignore
import * as bcrypt from "bcrypt";
import UserAuthModel, {
  UserAuthInterface,
  saltRounds
} from "~/server/models/UserAuth.model";
import { UpdatePasswordBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const userAuth: UserAuthInterface = event.context.auth;

  const body = await readBody(event);
  const { error, value } = UpdatePasswordBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  if (
    !(await bcrypt.compare(value.actual_password, userAuth?.hashed_password))
  ) {
    throw createError({
      message: "Unauthorized, wrong password.",
      statusCode: 401,
      fatal: false
    });
  }

  const salt: string = await bcrypt.genSalt(saltRounds);
  const hashedPassword: string = await bcrypt.hash(value.new_password, salt);

  userAuth.hash_key = salt;
  userAuth.hashed_password = hashedPassword;

  try {
    await UserAuthModel.findByIdAndUpdate(userAuth.id, userAuth);
    return { message: "Password Updated" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
