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
                        <h1 className="EventName">Cocktailabend</h1>
                        <div id="mainDish" className="text-center">
                    
                    <p>
                    
                        <span>
                        Erlebt eine einzigartige Mischung aus raffinierten Drinks. lasst ihr sich jeden Samstag von unseren talentierten Barkeepern verwöhnen.
                        
                        </span>
                    </p>
                    </div>
                        
                    </section>

                    <section
                        id="zweitenCard-R"
                        
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Kochkurs</h1>
                    <div id="mainDish" className="text-center">
                    
                    <p>
                    
                        <span>
                        
                        Entdeckt die Geheimnisse der kulinarischen Meisterwerke bei unserem Kochkurs! Lernt wie raffinierte Gerichte zubereitt werden sollen. Ein unvergessliches Erlebnis für alle, die ihre Kochkünste auf das nächste Level bringen möchten.   
                        
                        </span>
                    </p>
                    </div>

                    </section>

                    <section
                        id="drittenCard-R"
                        className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                        onClick={() => {
                            navigate("/reservation");
                        }}
                    >
                        <h1 className="EventName">Italienischer Abend</h1>

<div id="mainDish" className="text-center">

<p>

    <span>
        Mit einem ausgesuchten Buffet aus italienischen Köstlichkeiten empfangen wir euch jeden 1. und 3. Freitag im Monat.
    
    </span>
</p>
</div>
      
                    </section>


                    <section
                    id="zweitenCard-AE"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                    
                    onClick={() => {
                        navigate("/reservation");
                    }}
                >   
                    <h1 className="EventName">Ausstellungen</h1>
                        <div id="mainDish" className="text-center">
                            
                            <p>
                            
                            <span>Jeden ersten Sonntag des Monats laden wir zur Vernissage ein. Als Künstler*in kannst du dich gerne an uns wenden, du erreichst uns am besten telefonisch oder per Mail.
                                </span>
                            </p>
                        </div>
                </section>


                </section>
            </main>
        </div>
    );
}

export default Regelmäßig;
