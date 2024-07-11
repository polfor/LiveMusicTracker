import mongoose from "mongoose";

export interface FamilyTokenInterface {
  id: string;
  user_id: string;
  is_valid: boolean;
}

const schemaFamilyToken: mongoose.Schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  is_valid: {
    type: Boolean,
    default: true
  }
});

const TokenFamilyModel = mongoose.model("TokenFamily", schemaFamilyToken);

export default TokenFamilyModel;

export async function createTokenFamily(userId: string) {
  const tokenFamily = new TokenFamilyModel({ user_id: userId });

  return await TokenFamilyModel.create(tokenFamily);
}
