
import "./Speise.css"
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import first from "../../assets/image/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
import second from "../../assets/image/caleb-kim-rGb8jE9XZnE-unsplash.jpg"
import third from "../../assets/image/kobby-mendez-WXJ33HOrzvE-unsplash.jpg"



export default function Speise () {
    return (
        <main id="Speise" className='text-light  w-100 h-100 d-flex flex-column justify-content-between align-items-center'>
            <section className="d-flex justify-content-around align-items-center mt-3 border border-3 border-warning w-75 ">
                <NavLink className="fs-3 decorationNone">Vorspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Hauptspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Nachspeise</NavLink>
                <NavLink className="fs-3 decorationNone">Getränke</NavLink>
            </section>
            <section className="d-flex gap-5 flex-wrap align-items-center text-dark h-100">



                <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '100%', height: "25rem" }}>
                            <Card.Img variant="top" src={first} className="h-75" />
                            <Card.Body>
                                <Card.Title>Ralpegnos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '100%', height: "25rem" }}>
                            <Card.Img variant="top" src={second} className="h-75" />
                            <Card.Body>
                                <Card.Title>Tik tak</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '100%', height: "25rem" }}>
                            <Card.Img variant="top" src={third} className="h-75" />
                            <Card.Body>
                                <Card.Title>Waiters</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </section>

        </main>
    )
}
