import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ModalDelete = (props) => {
   

    return (
        <>
            <Modal
                show = {props.show}
                onHide={props.handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ props.messege}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={props.handleClose}
                    >
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={props.handleAction}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ModalDelete;