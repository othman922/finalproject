import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";

import "./Home.css";

export default function Home () {
    const navigate = useNavigate();
    const url = "http://localhost:9000/getOffer";

    const { data, isPending, error } = useFetch(url);

    console.log(data);


    return (

        <main id='homeContainer' className='w-100 d-flex align-items-center justify-content-around flex-wrap gap-5'>








            <section className=" text-light  d-flex flex-column justify-content-center align-items-center flex-shrink-0 p-3">

                <div>
                    <p>Welcome to <span className=""><strong><em>The Restaurant</em></strong></span></p>
                    <p>This website was designed by </p>
                    <p><strong><em><span><strong>The WebWaiters</strong></span></em></strong></p>
                </div>
                <button type="button" className="btn btn-warning" onClick={() => navigate("/speise")}>Speise ansehen !</button>

            </section>



            <section className="  d-flex flex-column justify-content-center align-items-center py-3 flex-shrink-0">
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

                    <button type="button" className="btn btn-warning  m-4" onClick={() => { navigate("/angebot") }}>Angebot ansehen !</button>
                </>}
            </section>




        </main>
    )
}
