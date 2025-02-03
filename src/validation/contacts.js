import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
    phoneNumber: Joi.string().pattern(/^\+?[0-9\s\-()]{6,16}$/).required().messages({
      'string.pattern.base': 'Phonenumber must be a valid format (digits, +, -, spaces, parentheses)',
      'any.required': 'Phonenumber is required',
  }),
    email: Joi.string().email({ minDomainSegments: 2 }).messages({
      'string.email': 'Email must be a valid email address',
    }),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
      'any.only': 'Contact type must be one of work, home, or personal',
      'any.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().pattern(/^\+?[0-9\s\-()]{6,16}$/),
    email: Joi.string().email({ minDomainSegments: 2 }),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),

});

