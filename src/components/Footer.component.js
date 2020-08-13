import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Footer.component.css"

class Footer extends React.Component {
    state = {
        logged: localStorage.getItem('token') || null,
    }

    render() {
        return (
            <React.Fragment>
                <footer className="section footer-classNameic context-dark bg-image" style={{background: "#2d3246"}}>
                    <div className="container">
                        <div className="row row-40">
                            <div className="col-md-5 mt-3">
                                <h5>Contacts</h5>
                                <dl className="contact-list">
                                    <dt>Dirección:</dt>
                                    <dd>CANTÓN NORTE BAJO, SAN ANTONIO HUISTA, HUEHUETENANGO, GUATEMALA</dd>
                                </dl>
                                <dl className="contact-list">
                                    <dt>E-mail:</dt>
                                    <dd><a href="mailto:#">rlcovicafe@gmail.com</a></dd>
                                </dl>
                                <dl className="contact-list">
                                    <dt>Teléfonos:</dt>
                                    <div className="row">
                                        <div className="col-lg-5 text-center">
                                            <span id="administradora"><a href="tel:#">(+502) 3024 6126</a></span><br />
                                            <span>Carolina Chávez<br /> Administradora.</span>
                                        </div>
                                        <div className="col-lg-7 text-center">
                                            <span id="representante"><a href="tel:#">(+502) 4491 7021</a></span><br />
                                            <span>Roxana Maricruz Montejo López<br /> Representante legal.</span>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div className="col-md-5 col-xl-5">
                                <div className="pr-xl-4"><Link className="brand" to="index.html"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37"/></Link>
                                    <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                                    <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                                </div>
                            </div>
                            {
                                !this.state.logged&&(
                                    <div className="col-md-2 mt-2">
                                        <Link
                                            className="btn btn-outline-light btn-style"
                                            to="/Login"
                                            style={{marginTop: "150%",marginLeft: "100px"}}
                                        >
                                            <i className="fas fa-sign-in-alt"></i> Login
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="row no-gutters social-container">
                        <div className="col">
                            <Link className="social-inner" to="/" target="blank">
                                <span className="icon mdi mdi-facebook"></span>
                                <span><i className="fab fa-facebook"></i> Facebook</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="social-inner" to="/">
                                <span className="icon mdi mdi-instagram"></span>
                                <span><i className="fab fa-instagram"></i> instagram</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="social-inner" to="/">
                                <span className="icon mdi mdi-twitter"></span>
                                <span><i className="fab fa-twitter"></i> twitter</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid text-center">
                            <p>
                                <span>© </span>
                                <span className="copyright-year">2019 </span>
                                <span>Carlos Lara</span><span>. 
                                </span><span>All Rights Reserved.</span>
                            </p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;