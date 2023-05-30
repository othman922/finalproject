

import { useState } from 'react';
import "./Resevierung.css";

function Resevierung() {
  const [name, setName] = useState('');
  const [Vorname, setVorname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [extra, setExtra] = useState('');
  const [acceptedData, setAcceptedData] = useState(false);
  const [receiveNews, setReceiveNews] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <h1>Online resevierung</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Persönliche Daten</h2>
          <label htmlFor="Nachname">Nachname</label>
          <input
            type="text"
            id="Nachname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Vorname">Vorname</label>
          <input
            type="text"
            id="Vorname"
            value={Vorname}
            onChange={(e) => setVorname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail-Adresse</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Telefonnummer">Telefonnummer</label>
          <input
            type="tel"
            id="telefonnummer"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="extra">Extra...</label>
          <textarea
            id="extra"
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="acceptedData">
            <input
              type="checkbox"
              id="acceptedData"
              checked={acceptedData}
              onChange={() => setAcceptedData(!acceptedData)}
            />
            Ich akzeptiere die Datenschutzerlärung
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="receiveNews">
            <input
              type="checkbox"
              id="receiveNews"
              checked={receiveNews}
              onChange={() => setReceiveNews(!receiveNews)}
            />
            Unsere Newsletter erhalten
          </label>
        </div>
        <button type="submit">Jetzt Buchen</button>
      </form>
    </div>
  );
}

export default Resevierung;

