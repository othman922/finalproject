import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReservationShow = ({ data }) => {

  ReservationShow.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return (
    <div className="d-flex justify-content-center align-items-center reservation-container">
      <div className="card p-4 mt-4 reservation-form">
        <h2 className="card-title mb-4">Reservierungsbestätigung</h2>
        <p className=" mb-4 border-bottom border-success border-2 text-bold card-title fw-bold">
          Ihre Reservierung wurde{" "}
          <span className="text-success">erfolgreich</span> bestätigt
          <span className="text-success">!</span>
        </p>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 ">
            <label className="border-bottom border-success border-2 text-bold card-title">
              Vor-/Nachname:
            </label>
            <p className="card-text ">{data.name}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="border-bottom border-success border-2 text-bold card-title">
              E-Mail:
            </label>
            <p className="card-text">{data.email}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 ">
            <label className="border-bottom border-success border-2 text-bold card-title">
              Telefonnummer:
            </label>
            <p className="card-text">{data.telephone}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="border-bottom border-success border-2 text-bold card-title">
              Datum:
            </label>
            <p className="card-text">{data.date}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <label className="border-bottom border-success border-2 text-bold card-title">
              Anzahl der Personen:
            </label>
            <p className="card-text ">{data.people}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="border-bottom border-success border-2 text-bold card-title">
              Uhrzeit:
            </label>
            <p className="card-text ">{data.time}</p>
          </div>
        </div>
        <div className="mb-3">
          <label className="border-bottom border-success border-2 text-bold card-title">
            Zusätzliche Informationen:
          </label>
          <p className="card-text">{data.extra}</p>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 mb-sm-3">
            <Link to="/" className="btn btn-primary">
              Zurück zur Seite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationShow;
