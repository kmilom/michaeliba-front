import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
//import { vectorPreguntas } from "../utils/Info";

export default function CrearPregunta (props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Row>
            <Col xs={{ span: 8, offset:2 }} className="text-center">
                <Button variant="primary" onClick={handleShow}>Crear nueva encuesta</Button>
            </Col>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Crear Encuesta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Form.Label column sm={{ span: 2, offset: 2 }}>Pregunta</Form.Label>
                                <Col sm="6"><Form.Control name="pregunta" id="pregunta" size="sm" type="text" /></Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Row>
    );
}