import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { generateAvailableTimes } from "./OpenHour";



export default function MyReservation () {
    const [inquireId, setInquireId] = useState(true)
    const [myReservation, setMyReservation] = useState({})
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [reservationId, setReservationId] = useState("")
    const [showMyReservation, setShowMyReservation] = useState(false);
    const [id, setId] = useState("")

    // For the update
    const [updateMyReservation, setUpdateMyReservation] = useState(false);
    const [disabledTimes, setDisabledTimes] = useState([]);
    const serverUrl = `${import.meta.env.VITE_APP_SERVER_URL}/reservations`;
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [extra, setExtra] = useState("");
    const [people, setPeople] = useState(0);
    const [time, setTime] = useState("");

    const [updatedReservation, setUpdatedReservation] = useState({
        name: "",
        date: "",
        email: "",
        telephone: "",
        extra: "",
        people: "",
        time: "",
    });

    const today = new Date().toISOString().split("T")[0];
    const filteredAvailableTimes = generateAvailableTimes(date, today);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(
                    serverUrl,
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
    }, [date, serverUrl]);



    const handleUpdate = async (e) => {
        e.preventDefault()
        try {

            if (name !== "") {
                updatedReservation.name = name;
            }
            if (date !== "") {
                updatedReservation.date = date;
            }
            if (email !== "") {
                updatedReservation.email = email;
            }
            if (telephone !== "") {
                updatedReservation.telephone = telephone;

            }
            if (extra !== "") {
                updatedReservation.extra = extra;
            }
            if (people !== 0) {
                updatedReservation.people = people;
            }
            if (time !== "") {
                updatedReservation.time = time;
            }
            const response = await axios.patch(`http://localhost:9000/updateMyReservation/${id}`, updatedReservation);
            if (response.status === 200) {
                handleShowReservations()
                navigate("/reservationOptions")
            }

        } catch (error) {
            console.error(error);
        }
    };


    const navigate = useNavigate()

    const handleHideErrorMessage = (e) => {
        e.preventDefault()

        setError1(false)
        setError2(false)
        setError3(false)

        setInquireId(true)

    }

    const handleShowReservations = async (e) => {

        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:9000/myReservation/${reservationId}`)
            if (response) {
                if (response.status === 200) {
                    setMyReservation(response.data)
                    setShowMyReservation(true)
                    setUpdateMyReservation(false)

                    setInquireId(false)
                    setId(response.data._id)
                }
            }

        } catch (error) {
            if (error.response.status === 404) {
                if (reservationId === "") {
                    setError2(false)
                    setError1(false)

                    setError3(true)
                    setInquireId(false)
                } else {
                    setInquireId(false)
                    setError3(false)
                    setError2(false)

                    setError1(true)
                }
            }
            else {
                setInquireId(false)
                setError1(false)
                setError3(false)
                setError2(true)
            }
            console.log(error.message)
        }


    }

    const handleCancel = async (data) => {
        const serverUrl = `${import.meta.env.VITE_APP_SERVER_URL}/reservations`;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${serverUrl}/${data._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/reservationOptions")

            setModalShow(false);
        } catch (error) {

            console.error(error);
        }
    };

    return (
        <main id='reservationOptionContainer' className=' w-100 d-flex justify-content-center align-items-center'>
            {inquireId && <div className="w-100 d-flex flex-column gap-1 align-items-center ">
                <input type="text" className="form-control w-25" placeholder="Reservierungsnummer angeben" value={reservationId} onChange={(e) => { setReservationId(e.target.value) }} />
                <button type="button" className="btn btn-success w-25" onClick={(e) => { handleShowReservations(e) }}>Suchen</button>
                <button type="button" className="btn btn-warning w-25" onClick={() => { navigate("/reservationOptions") }}>Zurück</button>


            </div>}
            {showMyReservation && myReservation && <div className="d-flex justify-content-center align-items-center">

                <div
                    className="card p-4 text-white mt-3"
                    id="reservationContainer"
                >

                    <h2 className="card-title mb-4">Reservierung</h2>
                    <div className="row mb-3">
                        <div className="col-sm-12 col-md-6 mb-3">
                            <label className="card-title text-warning">Vor-/Nachname:</label>
                            {!updateMyReservation && <p className="card-text">{myReservation.name}</p>}
                            {updateMyReservation &&
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={myReservation.name}
                                    required
                                />}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label className="card-title text-warning">E-Mail:</label>
                            {!updateMyReservation && <p className="card-text">{myReservation.email}</p>}
                            {updateMyReservation &&
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={myReservation.email}
                                    required
                                />}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 col-md-6 mb-3">
                            <label className="card-title text-warning">Telefonnummer:</label>
                            {!updateMyReservation && <p className="card-text">{myReservation.telephone}</p>}
                            {updateMyReservation &&
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    placeholder={myReservation.telephone}
                                    required
                                />}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label className="card-title text-warning">Datum:</label>
                            {!updateMyReservation && <p className="card-text">{myReservation.date.slice(0, 10)}</p>}
                            {updateMyReservation && <input
                                type="date"
                                className="form-control"
                                id="test"
                                value={date === "" ? myReservation.date.slice(0, 10) : date}
                                onChange={(e) => setDate(e.target.value)}
                                min={today}

                                required
                            />}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 col-md-6 mb-3">
                            <label className="card-title text-warning">Anzahl der Personen:</label>
                            {!updateMyReservation && <p className="card-text ">{myReservation.people}</p>}
                            {updateMyReservation &&
                                <input
                                    type="number"
                                    className="form-control"
                                    value={people === "" ? myReservation.people : people}
                                    onChange={(e) => setPeople(e.target.value)}
                                    min="1"
                                    required
                                />}
                        </div>
                        <div className="col-sm-12 col-md-6 mb-3">
                            <label className="card-title text-warning">Uhrzeit:</label>
                            {!updateMyReservation && <p className="card-text ">{myReservation.time}</p>}
                            {updateMyReservation &&
                                <select
                                    className="form-control"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required>
                                    <option value="">{myReservation.time}</option>
                                    {filteredAvailableTimes.map((availableTime) => (
                                        <option
                                            key={availableTime}
                                            value={availableTime}
                                            disabled={disabledTimes.includes(availableTime)}
                                        >
                                            {availableTime}
                                        </option>
                                    ))}
                                </select>}
                        </div>
                        {!updateMyReservation && <div className="col-sm-12 col-md-6 mb-3">
                            <label className="card-title text-warning">Reservierungsnummer</label>
                            <p className="card-text text-decoration-underline">{myReservation.myReservation}</p>

                        </div>}
                    </div>
                    {myReservation.extra && (
                        <div className="mb-3">
                            <label className="card-title text-warning">Zusätzliche Informationen:</label>
                            {!updateMyReservation && <p className="card-text">{myReservation.extra}</p>}
                            {updateMyReservation &&
                                <textarea
                                    className="form-control"
                                    value={extra}
                                    onChange={(e) => setExtra(e.target.value)}
                                    placeholder={myReservation.extra}
                                />}
                        </div>
                    )}
                    <div className="row mb-3">
                        <div className="col-sm-12 col-md-4 mb-3">
                            <Link to="/reservationOptions" className="btn" id="btnReservation">
                                Zurück
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-3">
                            {!updateMyReservation && <button className="btn bg-success" id="btnReservation" onClick={() => { setUpdateMyReservation(true) }}>
                                Bearbeiten
                            </button>}
                            {updateMyReservation && <button className="btn bg-success" id="btnReservation" onClick={(e) => { handleUpdate(e) }}>
                                Speichen
                            </button>}
                        </div>
                        {!updateMyReservation && <div className="col-sm-12 col-md-4">
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
                                        onClick={() => handleCancel(myReservation)}
                                    >
                                        Ja
                                    </button>
                                </Modal.Footer>
                            </Modal>
                        </div>}
                    </div>
                </div>
            </div>}
            {updateMyReservation && myReservation &&
                <form >

                </form>}
            {error1 && <div className="Card text-danger bg-dark p-4 text-center">
                <p>
                    Deine Reservierungsnummer scheint nicht richtig zu sein !
                </p>
                <p>Controlliere die, und versuch es noch Mal.</p>
                <button type="button" className="btn btn-success w-25" onClick={(e) => { handleHideErrorMessage(e) }}>OK</button>

            </div>}
            {error2 && <div className="Card text-danger bg-dark p-4 text-center">
                <p>
                    Etwas ist schief gelaufen. Probiere es erneut.
                </p>
                <button type="button" className="btn btn-success w-25" onClick={(e) => { handleHideErrorMessage(e) }}>OK</button>

            </div>}
            {error3 && <div className="Card text-danger bg-dark p-4 text-center">
                <p>
                    Geben Sie bitte Ihre Reservierungsnummer ein.
                </p>
                <button type="button" className="btn btn-success w-25" onClick={(e) => { handleHideErrorMessage(e) }}>OK</button>

            </div>}
        </main>
    )
}
