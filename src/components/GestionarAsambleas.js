import React from "react";
import { Col, Row } from "react-bootstrap";
import { vectorAsambleas } from "../utils/Info";
import { Link } from "react-router-dom";

export default function GestionarAsambleas (){
    return(
        <>
            <Row>
                <Col id="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>&nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Gestionar asambleas</label>
                </Col>
            </Row>
            <Row>{vectorAsambleas.map((asamblea)=>
                <Col key={asamblea.id} id="asambleas" className="border" xs={{ span: 8, offset: 2 }} lg={{ span: 3 }} >
                    <Link to={`asamblea/${asamblea.id}`} className="text-decoration-none" id="link">
                        <Row>
                            <Col xs={{ span: 6, offset: 3 }} className="text-center border-bottom border-dark">{asamblea.barrio}</Col>
                        </Row>
                        <Row>
                            <Col>{asamblea.fecha}</Col>
                        </Row>
                        <Row>
                            <Col>Informacion adicional sobre asambleas</Col>
                        </Row>
                    </Link>
                </Col>
            )}</Row>
        </>
    );
}

/*
*/