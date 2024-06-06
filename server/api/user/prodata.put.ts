import UserAuthModel, {
  UserAuthInterface
} from "~/server/models/UserAuth.model";
import { UpdateProDataBody } from "~/server/validation";

export default defineEventHandler(async event => {
  const userAuth: UserAuthInterface = event.context.auth;
  if (userAuth.enum_type === "User") {
    throw createError({
      message: "Unauthorized.",
      statusCode: 401,
      fatal: false
    });
  }

  const body = await readBody(event);
  const { error, value } = UpdateProDataBody.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    });
  }

  userAuth.profile.pro_data = { ...userAuth.profile.pro_data, ...value };

  try {
    await UserAuthModel.findByIdAndUpdate(userAuth.id, userAuth);
    return { message: "Pro Data Updated" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
