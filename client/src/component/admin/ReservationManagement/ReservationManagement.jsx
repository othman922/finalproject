import { useEffect, useState } from "react";
import axios from "axios";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = async () => {
    try {
      const response = await axios.get("http://localhost:9000/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (reservationId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:9000/reservations/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getReservations();
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="text-center mb-5 mt-4">Reservation Management</h2>
        {reservations.length === 0 ? (
          <p className="row justify-content-center">No reservations found.</p>
        ) : (
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>People</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Extra</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation.name}</td>
                  <td>{reservation.people}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.telephone}</td>
                  <td>{formatDate(reservation.date)}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.extra}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(reservation._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  </div>
)};

export default ReservationManagement;