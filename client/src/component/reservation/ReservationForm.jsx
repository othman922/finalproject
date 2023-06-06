import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { generateAvailableTimes } from "./OpenHour";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const ReservationForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [extra, setExtra] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(0);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabledTimes, setDisabledTimes] = useState([]);

  const form = useRef();

  const today = new Date().toISOString().split("T")[0];
  const filteredAvailableTimes = generateAvailableTimes(date, today);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/reservations",
          {
            params: {
              date,
            },
          }
        );

        const reservations = response.data;
        const maxReservationsPerTime = 3;

        const fullyBookedTimes = reservations.reduce((times, reservation) => {
          if (times[reservation.time]) {
            times[reservation.time]++;
          } else {
            times[reservation.time] = 1;
          }
          return times;
        }, {});

        const disabledTimes = Object.keys(fullyBookedTimes).filter(
          (time) => fullyBookedTimes[time] >= maxReservationsPerTime
        );

        setDisabledTimes(disabledTimes);
      } catch (error) {
        console.error(error);
      }
    };

    if (date) {
      fetchReservations();
    }
  }, [date]);

  //Submit from the Reservation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (telephone.length < 9) {
      setError("Telefonnummer muss mindestens 9 Ziffern enthalten");
      return;
    }


    const reservation = {
      email,
      name,
      telephone,
      extra,
      date,
      people,
      time,
    };

    try {
      // Send email using emailjs
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: import.meta.env.EMAILJS_TO_NAME,
          from_email: email,
          to_email: import.meta.env.EMAILJS_TO_EMAIL,
          message: "Reservation details:",
          date: date,
          time: time,
          people: people,
          telephone: telephone,
          extra: extra,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      console.log(reservation)

      const response = await axios.post(
        "http://localhost:9000/reservations",
        reservation
      );

      console.log("reservation", reservation)


      if (response.status === 201) {
        setLoading(true);
        onSubmit(response.data);

        setEmail("");
        setName("");
        setTelephone("");
        setExtra("");
        setDate("");
        setPeople(0);
        setTime("");
      } else {
        console.log(error.message);
        setError(
          "Versuchen Sie es bitte nochmal: fehler beim speichern der Reservierung"
        );
      }

      setDisabledTimes((prevDisabledTimes) => [...prevDisabledTimes, time]);

    } catch (error) {
      console.log(error.message);
      setError("Versuchen Sie es bitte nochmal: fehler beim verbinden");
    } finally {
      setLoading(false);
    }
  };

  ReservationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return (
    <div className="d-flex justify-content-center align-items-center reservation-container">
      <div className="card p-4 mt-4 reservation-form">
        <h2 className="mb-2">Reservierung</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form ref={form} onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6 ">
              <label className="form-label">Datum:*</label>
              <input
                type="date"
                className="form-control"
                id="test"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="form-label">Anzahl der Personen:*</label>
              <input
                type="number"
                className="form-control"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                min="1"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Uhrzeit:*</label>
            <select
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required>
              <option value="">Bitte wählen</option>
              {filteredAvailableTimes.map((availableTime) => (
                <option
                  key={availableTime}
                  value={availableTime}
                  disabled={disabledTimes.includes(availableTime)}
                >
                  {availableTime}
                </option>
              ))}
            </select>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="form-label">Vor-/Nachname:*</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Max Mustermann"
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="form-label">E-Mail:*</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="max@email.com"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Telefonnummer:*</label>
            <input
              type="tel"
              className="form-control"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="z.B. 0123456789"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Zusätzliche Informationen:</label>
            <textarea
              className="form-control"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder="z.B. Allergie"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Reservieren"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
