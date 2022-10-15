import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { vectorPreguntas } from "../utils/Info";
import CrearPregunta from "./CrearPregunta";

export default function Asamblea (){
    const params  = useParams();
    let idAsamblea = Number(params.idAsamblea);
    let preguntas = vectorPreguntas.filter(pregunta => pregunta.idAsamblea === idAsamblea);

    return(
        <Row>
            <CrearPregunta props={idAsamblea} />
            {preguntas.map((p) =>
                <Col id="preguntas" key={p.id} xs={{ span: 6, offset: 3 }} className="border">
                    <Col>{p.pregunta}</Col>
                    <Col><Button /></Col>
                </Col>
            )}
        </Row>
    );
}