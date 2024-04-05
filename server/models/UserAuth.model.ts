import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import UserProfileModel, { schemaUserProfile } from "./UserProfile.model";

const saltRounds = 10;

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
