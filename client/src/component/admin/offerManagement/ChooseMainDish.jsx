import { useFetch } from "../../../hooks/useFetch/useFetch"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

export default function ChooseMainDish () {

    const [showModal, setShowModal] = useState(false)
    const [menuId, setMenuId] = useState("")
    const [offerPercentage, setOfferPercentage] = useState("")

    // const [percentage, setPercentage] = useState("")

    const handleModal = (e) => {
        setShowModal(prevShowModal => !prevShowModal)
        setMenuId(e.target.name)
        console.log(menuId)
    }

    const setOffer = async () => {
        setShowModal(prevShowModal => !prevShowModal)


        try {


            const response = await axios.post(
                "http://localhost:9000/setOffer",
                {
                    menuId: menuId,
                    offerPercentage: offerPercentage
                },


            );
            console.log(response)

        } catch (error) {
            console.error(error);
        }
    };


    const url = "http://localhost:9000/menu"
    const { data, isPending, error } = useFetch(url)


    console.log(data)

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
                {data.filter((menu) => menu.category === "64784de8d32f3079729fbf29").map((menu) => (
                    <div key={menu.id} className="menuElement d-flex gap-2 flex-shrink-0 p-2">
                        <div className="image d-flex flex-column justify-content-evenly align-items-center h-100">
                            <img className="image text-light" src={menu.image} alt={menu.name} />
                            {menu.vegan && <span className="text-warning">Vegan</span>}
                        </div>
                        <div className="text d-flex flex-column justify-content-evenly">
                            <p className="titleAndPrice d-flex justify-content-between" >{menu.name} <span className="text-warning">{menu.price}€</span></p>
                            <p className="description">{menu.description}</p>
                            <Button name={`${menu._id}`} className="btn btn-danger" style={{ width: "100px" }} variant="primary" onClick={(e) => handleModal(e)}>Choose</Button>
                        </div>

                    </div>
                ))}
            </section>}
            {showModal &&
                <section className="modal-fullscreen h-100 w-100 position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center bg-light.bg-gradient">

                    <div className="myModalOffer bg-warning rounded d-flex gap-2 flex-shrink-0 p-2 flex-column align-items-center opacity-100 ">
                        <label className="">Set percentage</label>
                        <input className="w-75" type="text" name="OffersPercentage" value={offerPercentage} onChange={(e) => setOfferPercentage(e.target.value)} />
                        <Button className="btn btn-danger w-75" variant="primary" onClick={setOffer}>Set Offer</Button>
                    </div>

                </section>}
        </main>
    )
}
