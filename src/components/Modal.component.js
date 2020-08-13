import React from 'react'
import ReactDOM from 'react-dom';
import './styles/Modal.component.css'

function Modal(props){
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__encabezado">
                    <h3>{props.title}</h3>
                    <button onClick={props.onClose} className="Modal__close-button">X</button>
                </div>
                <div className="Modal__container">
                    <hr />
                    {props.children}
                </div>
            </div>,
            document.getElementById('modals')
        )
}

export default Modal;