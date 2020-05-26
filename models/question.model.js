const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    QUESTION,
    ANSWER,
    USER
} = require('../constants/models.constant');

const questionSchema = new Schema({
    question :{
        type : String,
        required:true
    },
    answer:{
          type: schema.Types.ObjectId,
            ref: ANSWER
    },
    user:{
        type:schema.Types.ObjectId,
        ref:USER
    }
},{
    timestamps:true
})

module.exports = mongoose.model(QUESTION,questionSchema)