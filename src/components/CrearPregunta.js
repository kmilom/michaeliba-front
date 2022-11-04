import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { vectorPreguntas } from "../utils/Info";

export default function CrearPregunta (props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const estadoInicialFormPregunta = {
        id: vectorPreguntas.length,
        pregunta: '',
        idAsamblea: Number(props.props)
    }

    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialFormPregunta);

    const gestionarCamposForm = event => {
        const {name, value} = event.target;
        cambiarEstadoForm({...estadoForm,[name]:value});
    }

    const onSubmitForm = e => {
        e.preventDefault();
        estadoForm.id = vectorPreguntas.length + 1;
        vectorPreguntas.push(estadoForm);
        cambiarEstadoForm(estadoInicialFormPregunta);
        handleClose();
    }

    return(
        <Row>
            <Col xs={{ span: 8, offset:2 }} className="text-center"><Button variant="primary" onClick={handleShow}>Crear nueva pregunta</Button></Col>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Crear Pregunta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Group>
                            <Row>
                                <Form.Label column sm={{ span: 2, offset: 2 }}>Pregunta</Form.Label>
                                <Col sm="6"><Form.Control name="pregunta" id="pregunta" size="sm" type="text" value={estadoForm.pregunta} onChange={gestionarCamposForm} /></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Col xs={{ span: 4, offset: 5 }}><Button type="submit">Guardar</Button></Col>
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