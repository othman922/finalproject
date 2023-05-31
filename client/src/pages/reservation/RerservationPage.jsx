import { useState } from "react";
import ReservationForm from '../../component/reservation/ReservationForm';
import ReservationDetails from "../../component/reservation/ReservationShow";

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState(null); 

  const handleFormSubmit = (data) => {
    setReservationData(data);
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <ReservationDetails data={reservationData} /> 
      ) : (
        <ReservationForm onSubmit={handleFormSubmit} /> 
      )}
    </>
  );
};

export default Reservation;
