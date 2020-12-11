import Joi from "joi";

class Validator {
  static validateAccount(email, password) {
    let accountSchema = Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
        .messages({
          string: `Invalid Password Format`
        })
    });

    return accountSchema.validate({ email, password });
  }

  static validatePatient(user) {
    let userSchema = Joi.object({
      NID: Joi.string().length(10).pattern(/^[0-9]+$/).required(),      
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "rw", "fr"] }
      }),
      gender: Joi.string().required(),
      phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),      
    });
    return userSchema.validate(user);
  }


  static validateUser(user) {
    let userSchema = Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "rw", "fr"] }
      }),
      phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    });
    return userSchema.validate(user);
  }

}

export default Validator;
