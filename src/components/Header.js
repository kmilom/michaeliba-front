import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Row id="head" className="border border-secondary">
            <Col>
                <Row>
                    <Col xs={{ span: 3 }} className="text-center"><Link className="text-decoration-none" to='/'>Inicio</Link></Col>
                    <Col xs={{ span: 3 }} className="text-center"><Link className="text-decoration-none" to='/formulario'>Cuestionario</Link></Col>
                    <Col xs={{ span: 3 }} className="text-center"><Link className="text-decoration-none" to='/dashboard'>Panel de control</Link></Col>
                    <Col xs={{ span: 3 }} className="text-center">Cerrar sesi&oacute;n</Col>
                </Row>
            </Col>
        </Row>  
    );
}

export default Header;