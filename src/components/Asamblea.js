import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { vectorPreguntas } from "../utils/Info";
import CrearPregunta from "./CrearPregunta";
import ModificarPregunta from "./ModificarPregunta";

export default function Asamblea (){
    const params  = useParams();
    let idAsamblea = Number(params.idAsamblea);
    let preguntas = vectorPreguntas.filter(pregunta => pregunta.idAsamblea === idAsamblea);

    return(
        <Row>
            <CrearPregunta props={idAsamblea} />
            {preguntas.map((p) =>
                <Col id="preguntas" key={p.id} xs={{ span: 6, offset: 3 }} className="border">
                    <Row>
                        <Col xs={{ span: 6 }}>{p.pregunta}</Col>
                        <Col xs={{ span: 1, offset: 3 }}>
                            <ModificarPregunta props={p.id}/>
                        </Col>
                        <Col>
                            <Button size="sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            )}
        </Row>
    );
}