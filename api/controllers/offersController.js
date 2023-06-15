require("../lib/connection");
const Offer = require("../models/Offer");
const Menu = require("../models/Menu");

const mongoose = require("mongoose");

// GET OFFER OF TH WEEK

exports.getOffer = async (req, res) => {
    try {
        const offerToFind = await Offer.findOne({}, {}, { sort: { createdAt: -1 } });
        percentage = offerToFind.offerPercentage
        const offer = await Menu.findById(offerToFind.menuId)
        // console.log(offer);
        weeksOffer = {offer, percentage}
        // console.log(weeksOffer);

        res.status(200).json(weeksOffer);
      } catch (error) {
        // console.error(error);
        res.status(500).send("Ein Fehler ist aufgetreten.");
      }
};

// SET NEW OFFER WEEK

exports.setOffer = async (req, res) => {
    // console.log(req.body)

    const {menuId, offerPercentage} = req.body
    // console.log(menuId)
    try {
    const newOffer = await Menu.findById(menuId);
    if(newOffer){
         const offerToSave = new Offer({
          offerPercentage,
            menuId,
        })
        await offerToSave.save()
        res.status(200).json(newOffer);
    }else{
        res.status(404).json("This menu does not exist");
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Ein Fehler ist aufgetreten.");
  }
};
