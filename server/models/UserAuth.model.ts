import mongoose from "mongoose";
// @ts-ignore
import * as bcrypt from "bcrypt";
import UserProfileModel, {
  UserProfileInterface,
  schemaUserProfile
} from "./UserProfile.model";

export const saltRounds = 10;

export interface UserAuthInterface {
  id: string;
  mail: string;
  hashed_password: string;
  hash_key: string;
  spotify_id: string;
  is_certif: boolean;
  enum_type: string;
  is_verified: boolean;
  profile: UserProfileInterface;
}

const schemaUserAuth: mongoose.Schema = new mongoose.Schema({
  mail: {
    type: String,
    unique: true,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  hash_key: {
    type: String,
    required: true
  },
  spotify_id: {
    type: String,
    default: null
  },
  is_certif: {
    type: Boolean,
    default: false
  },
  enum_type: {
    type: String,
    required: true
  },
  is_verified: {
    type: Boolean,
    default: false
  },
  profile: {
    type: schemaUserProfile,
    required: true
  }
});

export async function createUserAuth(
  username: string,
  mail: string,
  password: string,
  enumType: "User" | "Organisator" | "Artist"
) {
  const salt: string = await bcrypt.genSalt(saltRounds);
  const hashedPassword: string = await bcrypt.hash(password, salt);

  const userAuth = {
    mail,
    hashed_password: hashedPassword,
    hash_key: salt,
    enum_type: enumType,
    profile: new UserProfileModel({ username })
  };
  return userAuth;
}

export default mongoose.model("User", schemaUserAuth);
