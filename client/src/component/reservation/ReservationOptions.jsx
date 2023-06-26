import { useNavigate } from "react-router-dom"

import "./ReservationOptions.css"

export default function ReservationOptions () {
    const navigate = useNavigate()







    return (
        <main id='reservationOptionContainer' className=' w-100 d-flex justify-content-center align-items-center'>
            <div className="w-100 d-flex justify-content-center gap-5 ">
                <button type="button" className="btn btn-warning " onClick={() => { navigate("/myReservation") }}>Reservierungen</button>

                <button type="button" className="btn btn-success" onClick={() => { navigate("/reservation") }}>Neue Reservierung</button>
            </div>


        </main>
    )
}
