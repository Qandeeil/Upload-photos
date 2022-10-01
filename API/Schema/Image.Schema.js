const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    image: {type: String}
})
const images = mongoose.model('images',ImageSchema,'images')
module.exports = images