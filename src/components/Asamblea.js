import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { vectorPreguntas } from "../utils/Info";

export default function Asamblea (){
    const params  = useParams();

    let preguntas = vectorPreguntas.filter(pregunta => pregunta.idAsamblea === Number(params.idAsamblea));

    return(
        <Row>
            {preguntas.map((p) =>
            <Col xs={{ span: 6, offset: 3 }} className="text-center">
                {p.pregunta}
            </Col>)}
        </Row>
    );
}