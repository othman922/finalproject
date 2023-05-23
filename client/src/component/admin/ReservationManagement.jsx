import { useEffect, useState } from "react";
import axios from "axios";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = async () => {
    try {
      const response = await axios.get("/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reservation Management</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>{reservation.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationManagement;