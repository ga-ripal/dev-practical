const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    QUESTION,
    ANSWER,
    USER
} = require('../constants/models.constant');

const answerSchema = new Schema({
    answer :{
        type : String,
        required:true
    },
    question:{
          type: schema.Types.ObjectId,
            ref: QUESTION
    },
    user:{
        type:schema.Types.ObjectId,
        ref:USER
    }
},{
    timestamps:true
})

module.exports = mongoose.model(ANSWER,answerSchema)