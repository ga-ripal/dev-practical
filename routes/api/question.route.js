const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const Question = mongoose.model(MODEL.QUESTION);

const
    ROUTES = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant')

router.post(`${ROUTES.QUESTIONS.CREATE_QUESTIONS.URL}`, async (req, res, next) => {
    try {
        const {
            body
        } = req;
        const question = body.question;
        const isQuestionExists = await Question.find({
            question
        });

        if (isQuestionExists && Object.keys(isQuestionExists).length) {
            return apiHelper.failure(res, [], ERROR_LITERAL.QUESTIONS.CREATE_QUESTIONS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
        }
        const questionInstance = new Question({
            ...body
        })
        const question = await questionInstance.save();
        if (question && Object.keys(question).length) {
            return apiHelper.success(res, {
                question
            }, ERROR_LITERAL.QUESTIONS.CREATE_QUESTIONS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.QUESTIONS.CREATE_QUESTIONS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)
    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})


router.get(`${ROUTES.QUESTIONS.GET_ALL_QUESTIONS.URL}`, async (req, res, next) => {
    try {
        const question = await Question.find().populate('answer');
        if (question && Object.keys(question).length) {
            return apiHelper.success(res, {
                question
            }, ERROR_LITERAL.QUESTIONS.GET_ALL_QUESTIONS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)
    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})

router.get(`${ROUTES.QUESTIONS.GET_QUESTIONS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const question = await Question.findById({
            id
        })
        if (question && Object.keys(question).length) {
            return apiHelper.success(res, {
                question
            }, ERROR_LITERAL.QUESTIONS.GET_QUESTIONS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.put(`${ROUTES.QUESTIONS.UPDATE_QUESTIONS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const isQuestionExists = await Question.find({
            question
        });

        if (isQuestionExists && Object.keys(isQuestionExists).length) {
            return apiHelper.failure(res, [], ERROR_LITERAL.QUESTIONS.UPDATE_QUESTIONS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
        }
        const question = await Question.findByIdAndUpdate({
            id
        }, {
            new: true
        })
        if (question && Object.keys(question).length) {
            return apiHelper.success(res, {
                question
            }, ERROR_LITERAL.QUESTIONS.UPDATE_QUESTIONS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.QUESTIONS.UPDATE_QUESTIONS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.delete(`${ROUTES.QUESTIONS.DELETE_QUESTIONS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const question = await Question.findByIdAndDelete({
            id
        })
        if (question && Object.keys(question).length) {
            return apiHelper.success(res, {
                question
            }, ERROR_LITERAL.QUESTIONS.DELETE_QUESTIONS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.QUESTIONS.DELETE_QUESTIONS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

module.exports = router;