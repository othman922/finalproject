import "./ÜberUns.css";
import profile from "../ÜberUns/profile.jpg"
import member1 from "../ÜberUns/member1.png"
import member2 from "../ÜberUns/member2.jpg"
import member4 from "../ÜberUns/member4.png"
import member3 from "../ÜberUns/member3.png"



const ÜberUns = () => {
    return (
        <div className="ÜberUns">

            <section id="team" className="section">
                <div className="container" >
                    <div className="section-header">
                        <h3 className="section-h3">Unser Team:</h3>
                        <p>
                        Bei unserem Restaurant legen wir großen Wert auf ein Team von
                        engagierten Fachleuten, die sich leidenschaftlich dafür einsetzen,
                        unseren Gästen ein unvergessliches kulinarisches Erlebnis zu
                        bieten. Unsere Mission ist es, exzellenten Service, köstliche
                        Speisen und eine warme Atmosphäre zu kombinieren, um sicherzustellen,
                        dass sich unsere Gäste bei jedem Besuch bei uns wohlfühlen.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-6 memberTest">
                            <div className="member">
                                <img src={member1} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Etienne</h4>
                                        <span>Project Manager, Frontend Lead</span>
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

                        <div className="col-lg-2 col-md-6 memberTest">
                            <div className="member">
                                <img src={member2} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Youssef</h4>
                                        <span>Repository Maintainer, Backend Lead</span>
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

                        <div className="col-lg-2 col-md-6 memberTest" >
                            <div className="member">
                                <img src={member3} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Michelle</h4>
                                        <span>Backend Developer</span>
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

                        <div className="col-lg-2 col-md-6 memberTest">
                            <div className="member">
                                <img src={member4} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Ammar</h4>
                                        <span>Frontend Developer</span>
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

                        <div className="col-lg-2 col-md-6 memberTest">
                            <div className="member">
                                <img src={profile} className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Othman</h4>
                                        <span>Frontend Developer</span>
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


            <section id="section2" className="section">
            <div className="container" data-aos="fade-up">
          <h2>Restaurant</h2>
          <p>
            Neben unserer hervorragenden
            Speisekarte bieten wir regelmäßig Veranstaltungen und Sonderaktionen an.
            Seien Sie gespannt auf unsere kulinarischen Events, bei denen Sie neue
            Geschmackserlebnisse entdecken können. Besuchen Sie auch unsere Bar, um
            erlesene Getränke und eine breite Auswahl an Weinen zu genießen.
          </p>
          <p>
            Unser Restaurant ist bekannt für seine gemütliche Atmosphäre, exzellenten
            Service und erstklassige Speisen. Bei uns können Sie köstliche Gerichte
            aus frischen Zutaten genießen, die von unseren talentierten Küchenchefs
            zubereitet werden.
          </p>
          <p>
            Neben unserer hervorragenden Speisekarte bieten wir regelmäßig Veranstaltungen
            und Sonderaktionen an. Seien Sie gespannt auf unsere kulinarischen Events, bei
            denen Sie neue Geschmackserlebnisse entdecken können. Besuchen Sie auch unsere Bar,
            um erlesene Getränke und eine breite Auswahl an Weinen zu genießen.
          </p>
          <p>
            Unser freundliches Personal steht Ihnen jederzeit zur Verfügung, um Ihre Fragen
            zu beantworten und Ihre Reservierungen entgegenzunehmen. Wir legen Wert auf hohe
            Qualität und Kundenzufriedenheit. Besuchen Sie uns und erleben Sie einen unvergesslichen
            Abend in unserem Restaurant.
          </p>
        </div>
            </section>

            
        </div>
    );
};

export default ÜberUns;
