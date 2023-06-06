import { useFetch } from "../../../hooks/useFetch/useFetch"
import Button from 'react-bootstrap/Button';
import "./Getränke.css"
import { useState } from "react";

export default function Getränke () {
    const [showModal, setShowModal] = useState(false)
    const [menuId, setMenuId] = useState("")
    const handleModal = (e) => {
        setShowModal(prevShowModal => !prevShowModal)
        setMenuId(e.target.name)
        console.log(menuId)
    }

    const url = "http://localhost:9000/menu"


    const { data, isPending, error } = useFetch(url)

    return (
        <main>
            {error && <section className="text-light py-4 my-5 d-flex gap-5 flex-wrap m-auto justify-content-center">
                <p>Ein Fehler ist aufgetreten, versuchen Sie bitte erneut !</p>
            </section>}
            {isPending && <section id="loadingSection" className="text-light py-4 my-5 d-flex gap-5 flex-wrap m-auto justify-content-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </section>}
            {data && <section id="menu" className="text-light py-4 my-5 d-flex gap-5 flex-wrap m-auto justify-content-center">
                {data.filter((menu) => menu.category === "64784db0d32f3079729fbf20").map((menu) => (
                    <div key={menu.id} className="menuElement d-flex gap-2 flex-shrink-0 p-2">
                        <div className="image d-flex flex-column justify-content-evenly align-items-center h-100">
                            <img className="image text-light" src={menu.image} alt={menu.name} />
                            {menu.vegan && <span className="text-warning">Vegan</span>}
                        </div>
                        <div className="text d-flex flex-column justify-content-evenly">
                            <p className="titleAndPrice d-flex justify-content-between" >{menu.name} <span className="text-warning">{menu.price}</span></p>
                            <p className="description">{menu.description}</p>
                            <Button name={`${menu._id}`} className="btn btn-danger" style={{ width: "100px" }} variant="primary" onClick={(e) => handleModal(e)}>Details</Button>
                        </div>

                    </div>
                ))}
            </section>}
            {showModal &&
                <section className="modalContainer h-100 w-100 position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center">
                    {showModal && data && data.filter((menu) => menu._id === `${menuId}`).map((menu) => (
                        <div key={menu._id} className="myModal bg-opacity-55 bg-warning shadow-lg rounded d-flex gap-2 flex-shrink-0 p-2 flex-column align-items-center">
                            <div className="image ">
                                <img className="image text-light" src={`http://localhost:9000/uploadedImages/menu/${menu.image}`} alt={menu.name} />

                            </div>
                            {menu.vegan && <span className="text-warning">Vegan</span>}

                            <p className="titleAndPrice d-flex justify-content-between" >{menu.name} <span className="text-warning">{menu.price}$</span></p>
                            <p className="description">{menu.description}</p>
                            <Button className="btn btn-danger" style={{ width: "100px" }} variant="primary" onClick={() => { setShowModal(prevShowModal => !prevShowModal) }}>Schließen</Button>



                        </div>
                    ))}

                </section>}
        </main>
    )
}
