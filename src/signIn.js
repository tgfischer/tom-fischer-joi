const Joi = require("joi");

module.exports.signInSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .strip()
    .required()
});
