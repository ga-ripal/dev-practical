const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {TOPIC,SPACES} = require('../constants/models.constant')
const topicSchema = new Schema({
topicName :{
    type:String,
    required:true
},
spaceName:{
    type:this.schema.Types.ObjectId,
    ref:SPACES
}
})

module.exports = mongoose.model(TOPIC,topicSchema)