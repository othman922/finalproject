import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./EventDetails.css"


export default function EventDetails() {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="home-intro module module--inverted home-intro--colored">
        <div className="wrap__intro">
            <div className="home-intro__off">
              <h1>{event.title}</h1>
              <p className="home-intro__text">
                {event.content}
              </p>
            </div>
        </div>
        <div className="homepage_slider__wrap-big">
          <div className="home-intro__slider--big__item">
            <img src={event.image} alt={event.title} />
          </div>
        </div>
      </section>
      <section className="page-newsletter module module--yellow">
        <div className="newsletter__wrap">
          <div className="row middle-md">
            <div className="col-xs-12 col-sm-6">
              <h2>Abonniere unseren Events und erfahre alles über uns und unsere Veranstaltungen.</h2>
            </div>
            <div className="col-xs-12 col-sm-6">
              <form action="">
                <input type="email" name="email" id="" required placeholder="E-Mail hier eintragen" />
                <input type="hidden" name="action" />
                <input type="hidden" name="list_id" />
                <label>
                  <input type="checkbox" name="privacy" id="" />
                  Ich bin mit den
                    <a href="/datenschutz" target="_blank"> Datenschutzbestimmungen </a>
                  einverstanden
                </label>
                <button className="btn_css">Abschicken</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
