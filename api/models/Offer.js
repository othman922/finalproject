const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  offerPercentage: {
    type: Number,
    required: true
  },
  menuId: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;