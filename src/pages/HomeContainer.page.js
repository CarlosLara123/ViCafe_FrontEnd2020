import React from 'react';
import { Link } from 'react-router-dom';
import CardMember from '../components/CardMember.component';
import Publication from '../components/Publication.component';
import PageError from '../components/PageError.component';
import PageLoading from '../components/PageLoading.component';
import api from '../api';
import Swal from 'sweetalert2';
import {
  MDBTooltip,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBInput } from "mdbreact";

import './styles/HomeContainer.page.css';

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

class HomeContainer extends React.Component {

  state = {
    loading: true,
    error: null,
    farmers: undefined,
    farmer: undefined,
    publications: undefined,
    publication: {
      title: '',
      text: '',
      image: ''
    },
    modalIsOpen: false,
    modal1: false,
    modal2: false,
    logged: localStorage.getItem('token') || null,
  }

  componentDidMount() {
    console.log(this.state.logged)
    this.getMembers();
  }

  getMembers = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.vicafe.getMemebers();
      this.setState({ loading: false, farmers: data.farmers });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  newFarmer = async (e) => {
    try {
        this.setState({ loanding: false })
        Toast.fire({
          icon: 'success',
          title: 'Eliminado exitosamente'
        })
    } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error
        })
        this.setState({ loanding: false, error: error })
    }
  }

  newPost = async () => {
    try {
        this.setState({ loanding: false })
        Toast.fire({
          icon: 'success',
          title: 'Eliminado exitosamente'
        })
    } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error
        })
        this.setState({ loanding: false, error: error })
    }
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
        [modalNumber]: !this.state[modalNumber]
    });
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  }

  handleInfoFarmer = async (e) => {
    this.setState({ loanding: true, error: null })

    try {
      let data = await api.vicafe.getOneMember(this.state.famers[0]._id);
      console.log(data)
      this.setState({ loanding: false, farmer: data })
    } catch (error) {
      this.setState({ loanding: false, error: error })
    }
  }

  handleEditFarmer = async (e) => {
    this.setState({ loanding: true, error: null })

    try {
      this.setState({ loanding: false })
    } catch (error) {
      this.setState({ loanding: false, error: error })
    }
  }

  handleDeleteFarmer = async (e) => {
    this.setState({ loanding: true, error: null })

    Swal.fire({
      title: '¿Quieres eliminar a este miembro?',
      text: "Si eliminas a este miembro se perderan todos sus datos",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        try {
          this.setState({ loanding: false })
          Toast.fire({
            icon: 'success',
            title: 'Eliminado exitosamente'
          })
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: error
          })
          this.setState({ loanding: false, error: error })
        }
      }
    })
  }

  handleOnChangeInputTitle = (e) =>{
    let value = e.target.value;
    console.log(e)
  }

  handleOnChangeInputText = (e) =>{
    let value = e.target.value;
    console.log(value)
  }

  handleOnChangeInputImage = (e) =>{
    console.log(e)
  }

  render() {
    if (this.state.loading && this.state.farmers === undefined) {
      return <PageLoading />
    }

    return (
      <React.Fragment>

        <section className="jumbotron text-center img-fluid section__">
          <div className="container img-fluid">
            <h1 id="covicafe">Cooperativa Vicafe</h1>
          </div>
        </section>

        <div className="Home__miembros">
          <div>
            <h2>M I E M B R O S</h2>
          </div>
          <div className="container">
            {
              this.state.farmers.map((farmer) => {
                return (
                  <CardMember
                    key={farmer.id}
                    member={farmer}
                    onOpenModal={this.handleOpenModal}
                    onCloseModal={this.handleCloseModal}
                    onInfoFarmer={this.handleInfoFarmer}
                    onEditFarmer={this.handleEditFarmer}
                    onDeleteFarmer={this.handleDeleteFarmer}
                    modalIsOpen={this.state.modalIsOpen}
                  />
                );
              })
            }
          </div>
        </div>

        <div className="Home__noticias">
          <div>
            <h2>N O T I C I A S</h2>
          </div>
          <div className="container">
            <Publication />
          </div>
        </div>

        {
          this.state.logged && (
            <>
            <Link href="#!" class="float" id="menu-share">
              <i class="fas fa-bars my-float"></i>
            </Link>
            <ul className="ul">
              <li className="li">
                <MDBTooltip placement="left">
                  <Link to="#" id="btn-member" onClick={this.toggle(1)}>
                    <i class="fas fa-user-plus my-float-menu"></i>
                  </Link>
                  <div class="label-text">Agregar miembro</div>
                </MDBTooltip>
              </li>
              <li className="li">
                <MDBTooltip placement="left">
                  <Link to="#" id="btn-post" onClick={this.toggle(2)}>
                    <i class="fas fa-paper-plane my-float-menu"></i>
                  </Link>
                  <div class="label-text">Nuevo publicación</div>
                </MDBTooltip>
              </li>
            </ul>
            </>
          )
        }

        {/* Modal code below: */}
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle(1)}
          >
            Nuevo Miembro
          </MDBModalHeader>

          <MDBModalBody>
            <form>
              <div className="grey-text">
                <MDBInput label="Titulo" icon="font" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Descripción" icon="file-word" group type="textarea" validate error="wrong"
                  success="right" />
                <MDBInput label="Selecciona una imagen" icon="folder-open" group type="file" validate
                  error="wrong" success="right" />
              </div>
            </form>
          </MDBModalBody>

          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="secondary" onClick={this.toggle(1)}>Cancelar</MDBBtn>
            <MDBBtn color="primary">Agregar</MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle(2)}
          >
            Nueva Publicación
          </MDBModalHeader>

          <MDBModalBody>
            <form>
              <div className="grey-text">
                <MDBInput label="Titulo" icon="font" group type="text" validate error="wrong"
                  success="right"  onChange={this.handleOnChangeInputTitle} />
                <MDBInput label="Descripción" icon="file-word" group type="textarea" validate error="wrong"
                  success="right" onChange={this.handleOnChangeInputText} />
                <MDBInput label="Selecciona una imagen" icon="folder-open" group type="file" validate
                  error="wrong" success="right" onChange={this.handleOnChangeInputImage} />
              </div>
            </form>
          </MDBModalBody>

          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="secondary" onClick={this.toggle(2)}>Cancelar</MDBBtn>
            <MDBBtn color="primary">Publicar</MDBBtn>
          </MDBModalFooter>
        </MDBModal>


      </React.Fragment>
    )
  }
}

export default HomeContainer;