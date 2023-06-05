
import { useNavigate } from "react-router-dom"
import hauptgericht from "../../assets/image/lilas-yohane-14jmOnCcZkU-unsplash.jpg"
import { useFetch } from "../../hooks/useFetch/useFetch"


import "./Home.css"



export default function Home () {
    const navigate = useNavigate()
    const url = "http://localhost:9000/menu"
    const { data, isPending, error } = useFetch(url)
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

            {data && data.filter((menu) => menu._id === "64784f89d32f3079729fbf4a").map((menu) => (
                <section key={menu._id} className="  position-relative d-flex flex-column justify-content-between align-items-center py-3 flex-shrink-0">

                    <h1 className="btn btn-light  ">-20% OFF</h1>

                    <div id="mainDish" className="" >
                        <img id="mainDishImage" className=" w-100 h-100" src={`http://localhost:9000/uploadedImages/menu/${menu.image}`} alt="" />
                    </div>


                    <button type="button" className="btn btn-warning  m-4" onClick={() => { navigate("/angebot") }}>Angebot ansehen !</button>
                </section>

            ))}

            {/* {data.map((menu) => (
                    <div key={menu.id} className="menuElement d-flex gap-2 flex-shrink-0 p-2">
                        <div className="image d-flex flex-column justify-content-evenly align-items-center h-100">
                            <img className="image" src={`http://localhost:9000/uploadedImages/menu/${menu.image}`} alt="" />
                            <span>cathegorie</span>
                        </div>
                        <div className="text d-flex flex-column justify-content-evenly">
                            <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                            <button className="btn btn-danger">Details</button>
                        </div>
                    </div>
                ))} */}
        </main>
    )
}
