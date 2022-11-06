import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { vectorPreguntas } from "../utils/Info";

export default function Preguntas (){
    return(
        <>
            <Row>
                {vectorPreguntas.map((p)=>(
                    <Col key={p.id} xs={{ span: 6, offset: 3 }} className="border border-secondary mb-4" id="box">
                        <Row><Col xs={{ span: 8, offset: 2 }} className="text-center border-bottom border-dark"><h5>¿{p.pregunta}?</h5></Col></Row>
                        <Row>
                            <div>
                                <input type="radio" value="yes" name={p.id} /> S&iacute;. <br/>
                                <input type="radio" value="no" name={p.id} /> No. <br/>
                                <input type="radio" value="non" name={p.id} /> No sabe.<br/>
                            </div>
                        </Row>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xs={{ span: 4, offset: 4 }} className="py-4 text-center"><Button variant="primary" size="lg">Enviar</Button></Col>
            </Row>
        </>
    );
    
}
