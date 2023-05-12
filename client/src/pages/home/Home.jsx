import "./Home.css"

export default function Home () {
    return (
        <main id='homeContainer' className='w-70 h-100 mx-5  row'>
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
            <section className="w-100 col-12 d-flex justify-content-between px-5 align-items-center ">
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">Angebot der Woche ➡️</a>
                </div>
                <div className="backgroundCircle bg-warning rounded-circle d-flex justify-content-center align-items-center">
                    <a href="#">zu den Events ➡️</a>
                </div>
            </section>
        </main>
    )
}
