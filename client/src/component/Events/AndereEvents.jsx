import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
function AndereEvents() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Andere Events");
  const handleSectionClick = (section) => {
      setActiveSection(section);
  };
  return (
    <div>
      <main
            id="Events"
            className="text-light  w-100 d-flex flex-column justify-content-between align-items-center"
        >
      <section
                id="menuNavigation"
                className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 "
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
                    id="erstenCard-AE"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                    
                    onClick={() => {
                        navigate("/reservation");
                    }}
                >
                    
                    <h1 className="EventName">Weihnachten</h1>

                    <div id="mainDish" className="text-center">
                            
                            <p>
                            
                               <span>Wir laden euch ein am 24. Dezember mit uns das Fest zu feiern. 
                                Mit unserem Weihnachtsmenü werden wir euch den Abend verzaubern, für weitere Informationen zu Menü und Reservierungen, schreibt uns eine Mail mit Namen, Anliegen und Anzahl der Personen.
                                
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
                    id="drittenCard-AE"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                    
                    onClick={() => {
                        navigate("/reservation");
                    }}
                >
                    <h1 className="EventName">Private Events</h1>
                        <div id="mainDish" className="text-center">
                            
                            <p>
                            
                            <span> Ob Hochzeit, Firmenfeiern oder Geburtstag, selbstverständlich lässt sich unsere Location auch privat mieten. Für Reservierungen und Fragen wendet euch gerne an uns.

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
                    id="vierttenCard-AE"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center hamada"
                
                    onClick={() => {
                        navigate("/reservation");
                    }}
                >
                    <h1 className="EventName">Italienischer Abend</h1>
                        <div id="mainDish" className="text-center">
                            
                            
                            <p>
                            
                            <span> Mit einem ausgesuchten Buffet aus italienischen Köstlichkeiten empfangen wir euch jeden 1. und 3. Freitag im Monat.

                            </span>
                            </p>
                            
                        </div>


                    

                    {/* {<button
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

    
  )
}

export default AndereEvents