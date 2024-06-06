// @ts-ignore
import TokenFamilyModel, {
  FamilyTokenInterface
} from "~/server/models/TokenFamily.model";

export default defineEventHandler(async event => {
  const tokenFamily: FamilyTokenInterface = event.context.tokenFamily;

  tokenFamily.is_valid = false;

  try {
    await TokenFamilyModel.updateOne(tokenFamily);
    return { message: "Sign out success !" };
  } catch (e: any) {
    throw createError({ message: e.message });
  }
});
