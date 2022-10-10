import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Pregunta from "./Pregunta";
import { vectorPreguntas } from "../utils/Info";

export default function Preguntas (){
    return(
        <>
            <Row>{vectorPreguntas.map((p)=>( <Pregunta key={p.id} pregunta={p}/>))}</Row>
            <Row>
                <Col xs={{ span: 4, offset: 4 }} className="py-4 text-center"><Button variant="primary" size="lg">Enviar</Button></Col>
            </Row>
        </>
    );
    
}
