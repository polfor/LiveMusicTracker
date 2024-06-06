import Joi from "joi";

export const SignUpBody = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});

export const SignInBody = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});

export const RefreshToken = Joi.object({
  refresh_token: Joi.string().required()
});

export const UpdateUserProfileBody = Joi.object({
  username: Joi.string().min(3).optional(),
  birthdate: Joi.date().optional(),
  description: Joi.string().optional(),
  links: Joi.array<String>().optional(),
  favorite_music_type: Joi.array<String>().optional()
});

export const UpdateEmailBody = Joi.object({
  new_email: Joi.string().email().required()
});

export const UpdatePasswordBody = Joi.object({
  actual_password: Joi.string().min(3).required(),
  new_password: Joi.string().min(3).required()
});

export const UpdateProDataBody = Joi.object({
  description: Joi.string().optional(),
  phone: Joi.string().optional(),
  zones: Joi.array<String>().optional()
});
