import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./styles/Login.page.css";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

class Login extends React.Component {
    state = {
        loading: false,
        error: null,
        nickname: '',
        password: '',
    }

    handleChangeNickName = (e) => {
        let value = e.target.value;
        this.setState({ nickname: value });
    }

    handleChangePassword = (e) => {
        let value = e.target.value;
        this.setState({ password: value });
    }

    logIn = async () => {

        try {
            const data = await api.vicafe.login(this.state.nickname, this.state.password);
            this.setState({loading: true});
            if(localStorage.getItem('token') && localStorage.getItem('token') !== null){
                this.props.history.push('/home');
            }else{
                Toast.fire({
                    icon: 'error',
                    title: data.error.message
                })
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: error
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                    <MDBRow>
                        <MDBCol md="4" className="login-wrap">
                        <form className="login-html">
                            <p className="h1 text-center mb-4"><span className="white text-">SIGN</span><span className="green text-white">IN</span></p>
                            <div className="grey-text">
                            <MDBInput
                                label="Nombre de usuario"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                onChange={this.handleChangeNickName}
                            />
                            <MDBInput
                                label="Contraseña"
                                icon="lock"
                                group
                                type="password"
                                validate
                                onChange={this.handleChangePassword}
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn onClick={this.logIn}>Login</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                
            </React.Fragment>
        )
    }
}

export default Login;