import { celebrate, Joi, Segments } from 'celebrate';

export function validateCreate() {
  return celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      avatar: Joi.string(),
    }
  })
}

export function validateAuth() {
  return celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  })
}
