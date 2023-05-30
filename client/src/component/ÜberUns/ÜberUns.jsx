import "./ÜberUns.css";
import img1 from "../ÜberUns/1.png";
import img2 from "../ÜberUns/2.png";
import img3 from "../ÜberUns/3.png";
import img4 from "../ÜberUns/4.png";
import img5 from "../ÜberUns/5.png";

const ÜberUns = () => {
    return (
        <div className="ÜberUns">
            <section id="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h3 className="section-h3">Unser Team :</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <div className="member">
                                <img src={img1} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="member">
                                <img src={img2} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="member">
                                <img src={img3} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="member">
                                <img src={img4} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="member">
                                <img src={img5} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section id="section2">
                <h2>Restaurant</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto consequatur similique quisquam optio. Provident alias perspiciatis, sint magnam repudiandae tenetur dolores ut quo libero fugiat amet est molestias quaerat et.</p>
                <p>Beschreibung des Restaurants</p>
                <p>Weitere Informationen über das Restaurant</p>
                <p>Weitere Details zum Restaurant</p>
            </section>
        </div>
    );
};

export default ÜberUns;
