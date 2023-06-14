import "./Events.css";

import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get("http://localhost:9000/events");
            setEvents(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchEvents();
      }, []);

    const [activeSection, setActiveSection] = useState("Diese Woche");
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <main
            id="Events"
            className="text-light  w-100 d-flex flex-column justify-content-between align-items-center"
        >
            {/* <section className="intro">
                <div className="intro-box">
                    <h1>Unsere Events</h1>
                    <div className="intro-text">
                    <p>Alle unsere neue und regelmäßige Events</p>
                    </div>
                </div>
                <img className="intro__bg entered lazyloaded" alt="" src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-ll-status="loaded" />
            </section>


            <section id="postList" className="events list module u-text-align--center">
                <div className="wrap">
                    <div className="post-filtering">
                        <div className="post-cat-filter">
                            <ul>
                                <li>
                                    <button className="btn_css post-all btn--active"> Alle </button>
                                </li>
                                <li>
                                    <button className="js-filter-post-category btn_css" data-cat="350"> Diese Woche </button>
                                </li>
                                <li>
                                    <button className="js-filter-post-category btn_css" data-cat="350"> Regelmäß </button>
                                </li>
                                <li>
                                    <button className="js-filter-post-category btn_css" data-cat="350"> Andere Events </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="postGrid" className="postgrid postgrid--grid">
                {events.map((event) => (
                    <div key={event._id} className="postgrid__item">
                        <Link to={event._id} className="postgrid__item__visual">
                            <img className="lazyload" src={event.image} alt={event.title} />
                        </Link>
                        <div className="postgrid__item__header">
                            <h4>
                                <Link to={event._id}>{event.title}</Link>
                            </h4>
                            <div className="postgrid__item__date">
                                {event.createdAt
                                    ? new Date(event.createdAt).toLocaleDateString('de-DE')
                                    : new Date().toLocaleDateString('de-DE')
                                }
                            </div>
                            <div className="postgrid__item__excerpt"></div>
                        </div>
                        <div className="postgrid__item__bottom">
                            <Link to={event._id} className="postgrid__item__ticket btn_css">
                                Lesen
                            </Link>
                            <div className="postgrid__item__border"></div>
                        </div>
                    </div>
                ))}
                </div>


            </section> */}

            

            <section
                id="menuNavigation"
                className="d-flex justify-content-around align-items-center mt-8 border border-3 border-warning w-75 "
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
                    <article className="test">
                        <div className="EventsBeschreibung">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Obcaecati nostrum vel voluptatem animi autem,
                            error fugiat unde tempora id illum voluptatum, neque
                            cupiditate officiis sed asperiores. Suscipit facilis
                            cum voluptatibus.
                        </div>
                    </article>
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
                    <h1 className="btn btn-light  ">
                        <a>Italian Night</a>
                    </h1>

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
    );
}
