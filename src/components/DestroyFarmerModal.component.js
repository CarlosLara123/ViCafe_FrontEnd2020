import React from 'react';
import Modal from './Modal.component';

function DestroyFarmerModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose} title="Eliminar">
        <div className="DeleteBadgeModal text-center">
            <h5>Esta seguro de eliminar a este miemmbro?</h5>
            <p>Si lo elimina se perdera toda su información.</p>

            <div className="text-right">
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-2">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DestroyFarmerModal;