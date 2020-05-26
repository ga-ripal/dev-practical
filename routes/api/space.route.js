const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const Space = mongoose.model(MODEL.SPACES);

const {
    ROUTES
} = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant')

router.post(`${ROUTES.SPACES.CREATE_SPACES.URL}`, async(req,res,next)=>{
    try{
const {body } = req;
const spaceName= body.spaceName;
const isSpaceExists = await Space.find({spaceName});

if(isSpaceExists&& Object.keys(isSpaceExists).length)
{
    return apiHelper.failure(res,[], ERROR_LITERAL.SPACES.CREATE_SPACES.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
}  
const spaceInstance = new Space({
    ...body
})
const space = await spaceInstance.save();
if(space && Object.keys(Space).length){
    return apiHelper.success(res,{space}, ERROR_LITERAL.SPACES.CREATE_SPACES.SUCCESS)
}
return apiHelper.failure(res,[], ERROR_LITERAL.SPACES.CREATE_SPACES.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)
}catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)
    }
})


router.get(`${ROUTES.SPACES.GET_ALL_SPACES.URL}`, async(req,res,next)=>{
    try{
        const spaces = await Space.find().populate('topicName');
        if(spaces && Object.keys(spaces).length){
            return apiHelper.success(res,{spaces}, ERROR_LITERAL.SPACES.GET_ALL_SPACES.SUCCESS)
        }
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)
    }catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)
    }
})

router.get(`${ROUTES.SPACES.GET_SPACES.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const space = await Space.findById({
id
}).populate('topicName')
if(space&& Object.keys(space).length)
{
    return apiHelper.success(res,{space}, ERROR_LITERAL.SPACES.GET_SPACES.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.put(`${ROUTES.SPACES.UPDATE_SPACES.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
        const spaceName= body.spaceName;
const isSpaceExists = await Space.find({spaceName});

if(isSpaceExists&& Object.keys(isSpaceExists).length)
{
    return apiHelper.failure(res,[], ERROR_LITERAL.SPACES.UPDATE_SPACES.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
}  

const space = await Space.findByIdAndUpdate({
id
},{new:true})
if(space&& Object.keys(space).length)
{
    return apiHelper.success(res,{space}, ERROR_LITERAL.SPACES.UPDATE_SPACES.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.SPACES.UPDATE_SPACES.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.delete(`${ROUTES.SPACES.DELETE_SPACES.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const space = await Space.findByIdAndDelete({
id
})
if(space&& Object.keys(space).length)
{
    return apiHelper.success(res,{space}, ERROR_LITERAL.SPACES.DELETE_SPACES.SUCCESS)
}
return apiHelper.failure(res,[], ERROR_LITERAL.SPACES.DELETE_SPACES.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

module.exports = router;