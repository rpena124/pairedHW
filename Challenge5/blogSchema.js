const {model ,Schema, default: mongoose}= require('mongoose')
const blogSchema = new Schema({
     id: {type: String},
     title: {type: String, required:true},
     description: {type: String, required:true}
})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog

