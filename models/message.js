const mongoose = require('mongoose')
const Schema = mongoose.Schema



const MessageSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId,ref:"User", required: true} 
},
{timestamps: true})


module.exports = mongoose.model("Message", MessageSchema)