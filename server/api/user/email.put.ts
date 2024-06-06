import UserAuthModel, {
  UserAuthInterface
} from "~/server/models/UserAuth.model";
import { UpdateEmailBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const userAuth: UserAuthInterface = event.context.auth;

  const body = await readBody(event);
  const { error, value } = UpdateEmailBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  userAuth.mail = value.new_email;

  try {
    await UserAuthModel.findByIdAndUpdate(userAuth.id, userAuth);
    return { message: "Email Updated" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
