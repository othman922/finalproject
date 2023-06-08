import "./Events.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Events() {
    const [menuDatas] = useState();
    const navigate = useNavigate();
    console.log(menuDatas);

    return (
        <main
            id="Events"
            className="text-light  w-100 d-flex flex-column justify-content-between align-items-center"
        >
            <section
                id="menuNavigation"
                className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 "
            >
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Diese Woche</NavLink>
                <NavLink className="fs-3 decorationNone">Regelmäß</NavLink>
                <NavLink className="fs-3 decorationNone">Andere Events</NavLink>
                
            </section>

            <section
                id="eventsContainer"
                className=" w-100 d-flex align-items-center justify-content-around flex-wrap gap-5 py-5"
            >
                <section  id="ersteCard" className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0">
                    <h1 className="btn btn-light  ">Event</h1>

                    <div id="mainDish" className="">
                        
                    </div>

                    <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button>
                </section>

                <section id="zweiteCard" className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0">
                    <h1 className="btn btn-light  ">Event</h1>

                    <div id="mainDish" className="">
                        
                    </div>

                    <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button>
                </section>

                <section id="dritteCard" className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0">
                    <h1 className="btn btn-light  ">Event</h1>

                    <div id="mainDish" className="">
                        
                    </div>

                    <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button>
                </section>
            </section>
        </main>
    );
}
