import "./Speise.css"
import { NavLink } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch/useFetch";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import axios from "axios"
import { useState } from "react"
function MyVerticallyCenteredModal (props, menu) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {menu.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{menu.description}</h4>
                <p>
                    {menu.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default function Speise () {
    const [modalShow, setModalShow] = useState(false);
    const url = "http://localhost:9000/menu"
    const { data, isPending, error } = useFetch(url)
    console.log(data)
    console.log(isPending)
    console.log(error)
    return (
        <main id="Speise" className='text-light  w-100 d-flex flex-column justify-content-between align-items-center'>
            <section id="menuNavigation" className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 flex-wrap">
                <NavLink className="fs-3 decorationNone">Vorspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Hauptspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Nachspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Getränke</NavLink>
            </section>
            {isPending && <section id="loadingSection" className="text-light py-4 my-5 d-flex gap-5 flex-wrap m-auto justify-content-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </section>}
            {data && <section id="menu" className="text-light py-4 my-5 d-flex gap-5 flex-wrap m-auto justify-content-center">
                {data.map((menu) => (
                    <div key={menu.id} className="menuElement d-flex gap-2 flex-shrink-0 p-2">
                        <div className="image d-flex flex-column justify-content-evenly align-items-center h-100">
                            <img className="image text-light" src={`http://localhost:9000/uploadedImages/menu/${menu.image}`} alt={menu.name} />
                            {menu.vegan && <span className="text-warning">Vegan</span>}
                        </div>
                        <div className="text d-flex flex-column justify-content-evenly">
                            <p className="titleAndPrice d-flex justify-content-between" >{menu.name} <span className="text-warning">50$</span></p>
                            <p className="description">{menu.description}</p>
                            <Button className="btn btn-danger" style={{ width: "100px" }} variant="primary" onClick={() => setModalShow(true)}>Details</Button>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} menu={menu} />
                        </div>
                        {/* <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>This is the modal content.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
                {/* `http://localhost:9000/uploadedImages/menu/${menu.image}` */}
            </section>}
        </main>
    )
}
