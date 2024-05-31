import mongoose from "mongoose";

const schemaFamilyToken: mongoose.Schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  is_valid: {
    type: Boolean,
    default: true
  }
});

const TokenFamilyModel = mongoose.model("FamilyToken", schemaFamilyToken);

export default TokenFamilyModel;

export async function createTokenFamily(userId: string) {
  const tokenFamily = new TokenFamilyModel({ user_id: userId });

  return await TokenFamilyModel.create(tokenFamily);
}
