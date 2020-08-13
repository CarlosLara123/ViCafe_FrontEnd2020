import React from 'react';
import { Link } from 'react-router-dom';
import NotImageUser from '../images/noneImagePublication.png'
import "./styles/CardMember.component.css"
import { MDBRow, MDBCol } from 'mdbreact';

function CardMember(props) {
    const member = props.member;
    return (
        <React.Fragment>
            <MDBRow>
                <MDBCol md="4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        {
                                            member.url&&(<img className="img-fluid" src={member.url} alt="card image" style={{objectFit: "cover"}} />)
                                        }
                                        {
                                            !member.url&&(<img className="img-fluid" src={NotImageUser} alt="card image" style={{objectFit: "cover"}} />)
                                        }
                                        <h4 className="card-title">{member.name}</h4>
                                        <p className="card-text text-left"><b>CALIDAD DE TASA:  </b> {member.tasa}</p>
                                        <p className="card-text text-left"><b>UBICACIÓN:  </b> {member.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">{member.name}</h4>
                                        <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <Link className="social-icon text-xs-center" target="_blank" to="#!">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <Link className="social-icon text-xs-center" target="_blank" to="#!">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <Link className="social-icon text-xs-center" target="_blank" to="#!">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <Link className="social-icon text-xs-center" target="_blank" to="#!">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </React.Fragment>
    )
}



export default CardMember;