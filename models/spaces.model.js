const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {TOPIC,SPACES} = require('../constants/models.constant')
const spaceSchema = new Schema({
spaceName :{
    type:String,
    required:true
},
topicName:{
    type:this.schema.Types.ObjectId,
    ref:TOPIC
}
})

module.exports = mongoose.model(SPACES,spaceSchema)