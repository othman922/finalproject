import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Regelmäßig() {
    // const test = [{ name: 1 }, { name: 2 }, { name: 3 }];
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("Regelmäßig");
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <div>
            {/* {test.map((a) => (
                <section className=" w-100 d-flex align-items-center justify-content-around flex-wrap gap-5 py-5">{a.name} </section>
            ))} */}

            <main
                id="Events"
                className="text-light  w-100 d-flex flex-column justify-content-between align-items-center"
            >
                <section
                    id="menuNavigation"
                    className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 "
                    style={{color:"red"}}
                >
                    <Link
                        to="/DieseWoche"
                        className={`fs-3 decorationNone ${
                            activeSection === "Diese Woche" ? "active" : ""
                        }`}
                        href="#eventsContainer"
                        onClick={() => handleSectionClick("Diese Woche")}
                    >
                        Diese Woche
                    </Link>

                    <Link
                        to="/Regelmäßig"
                        className={`fs-3 decorationNone ${
                            activeSection === "Regelmäßig" ? "active" : ""
                        }`}
                        onClick={() => handleSectionClick("Regelmäßig")}
                    >
                        Regelmäßig
                    </Link>

                    <Link
                        to="/AndereEvents"
                        className={`fs-3 decorationNone ${
                            activeSection === "Andere Events" ? "active" : ""
                        }`}
                        href="#eventsContainer"
                        onClick={() => handleSectionClick("Andere Events")}
                        // style={{color:"red"}}
                    >
                        Andere Events
                    </Link>
                </section>

                <section
                    id="eventsContainer"
                    className=" w-100 d-flex align-items-center justify-content-around flex-wrap gap-5 py-5"
                >
                    <section
                        id="erstenCard-R"
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Event</h1>
                        <div id="mainDish" className="text-center">
                    
                    <p>
                    
                        <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos est? Maxime vero explicabo magni aspernatur, saepe mollitia doloribus ullam nihil est atque quod similique nobis praesentium magnam quam nulla?
                        
                        </span>
                    </p>
                    </div>
                        {/* <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button> */}
                    </section>

                    <section
                        id="zweitenCard-R"
                        
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Event</h1>
                    <div id="mainDish" className="text-center">
                    
                    <p>
                    
                        <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos est? Maxime vero explicabo magni aspernatur, saepe mollitia doloribus ullam nihil est atque quod similique nobis praesentium magnam quam nulla?
                        
                        </span>
                    </p>
                    </div>

                        {/* <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button> */}
                    </section>

                    <section
                        id="drittenCard-R"
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Event</h1>

<div id="mainDish" className="text-center">

<p>

    <span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos est? Maxime vero explicabo magni aspernatur, saepe mollitia doloribus ullam nihil est atque quod similique nobis praesentium magnam quam nulla?
    
    </span>
</p>
</div>


                        {/* <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button> */}
                    </section>

                    <section
                        id="vierttenCard-R"
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Event</h1>

<div id="mainDish" className="text-center">

<p>

    <span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos est? Maxime vero explicabo magni aspernatur, saepe mollitia doloribus ullam nihil est atque quod similique nobis praesentium magnam quam nulla?
    
    </span>
</p>
</div>

                        {/* <button
                        type="button"
                        className="btn btn-warning  m-4"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        buchen
                    </button> */}
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Regelmäßig;
