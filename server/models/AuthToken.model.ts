import mongoose from "mongoose";
import jwt from "jwt-simple";
import { createTokenFamily } from "./TokenFamily.model";

export interface JWTTokenInterface {
  type: string;
  userId: string;
  email: string;
  familyId: string;
  iat: number;
  exp: number;
}

export interface AuthTokenInterface {
  id: string;
  family_id: string;
  access_token: string;
  refresh_token: string;
  already_refresh: boolean;
}

const schemaAuthToken: mongoose.Schema = new mongoose.Schema({
  family_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TokenFamily",
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    required: true
  },
  already_refresh: {
    type: Boolean,
    default: false
  }
});

const AuthTokenModel = mongoose.model("AuthToken", schemaAuthToken);

export default AuthTokenModel;

export async function createToken(
  userId: string,
  email: string,
  familyTokenId: String | undefined = undefined
) {
  const config = useRuntimeConfig();

  if (familyTokenId === undefined) {
    const tokenFamily = await createTokenFamily(userId);
    familyTokenId = tokenFamily.id;
  }

  try {
    const authToken = new AuthTokenModel({
      family_id: familyTokenId,
      access_token: jwt.encode(
        {
          type: "access_token",
          userId,
          email,
          familyId: familyTokenId,
          iat: Math.round(Date.now() / 1000),
          exp: Math.round(Date.now() / 1000 + 5 * 60 * 60)
        },
        config.JWT_TOKEN_SECRET
      ),
      refresh_token: jwt.encode(
        {
          type: "refresh_token",
          userId,
          email,
          familyId: familyTokenId,
          iat: Math.round(Date.now() / 1000),
          exp: Math.round(Date.now() / 1000 + 7 * 24 * 60 * 60)
        },
        config.JWT_TOKEN_SECRET
      )
    });
    return AuthTokenModel.create(authToken);
  } catch (e: any) {
    throw createError({ message: e.message });
  }
}
