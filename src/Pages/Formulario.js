import React from "react";
import Preguntas from "../components/Preguntas";
import { Row, Col } from "react-bootstrap";

export default function Formulario(){
    return(
        <>
            <div id="body">
                <Row className="Justify-content-md-center">
                    <Col xs={{span: 8, offset:2 }} id="caja" className="mb-4 border border-secondary">
                        <Col md={{ span: 6, offset: 3 }} className="text-center mb-2" id="text"><h1>Bienvenido</h1></Col>
                        <Col md={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }} className="text-center mb-4" id="text">A continuaci&oacute;n, encontrar&aacute; el formulario para su respectivo diligenciamiento y env&iacute;o.</Col>
                    </Col>
                </Row>
                <Preguntas />
            </div>
        </>
    );
}