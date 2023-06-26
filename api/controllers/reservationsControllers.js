require("../lib/connection");
const mongoose = require("mongoose");
const Reservation = require("../models/Reservation");

// GET Reservations

exports.getReservations = async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // GET Reservations by ID
  
  exports.getReservationsById = async (req, res) => {
    try {
      const reservations = await Reservation.findOne({ _id: req.params.id });
  
      if (!reservations) {
        return res.status(404).send("Reservations not found");
      }
  
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };

  // GET my reservation Reservations
  exports.getMyReservation = async (req, res) => {
      try {
      const reservation = await Reservation.findOne({ myReservation: req.params.reservationID });
      if (!reservation) {
        return res.status(404).send("Reservations not found");
      }
  
      res.status(200).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };

  // Update my reservation Reservations
  exports.updateMyReservation = async (req, res) => {
       try {
      const { date, people, time, email, name, telephone, extra } = req.body;
      const reservationId = req.params.id;
      const existingReservation = await Reservation.findById(reservationId);
  
      if (!existingReservation) {
        return res.status(404).json({ message: "Reservation item not found" });
      }
    if(name){
      existingReservation.name = name;
    }
    if(date){
      existingReservation.date = date;
    }if(people){
      existingReservation.people = people;
    }if(time){
      existingReservation.time = time;
    }if(telephone){
      existingReservation.telephone = telephone;
    }if(extra){
      existingReservation.extra = extra;
    }if(email){
      existingReservation.email = email;
    }
      const updatedReservation = await existingReservation.save();
      res.status(200).json(updatedReservation);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // POST Reservation
  
  exports.createReservation = async (req, res) => {
    try {
      const { date, people, time, email, name, telephone, extra, myReservation } = req.body;
  
      const reservationsCount = await Reservation.countDocuments({ date, time });
      const maxReservationsPerTime = 3; 
  
      if (reservationsCount >= maxReservationsPerTime) {
        return res.status(400).json({ message: "Maximum reservations for this time slot reached." });
      }
  
      const reservation = new Reservation({
        date,
        people,
        time,
        email,
        name,
        telephone,
        extra,
        myReservation,
      });
  
      await reservation.save();
  
  
      res.status(201).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  
  // DELETE Reservation
  
  exports.deleteReservation = async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await Reservation.findByIdAndDelete(id);
  
      res.status(200).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ein Fehler ist aufgetreten.");
    }
  };
  