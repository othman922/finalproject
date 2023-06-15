import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const url = "http://localhost:9000/getOffer";
  const { data, isPending, error } = useFetch(url);

  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <section className="image-background-section hero-section cologne wf-section">
        <div className="container-full slide-wrapper w-container">
          <div className="div-block">
            <h2 className="hero-slider-heading">
              Jeden Tag ab 11.30 Uhr
              <br />
              für SIE da
            </h2>
          </div>
        </div>
      </section>

      <main id="homeContainer" className="w-100 d-flex align-items-center justify-content-around flex-wrap gap-5 py-5">
        <div className="flex-container">
          <section className="position-relative text-light d-flex flex-row justify-content-between align-items-center flex-shrink-0">
            <div>
              <p>
                Schauen Sie sich unsere
                <span className="">
                  <strong>
                    <em> Speisekarte </em>
                  </strong>
                </span>
                an!
              </p>
              <button type="button" className="btn btn-warning btn-lg" onClick={() => navigate("/speise")}>
                Speisekarte
              </button>
            </div>
          </section>

          <section className="position-relative text-light d-flex flex-row justify-content-between align-items-center flex-shrink-0">
          {isPending && <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}
                {error && <p className="text-warning">
                    Ein Fehler ist aufgetreten, versuchen Sie es bitte erneut!
                </p>}
                {data && <>
                    <h1 className="btn btn-light  ">{data.percentage}%</h1>
                    <div id="imgBox" className="w-100 d-flex align-items-center  gap-2 px-3">
                        <div id="offerDish" className=" " >
                            <img id="offerDishImage" className=" w-100 h-100" src={data.offer.image} alt="" />
                        </div>
                        <h5 id="offerName" className="text-light underline">{data.offer.name}</h5>
                    </div>
                    <button type="button" className="btn btn-warning  m-4" onClick={() => { navigate("/angebot") }}>Angebot ansehen!</button>
                </>}
          </section>
        </div>

        <section id="gallery" className="position-relative text-light d-flex flex-row justify-content-between align-items-center flex-shrink-0">
          <div className="div-text">
            <h2>Entdecken Sie unser Restaurant</h2>
            <p>Werfen Sie einen Blick auf einige Bilder unseres Restaurants:</p>
          </div>
          <div className="image-gallery">
            {[
              "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="gallery-image"
                onClick={() => openModal(imageUrl)}
              />
            ))}
          </div>
        </section>

        {modalImage && (
          <div className="modal-container" onClick={closeModal}>
            <img src={modalImage} alt="Modal" className="modal-image" />
          </div>
        )}

      </main>
    </>
  );
}