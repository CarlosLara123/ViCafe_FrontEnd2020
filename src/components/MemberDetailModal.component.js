import React from 'react';
import Modal from './Modal.component';

function MemberDetailModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose} title="Nombre">
        <div className="DeleteBadgeModal text-center">
            <h5>Contenido</h5>

            <div className="text-right">
                <button onClick={props.onClose} className="btn btn-primary">OK</button>
            </div>
        </div>
    </Modal>
}

export default MemberDetailModal;