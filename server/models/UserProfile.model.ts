import mongoose from "mongoose";

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
  pro_data: {
    type: schemaProData,
    default: {}
  }
});

export default mongoose.model("UserProfile", schemaUserProfile);
