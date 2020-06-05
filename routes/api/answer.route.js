const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERAL = require('../../constants/error-literals.constant');
const MODEL = require('../../constants/models.constant');
const Answer = mongoose.model(MODEL.ANSWER);

const
    ROUTES = require('../../constants/routes.constant');
const GLOBAL = require('../../constants/global.constant')

router.post(`${ROUTES.ANSWERS.CREATE_ANSWERS.URL}`, async (req, res, next) => {
    try {
        const {
            body
        } = req;
        const answer = body.answer;
        const isAnswerExists = await Answer.find({
            answer
        });

        if (isAnswerExists && Object.keys(isAnswerExists).length) {
            return apiHelper.failure(res, [], ERROR_LITERAL.ANSWERS.CREATE_ANSWERS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
        }
        const answerInstance = new Answer({
            ...body
        })
        const answer = await answerInstance.save();
        if (answer && Object.keys(answer).length) {
            return apiHelper.success(res, {
                answer
            }, ERROR_LITERAL.ANSWERS.CREATE_ANSWERS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.ANSWERS.CREATE_ANSWERS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)
    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})


router.get(`${ROUTES.ANSWERS.GET_ALL_ANSWERS.URL}`, async (req, res, next) => {
    try {
        const answers = await Answer.find().populate('question');
        if (answers && Object.keys(answers).length) {
            return apiHelper.success(res, {
                answers
            }, ERROR_LITERAL.ANSWERS.GET_ALL_ANSWERS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)
    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)
    }
})

router.get(`${ROUTES.ANSWERS.GET_ANSWERS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const answer = await Answer.findById({
            id
        }).populate('question')
        if (answer && Object.keys(answer).length) {
            return apiHelper.success(res, {
                answer
            }, ERROR_LITERAL.ANSWERS.GET_ANSWERS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.COMMON_MSG.DATA_NOT_FOUND)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.put(`${ROUTES.ANSWERS.UPDATE_ANSWERS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const isAnswerExists = await Answer.find({
            answer
        });

        if (isAnswerExists && Object.keys(isAnswerExists).length) {
            return apiHelper.failure(res, [], ERROR_LITERAL.ANSWERS.UPDATE_ANSWERS.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
        }
        const answer = await Answer.findByIdAndUpdate({
            id
        }, {
            new: true
        })
        if (answer && Object.keys(answer).length) {
            return apiHelper.success(res, {
                answer
            }, ERROR_LITERAL.ANSWERS.UPDATE_ANSWERS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.ANSWERS.UPDATE_ANSWERS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

router.delete(`${ROUTES.ANSWERS.DELETE_ANSWERS.URL}`, async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const answer = await Answer.findByIdAndDelete({
            id
        })
        if (answer && Object.keys(answer).length) {
            return apiHelper.success(res, {
                answer
            }, ERROR_LITERAL.ANSWERS.DELETE_ANSWERS.SUCCESS)
        }
        return apiHelper.failure(res, [], ERROR_LITERAL.ANSWERS.DELETE_ANSWERS.FAILURE, GLOBAL.STATUS_CODE.BAD_REQUEST)

    } catch (err) {
        return apiHelper.failure(res, [err], ERROR_LITERAL.CATCH.ERR)

    }
})

module.exports = router;