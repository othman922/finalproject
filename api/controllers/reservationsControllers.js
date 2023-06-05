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
  
  // POST Reservation
  
  exports.createReservation = async (req, res) => {
    try {
      const { date, people, time, email, name, telephone, extra } = req.body;
  
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
  