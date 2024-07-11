import UserAuthModel, {
  UserAuthInterface
} from "~/server/models/UserAuth.model";
import { UpdateUserProfileBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const userAuth: UserAuthInterface = event.context.auth;

  const body = await readBody(event);
  const { error, value } = UpdateUserProfileBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  userAuth.profile = { ...userAuth.profile, ...value };

  try {
    await UserAuthModel.findByIdAndUpdate(userAuth.id, userAuth);
    return { message: "User Updated" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
