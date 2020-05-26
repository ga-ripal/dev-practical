
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const User = mongoose.model(MODEL.USER);

const {
    ROUTES
} = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant');

const STATUS_CODE = require('../../constants/global.constant');

const joiMiddleware = require('../../middlewares/joi.middleware');
const {
    userObj
}= require('../../joi-validator/use.validator');


router.post(`${ROUTES.USER.CREATE_USER.URL}`,  async (req, res, next) => {
    try {
const {body} =req;
const email = body.email
const isEmailExists = await User.find({email})
if(isEmailExists&& Object.keys(isEmailExists).length){
    return apiHelper.failure(res,[], ERROR_LITERAL.USER.CREATE_USER.IS_EXISTS)
}
const userInstance = new User({...body})
    const user = await userInstance.save();

    if(user && Object.keys(user).length)
    {
        return apiHelper.success(res,{user}, ERROR_LITERAL.USER.CREATE_USER.SUCCESS)
    }

// const userInstance = new User({
//     _id: getSequenceNextValue(id),
//     ...body
// })
// console.log(userInstance)



return apiHelper.failure(res,[],ERROR_LITERAL.USER.CREATE_USER.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
});

router.get(`${ROUTES.USER.GET_ALL_USER.URL}`, async(req,res,next)=>{
    try{
        const users = await User.find().limit(3);
        if(users && Object.keys(users).length){
            return apiHelper.success(res,{users}, ERROR_LITERAL.USER.GET_ALL_USER.SUCCESS)
        }
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)
    }catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)
    }
})

router.get(`${ROUTES.USER.GET_USER.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const user = await User.findById({
id
})
if(user&& Object.keys(user).length)
{
    return apiHelper.success(res,{user}, ERROR_LITERAL.USER.GET_USER.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.put(`${ROUTES.USER.UPDATE_USER.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const user = await User.findByIdAndUpdate({
id
},{new:true})
if(user&& Object.keys(user).length)
{
    return apiHelper.success(res,{user}, ERROR_LITERAL.USER.UPDATE_USER.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.USER.UPDATE_USER.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.delete(`${ROUTES.USER.DELETE_USER.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const user = await User.findByIdAndDelete({
id
})
if(user&& Object.keys(user).length)
{
    return apiHelper.success(res,{user}, ERROR_LITERAL.USER.DELETE_USER.SUCCESS)
}
return apiHelper.failure(res,[], ERROR_LITERAL.USER.DELETE_USER.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

module.exports = router;