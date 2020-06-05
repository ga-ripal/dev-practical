const Joi = require('@hapi/joi');

const userObj ={
    firstName:Joi.string().required(),
    lastName :Joi.string().required(),
    email:Joi.string().required()
}

 
module.exports={
    userObj
}