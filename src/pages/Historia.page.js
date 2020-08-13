import React from 'react';
import { Link } from 'react-router-dom';
import PageError from '../components/PageError.component';
import PageLoading from '../components/PageLoading.component';
import CardHistoria from '../components/CardHistoria.component';
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';
import './styles/Historia.page.css';

class Historia extends React.Component {
  state = {
    loading: true,
    error: null,
    data: [1, 2, 3, 4],
    modal2: false,
    logged: localStorage.getItem('token')||null,
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render() {
    if (this.state.loading && this.state.data === undefined) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <section className="jumbotron text-center img-fluid">
          <div className="container img-fluid">
            <h1 id="timeline">H I S T O R I A</h1>
          </div>
        </section>
        <div class="container">
          <ul class="timeline">
            {
              this.state.data.map((history) => {
                return (
                  <CardHistoria history={history} />
                )
              })
            }
          </ul>
        </div>
          {
            this.state.logged&&(
              <Link href="#!" class="float" id="menu-share" onClick={this.toggle(2)}>
                <i class="fas fa-plus my-float"></i>
              </Link>
            )
          }
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
          <MDBModalHeader toggle={this.toggle(2)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="secondary" onClick={this.toggle(2)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    )
  }
}

export default Historia;