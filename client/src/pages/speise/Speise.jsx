
import "./Speise.css"
import { NavLink } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import first from "../../assets/image/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
import second from "../../assets/image/caleb-kim-rGb8jE9XZnE-unsplash.jpg"
import third from "../../assets/image/kobby-mendez-WXJ33HOrzvE-unsplash.jpg"
import { useFetch } from "../../hooks/useFetch/useFetch";
import axios from "axios"
import { useEffect, useState } from "react"



export default function Speise () {
    const [menuDatas, setMenuDatas] = useState()
    // const url = "http://localhost:9000/menu"
    // const { data, isPending, error } = useFetch(url)
    // console.log(data)
    // console.log(isPending)
    // console.log(error)

    // useEffect(() => {
    //     getMenuItems();
    // }, []);

    // const getMenuItems = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:9000/menu");
    //         console.log(response)
    //         setMenuDatas(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    console.log(menuDatas)

    return (
        <main id="Speise" className='text-light  w-100 d-flex flex-column justify-content-between align-items-center'>
            <section id="menuNavigation" className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 ">
                <NavLink className="fs-3 decorationNone">Vorspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Hauptspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Nachspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Getränke</NavLink>
            </section>
            <section id="menu" className="text-light mt-4 p-5 d-flex gap-5 flex-wrap m-auto">

                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={first} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={second} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={third} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={second} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={third} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
                <div className="menuElement d-flex gap-2 flex-shrink-0">
                    <div className="image">
                        <img className="image" src={first} alt="" />
                    </div>
                    <div className="text d-flex flex-column">
                        <p className="titleAndPrice d-flex justify-content-between" >Food name <span className="text-warning">50$</span></p>
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis.</p>
                    </div>
                </div>
            </section>

        </main>
    )
}
