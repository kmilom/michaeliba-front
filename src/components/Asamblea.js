import React from "react";
import { Col, Row } from "react-bootstrap";
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
                <Col key={p.id} xs={{ span: 6, offset: 3 }} className="text-center border">{p.pregunta}</Col>
            )}
        </Row>
    );
}