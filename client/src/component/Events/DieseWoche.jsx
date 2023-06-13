import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
function DieseWoche() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Diese Woche");
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
                    id="erstenCard"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0"
                >
                    <h1 className="btn btn-light  ">Event</h1>

                    <div id="mainDish" className=""></div>
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

                <section
                    id="zweitenCard"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0"
                >
                    <h1 className="btn btn-light  ">Event</h1>

                    <div id="mainDish" className=""></div>

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

                <section
                    id="drittenCard"
                    className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0"
                >
                    <h1 className="btn btn-light  ">Italian Night</h1>

                    <div id="mainDish" className=""></div>

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
    </div>

    
  )
}
export default DieseWoche