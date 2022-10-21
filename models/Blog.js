const { Schema, model } = require('mongoose')
  
const blogSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
            type: String,
            required:true
        },
    
}, {timestamps : true })


const Blog = model('blogs', blogSchema)
module.exports = Blog