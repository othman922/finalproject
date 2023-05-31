const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description:{
        type: String,
        required: 'This field is required'
    },
    price: {
        type: Number,
        required: 'This field is required'
    },
    image: {
        type: String,
        required: 'This field is required'
    },
    vegan: {
        type: Boolean,
    },
    category: {
        type: String,
        required: 'This field is required'
    }
})

module.exports = mongoose.model('Menu', menuSchema)