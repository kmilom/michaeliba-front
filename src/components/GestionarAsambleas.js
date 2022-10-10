import React from "react";
import { Col, Row } from "react-bootstrap";
import { vectorAsambleas } from "../utils/Info";
import { Link } from "react-router-dom";

export default function GestionarAsambleas (){

    return(
        <Row>
            <Col xs={{ span: 8, offset: 2 }} className="text-center"><h1>Gestionar asambleas</h1></Col>
            <Col xs={{ span:6, offset: 3 }}>
            {vectorAsambleas.map((asamblea)=>
            <Link key={asamblea.id} to={'asamblea/${asamblea.id}'}>
                <Col className="text-center text-decoration-none border border-secondary" id="asambleas">
                    <Row>
                        <Col xs={{ span:8, offset: 2 }} className="text-center"><h4>{asamblea.nombre}</h4></Col>
                    </Row>
                    <Col>Aqui va a ir la informacion concerniente a la asamblea</Col>
                </Col>
            </Link>)}
            </Col>
        </Row>
    );
}