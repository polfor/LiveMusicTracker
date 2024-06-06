import mongoose from "mongoose";

export interface ProDataInterface {
  description: string;
  phone: string;
  files: string[];
  zones: string[];
}

const schemaProData: mongoose.Schema = new mongoose.Schema({
  description: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  files: { type: [String], default: [] },
  zones: { type: [String], default: [] }
});

export interface UserProfileInterface {
  username: string;
  birthdate: Date;
  description: string;
  links: string[];
  gallery: string[];
  profile_pic: string;
  favorite_music_type: string[];
  pro_data: ProDataInterface;
}

export const schemaUserProfile: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  birthdate: {
    type: Date,
    default: null
  },
  description: {
    type: String,
    default: ""
  },
  links: {
    type: [String],
    default: []
  },
  gallery: {
    type: [String],
    default: []
  },
  profile_pic: {
    type: String,
    default: null
  },
  favorite_music_type: {
    type: [String],
    default: []
  },
  pro_data: {
    type: schemaProData,
    default: {}
  }
});

export default mongoose.model("UserProfile", schemaUserProfile);
