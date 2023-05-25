
import { useNavigate } from "react-router-dom"
import starter from "../../assets/image/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
import getränk from "../../assets/image/edward-howell-jNs7IPdt4HQ-unsplash.jpg"
import hauptgericht from "../../assets/image/lilas-yohane-14jmOnCcZkU-unsplash.jpg"
import dessert from "../../assets/image/kobby-mendez-WXJ33HOrzvE-unsplash.jpg"

import "./Home.css"



export default function Home () {
    const navigate = useNavigate()
    return (

        <main id='homeContainer' className='border w-100 d-flex align-items-center justify-content-around flex-wrap gap-5 py-5'>
            <section className=" position-relative text-light  d-flex flex-column justify-content-center align-items-center flex-shrink-0">
                <div>
                    <p>Welcome to <span className=""><strong><em>The Restaurant</em></strong></span></p>
                    <p>This website was designed by </p>
                    <p><strong><em><span><strong>The WebWaiters</strong></span></em></strong></p>
                </div>
                <button type="button" className="btn btn-warning" onClick={() => navigate("/speise")}>Speise ansehen !</button>

            </section>
            {/* <section className="position-relative h-100 d-flex flex-column justify-content-between align-items-center py-3">
                <h1 className="btn btn-light  ">-20% OFF</h1>
                <div id="starter" className="position-absolute" >
                    <img id="starterImage" className=" w-100 h-100" src={starter} alt="" />
                </div>
                <div id="mainDish" className="position-absolute" >
                    <img id="mainDishImage" className=" w-100 h-100" src={hauptgericht} alt="" />
                </div>
                <div id="drink" className="position-absolute" >
                    <img id="drinkImage" className=" w-100 h-100" src={getränk} alt="" />
                </div>
                <div id="dessert" className="position-absolute" >
                    <img id="dessertImage" className=" w-100 h-100" src={dessert} alt="" />
                </div>

                <button type="button" className="btn btn-warning ">Angebot ansehen !</button>
            </section> */}
            <section className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0">
                <h1 className="btn btn-light  ">-20% OFF</h1>

                <div id="mainDish" className="" >
                    <img id="mainDishImage" className=" w-100 h-100" src={hauptgericht} alt="" />
                </div>


                <button type="button" className="btn btn-warning  m-4">Angebot ansehen !</button>
            </section>


        </main>
    )
}
