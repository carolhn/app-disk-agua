import { celebrate, Joi, Segments } from 'celebrate';

export function validateIdParams() {
  return celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  })
}

export function validateCreate() {
  return celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required()
    }
  })
}

export function validateUpdate() {
  return celebrate({
    [Segments.BODY]: {
      id: Joi.number().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required()
    },
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  })
}
