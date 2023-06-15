import { useFetch } from "../../../hooks/useFetch/useFetch"
import "./Angebot.css"

export default function Angebot () {
    const offerUrl = "http://localhost:9000/getOffer";

    const { data, isPending, error } = useFetch(offerUrl);
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


                <div className="card mb-3 h-75" style={{ maxWidth: "540px" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.offer.image} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{data.offer.name}</h5>
                                <p className="card-text">{data.offer.description}</p>
                                <p className="card-text"><span className="text-warning">{data.offer.price}$</span></p>
                                <p className="card-text">{data.offer.vegan && <span className="text-success">Vegan</span>}</p>
                                <h3 className="card-text  ">{data.percentage}%</h3>


                            </div>
                        </div>
                    </div>

                </div>


            </section>}
        </main>
    )
}
