import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { vectorPosiblesRespuestas } from "../utils/Info";


/*<div>
                            <input type="radio" value="yes" name={pregunta.id} /> S&iacute;. <br/>
                            <input type="radio" value="no" name={pregunta.id} /> No. <br/>
                            <input type="radio" value="non" name={pregunta.id} /> No sabe, no responde. <br/>
                        </div>  */

const Pregunta = ({pregunta}) => {
    let respuestas = vectorPosiblesRespuestas.filter(element => element.idPregunta === pregunta.id)
    return(
        <>
            <Row>
                <Col xs={{ span: 6, offset: 3 }} className="border border-secondary mb-4" id="box">
                    <Row><Col xs={{ span: 8, offset: 2 }} className="text-center border-bottom border-dark"><h5>¿{pregunta.pregunta}?</h5></Col></Row>
                    <Row>
                        <Col>
                        {respuestas.map((respuesta)=>
                                <Col key={respuesta.id}>
                                    <input type="radio" value={respuesta.respuesta} name={pregunta.id}>{respuesta.respuesta}</input><br/>
                                </Col>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Pregunta;