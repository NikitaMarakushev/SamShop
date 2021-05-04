import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button, { Form } from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {
    return (
        <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={props.onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice
