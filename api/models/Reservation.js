const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    people:{
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    extra: {
        type: String,
    },
    myReservation: {
        type: String,
        required: true,

    }
})

module.exports = mongoose.model('Reservation', reservationSchema)