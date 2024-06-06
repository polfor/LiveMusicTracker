import { UserAuthInterface } from "~/server/models/UserAuth.model";

export default defineEventHandler(event => {
  const userAuth: UserAuthInterface = event.context.auth;

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
});
