import { useFetch } from "../../../hooks/useFetch/useFetch"
import Button from 'react-bootstrap/Button';
import "./AllMenus.css"

export default function AllMenus () {
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
                {data.map((menu) => (
                    <div key={menu.id} className="menuElement d-flex gap-2 flex-shrink-0 p-2">
                        <div className="image d-flex flex-column justify-content-evenly align-items-center h-100">
                            <img className="image text-light" src={menu.image} alt={menu.name} />
                            {menu.vegan && <span className="text-warning">Vegan</span>}
                        </div>
                        <div className="text d-flex flex-column justify-content-evenly">
                            <p className="titleAndPrice d-flex justify-content-between" >{menu.name} <span className="text-warning">{menu.price}$</span></p>
                            <p className="description">{menu.description}</p>
                            <Button className="btn btn-danger" style={{ width: "100px" }} variant="primary" >Details</Button>

                        </div>

                    </div>
                ))}
            </section>}
        </main>
    )
}
