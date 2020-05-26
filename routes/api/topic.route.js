const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const Topic = mongoose.model(MODEL.SPACES);

const {
    ROUTES
} = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant')

router.post(`${ROUTES.TOPICS.CREATE_TOPICS.URL}`, async(req,res,next)=>{
    try{
const {body } = req;
const topicName= body.topicName;
const isTopicExists = await Topic.find({topicName});

if(isTopicExists&& Object.keys(isTopicExists).length)
{
    return apiHelper.failure(res,[], ERROR_LITERAL.TOPICS.CREATE_TOPICS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
}  
const topicInstance = new Topic({
    ...body
})
const topic = await topicInstance.save();
if(topic && Object.keys(topic).length){
    return apiHelper.success(res,{topic}, ERROR_LITERAL.TOPICS.CREATE_TOPICS.SUCCESS)
}
return apiHelper.failure(res,[], ERROR_LITERAL.TOPICS.CREATE_TOPICS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)
}catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)
    }
})


router.get(`${ROUTES.TOPICS.GET_ALL_TOPICS.URL}`, async(req,res,next)=>{
    try{
        const topics = await Topic.find().populate('spaceName');
        if(topics && Object.keys(topics).length){
            return apiHelper.success(res,{topics}, ERROR_LITERAL.TOPICS.GET_ALL_TOPICS.SUCCESS)
        }
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)
    }catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)
    }
})

router.get(`${ROUTES.TOPICS.GET_TOPICS.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const topic = await Topic.findById({
id
}).populate('spaceName')
if(topic&& Object.keys(topic).length)
{
    return apiHelper.success(res,{topic}, ERROR_LITERAL.TOPICS.GET_TOPICS.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.put(`${ROUTES.TOPICS.UPDATE_TOPICS.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
        const topicName= body.topicName;
const isTopicExists = await Topic.find({topicName});

if(isTopicExists&& Object.keys(isTopicExists).length)
{
    return apiHelper.failure(res,[], ERROR_LITERAL.TOPICS.UPDATE_TOPICS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
}  
const topic = await Topic.findByIdAndUpdate({
id
},{new:true})
if(topic&& Object.keys(topic).length)
{
    return apiHelper.success(res,{topic}, ERROR_LITERAL.TOPICS.UPDATE_TOPICS.SUCCESS)
}
        return apiHelper.failure(res,[], ERROR_LITERAL.TOPICS.UPDATE_TOPICS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.delete(`${ROUTES.TOPICS.DELETE_TOPICS.URL}`, async(req,res,next)=>{
    try{
        const {id} = req.params;
const topic = await Topic.findByIdAndDelete({
id
})
if(topic&& Object.keys(topic).length)
{
    return apiHelper.success(res,{topic}, ERROR_LITERAL.TOPICS.DELETE_TOPICS.SUCCESS)
}
return apiHelper.failure(res,[], ERROR_LITERAL.TOPICS.DELETE_TOPICS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    }
    catch(err){
        return apiHelper.failure(res,[err], ERROR_LITERAL.CATCH.ERR)

    }
})

module.exports = router;