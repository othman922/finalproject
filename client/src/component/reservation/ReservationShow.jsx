import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal } from "react-bootstrap";
import "./Reservation.css";

const ReservationShow = ({ data }) => {
  const dataDate = data.date.split("T")[0];
  const dateParts = dataDate.split("-");
  const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const serverUrl = `${import.meta.env.VITE_APP_SERVER_URL}/reservations`;

  const handleCancel = async (data) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${serverUrl}/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage("Die Reservierung wurde erfolgreich storniert.");
      setModalShow(false);
    } catch (error) {
      setErrorMessage(
        "Beim Stornieren der Reservierung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
      console.error(error);
    }
  };

  ReservationShow.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="card p-4 text-white mt-3"
        id="reservationContainer"
      >
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <h2 className="card-title mb-4">Reservierungsbestätigung</h2>
        <h4 className="mb-4 card-title">
          Ihre Reservierung wurde{" "}
          <span className="text-success">erfolgreich</span> bestätigt !
        </h4>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="card-title">Vor-/Nachname:</label>
            <p className="card-text">{data.name}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="card-title">E-Mail:</label>
            <p className="card-text">{data.email}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="card-title">Telefonnummer:</label>
            <p className="card-text">{data.telephone}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="card-title">Datum:</label>
            <p className="card-text">{formattedDate}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="card-title">Anzahl der Personen:</label>
            <p className="card-text ">{data.people}</p>
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="card-title">Uhrzeit:</label>
            <p className="card-text ">{data.time}</p>
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="card-title text-warning">Reservierungsnummer</label>
            <p className="card-text text-decoration-underline">{data.myReservation}</p>

          </div>
        </div>
        {data.extra && (
          <div className="mb-3">
            <label className="card-title">Zusätzliche Informationen:</label>
            <p className="card-text">{data.extra}</p>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 mb-3">
            <Link to="/reservationOptions" className="btn" id="btnReservation">
              Zurück zur Seite
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => setModalShow(true)}
            >
              Stornieren
            </button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              dialogClassName="modal-30w"
              aria-labelledby="example-custom-modal-styling-title"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Stornieren
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Sind Sie sicher, dass Sie diese Reservierung stornieren möchten?
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-danger"
                  onClick={() => setModalShow(false)}
                >
                  Nein
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCancel(data)}
                >
                  Ja
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationShow;
