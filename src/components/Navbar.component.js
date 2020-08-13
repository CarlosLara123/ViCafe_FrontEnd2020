import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Icono.jpg'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBModal,
    MDBModalBody,
} from "mdbreact";
import './styles/Navbar.component.css';

class Navbar extends React.Component {

    state = {
        isOpen: false,
        modal14: false,
        logged: localStorage.getItem('token') || null,
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    logOut = () => {
        localStorage.setItem('token', null)
    }

    render() {
        console.log(this.state.logged)
        return (
            <React.Fragment>
                <MDBNavbar className="Navbar" dark expand="md">
                    <MDBNavbarBrand>
                        <Link onClick={this.toggle(14)} to="#!">
                            <img src={logo} class="rounded-circle z-depth-0" alt="" style={{ height: "40px", width: "38px", padding: "0px" }} />
                        </Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/home">
                                    <i className="fas fa-home"></i> Inicio
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/covicafe">
                                    <i className="fas fa-question-circle"></i> ¿Quiénes sómos?
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/history">
                                    <i className="fas fa-landmark"></i> Historia
                                </MDBNavLink>
                            </MDBNavItem>
                            {
                                this.state.logged && (
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0" alt="" style={{ height: "30px", padding: "0px" }} />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                )
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {/* Modal code below: */}
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalBody id="modal-content_">
                        <img src={logo} class="rounded-circle z-depth-0" alt="" style={{ height: "500px", width: "490px", padding: "0px" }} />
                    </MDBModalBody>
                </MDBModal>
            </React.Fragment>
        )
    }
}
export default Navbar;