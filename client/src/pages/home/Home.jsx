import { Footer } from "../../component/footer/Footer"
import { Header } from "../../component/header/Header"
import { useNavigate } from "react-router-dom"
import starter from "../../assets/image/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
import getränk from "../../assets/image/edward-howell-jNs7IPdt4HQ-unsplash.jpg"
import hauptgericht from "../../assets/image/lilas-yohane-14jmOnCcZkU-unsplash.jpg"
import dessert from "../../assets/image/kobby-mendez-WXJ33HOrzvE-unsplash.jpg"

import "./Home.css"



export default function Home () {
    const navigate = useNavigate()
    return (
        <main id='homeContainer' className='w-100% '>
            <Header/>
            <section className="w-100 col-12 d-flex justify-content-between px-5 align-items-center  ">
                <h1 className="text-warning">
                    Web-waiters
                </h1>
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <div className="circle rounded-circle d-flex justify-content-center align-items-center flex-column">
                        <span>
                            zur
                        </span>
                        <a className=" text-decoration-none text-black " href="#">
                            <strong>Speisekarte ➡️</strong>
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-100 col-12 d-flex justify-content-center align-items-center ">
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">Tisch reservieren ➡️</a>
                </div>
            </section>
            <section className=" col-12 d-flex justify-content-between px-5 align-items-center ">
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">Angebot der Woche ➡️</a>
                </div>
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">zu den Events ➡️</a>
                </div>
            </section>
            <Footer/>
        <main id='homeContainer' className='d-flex justify-content-between align-items-center gap-5 '>

            {/* <section className="border h-75">
                <p>Welcome to <span><strong><em>The restaurant</em></strong></span></p>
                <p>design by <span><strong><em>Web-Waiter</em></strong></span></p>
                <button>Speise Ansehen</button>
            </section>
            <section className="border h-75">
                <h2>-20% off</h2>
                <div id="mainDish" className="border border-3 border-warning" >
                    <img id="mainDishImage" className=" w-100 h-100" src={hauptgericht} alt="" />
                </div>
            </section> */}

            {/* <section className="welcomeContainer ">

            </section>
            <section className="dayOfferContainer">

            </section> */}
            <section className=" border borer-2 border-warning position-relative text-light fs-3 d-flex flex-column justify-content-evenly align-items-center">
                <p>Welcome to <span className="fs-2"><strong><em>The Restaurant</em></strong></span></p>
                <p>This website was designed by </p>
                <p><strong><em><span><strong>The WebWaiters</strong></span></em></strong></p>
                <button type="button" className="btn btn-warning fs-3" onClick={() => navigate("/speise")}>Speise ansehen !</button>

            </section>
            <section className="position-relative h-100 d-flex flex-column justify-content-between align-items-center py-3">
                <h1 className="btn btn-light fs-2 ">-20% OFF</h1>
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

                <button type="button" className="btn btn-warning fs-3">Angebot ansehen !</button>
            </section>
            {/* <section className=" position-relative d-flex flex-column justify-content-between align-items-center py-3">
                <h1 className="btn btn-light fs-2 ">-20% OFF</h1>

                <div id="mainDish" className="" >
                    <img id="mainDishImage" className=" w-100 h-100" src={hauptgericht} alt="" />
                </div>


                <button type="button" className="btn btn-warning fs-3 fs-sm-4">Angebot ansehen !</button>
            </section> */}
            {/* <section className="bg-black text-light">
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">.col-md-4</div>
                            <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                            <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-9">
                                Level 1: .col-sm-9
                                <div className="row">
                                    <div className="col-8 col-sm-6">
                                        Level 2: .col-8 .col-sm-6
                                    </div>
                                    <div className="col-4 col-sm-6">
                                        Level 2: .col-4 .col-sm-6
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </main>
        </main>
    )
}
