import UserAuthModel, {
  UserAuthInterface
} from "~/server/models/UserAuth.model";

export default defineEventHandler(async event => {
  // const userAuth: UserAuthInterface = event.context.auth;
  const userId = getRouterParam(event, "id");

  try {
    const userAuth: UserAuthInterface | null = await UserAuthModel.findOne({
      _id: userId
    });
    if (userAuth === null) {
      throw createError({
        message: "This User doesn't exist.",
        statusCode: 404,
        fatal: false
      });
    }

    const profile = {
      user_type: userAuth.enum_type,
      id: userAuth.id,
      username: userAuth.profile.username,
      mail: userAuth.mail,
      is_certif: userAuth.is_certif,
      is_verified: userAuth.is_verified,
      birthdate: userAuth.profile.birthdate,
      description: userAuth.profile.description,
      links: userAuth.profile.links,
      gallery: userAuth.profile.gallery,
      favorite_music_type: userAuth.profile?.favorite_music_type
        ? userAuth.profile?.favorite_music_type
        : [],
      profile_pic: userAuth.profile.gallery
    };
    if (profile.user_type === "User") {
      return { profile };
    } else {
      return {
        profile: {
          ...profile,
          pro_data: {
            description: userAuth.profile.pro_data.description,
            phone: userAuth.profile.pro_data.phone,
            files: userAuth.profile.pro_data.files,
            zones: userAuth.profile.pro_data.zones
          }
        }
      };
    }
  } catch (e: any) {
    throw createError({
      message: "This User doesn't exist.",
      statusCode: 404,
      fatal: false
    });
  }
});
