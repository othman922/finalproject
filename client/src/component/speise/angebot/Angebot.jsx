import { useFetch } from "../../../hooks/useFetch/useFetch"
import "./Angebot.css"

export default function Angebot () {
    const url = "http://localhost:9000/menu"
    const { data, isPending, error } = useFetch(url)
    console.log(data)
    console.log(isPending)
    console.log(error)
    return (
        <main className='offerContainer d-flex justify-content-center align-items-center w-100 '>
            {isPending && <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {error && <p>
                Ein Fehler ist aufgetreten, versuchen Sie es bitte erneut!
            </p>}

            {data && <section className="w-100 h-100 d-flex justify-content-center align-items-center mt-5">
                {data && data.filter((menu) => menu._id === "64870c92ecb0cf1057164d43").map((menu) => (

                    <div key={menu._id} className="card mb-3 w-25 h-75">
                        <img src={menu.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{menu.name}</h5>
                            <p className="card-text">{menu.description}</p>
                            <p className="card-text"><span className="text-warning">{menu.price}$</span></p>
                            <p className="card-text">{menu.vegan && <span className="text-success">Vegan</span>}</p>

                        </div>
                    </div>


                ))}
            </section>}
        </main>
    )
}
