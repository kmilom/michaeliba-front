import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CrearPregunta from "./CrearPregunta";
import ModificarPregunta from "./ModificarPregunta";

const URI = 'http://localhost:8000/questions/'

const Asamblea = () => {

    const params  = useParams();
    let idAsamblea = Number(params.idAsamblea);
    
    let progress = 45;

    //const [estadoPreguntas, setEstadoPreguntas] = useState(preguntas);


    const [preguntas, setPreguntas] = useState([])

    let preguntasAsamblea = preguntas.filter(pregunta => pregunta.assamblies_idassamblies === idAsamblea);

    useEffect (()=>{
        getPreguntas()
    }, [])

    const getPreguntas = async () => {
        const res = await axios.get(URI)
        setPreguntas(res.data)
    }

    //const eliminarPreguntas = async (id) => {
    //
    //}

    return(
        <Row>
            <Row>
                <Col id="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>&nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Gestionar asambleas</label>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Preguntas</label>
                </Col>
            </Row>
            <CrearPregunta props={idAsamblea} />
            <Col xs={{ span: 10, offset: 1 }} className="py-4">
                <Card id="text">
                    <Card.Header><h4>Preguntas</h4></Card.Header>
                    <Card.Body>   
                        {preguntasAsamblea.map((p) => 
                            <Row key={p.id}>
                                <Col xs={{ span: 4 }}>{p.question}</Col>                                                    
                                <Col>
                                    <Row>
                                        <Col xs={{span:2}}><ModificarPregunta props={p.id}/></Col>
                                        <Col>
                                                        
                                        </Col>
                                    </Row>
                                </Col>
                                <Col><ProgressBar animated now={progress}/></Col>   
                            </Row>
                        )}
                    </Card.Body>
                </Card>
            </Col>           
        </Row>
    );
}

export default Asamblea;

/*export default function Asamblea (){
    const params  = useParams();
    let idAsamblea = Number(params.idAsamblea);
    let preguntas = vectorPreguntas.filter(pregunta => pregunta.idAsamblea === idAsamblea);

    const [estadoPreguntas, setEstadoPreguntas] = useState(preguntas);

    let progress = 45;

    

    return(
        <Row>
            <Row>
                <Col id="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>&nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Gestionar asambleas</label>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Preguntas</label>
                </Col>
            </Row>
            <CrearPregunta props={idAsamblea} />
            <Col xs={{ span: 10, offset: 1 }} className="py-4">
                <Card id="text">
                    <Card.Header><h4>Preguntas</h4></Card.Header>
                    <Card.Body>
                        <Table hover>
                            <tbody>
                                {estadoPreguntas.map((p) => 
                                    <tr key={p.id}>
                                        <Row>
                                            <Col xs={{ span: 4 }}>{p.pregunta}</Col>                                                    
                                            <Col>
                                                <Row>
                                                    <Col xs={{span:2}}><ModificarPregunta props={p.id}/></Col>
                                                    <Col>
                                                        <Button size="sm" onClick={
                                                            () => {setEstadoPreguntas(estadoPreguntas.filter(pr => pr.id !== p.id))}
                                                        }>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                            </svg>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col><ProgressBar animated now={progress}/></Col>   
                                        </Row>
                                    </tr>
                                )}                                
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>           
        </Row>
    );
}*/
