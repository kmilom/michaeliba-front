import React from "react";
import { Col, Row } from "react-bootstrap";
import { vectorAsambleas } from "../utils/Info";
import { Link } from "react-router-dom";

export default function GestionarAsambleas (){
    return(
        <>
            <Row>
                <Col xs={{ span: 8, offset: 2 }} className="text-center"><h1>Gestionar asambleas</h1></Col>
            </Row>
            <Row>{vectorAsambleas.map((asamblea)=>
                <Col key={asamblea.id} id="asambleas" className="border" xs={{ span: 8, offset: 2 }} lg={{ span: 5 }} >
                    <Link to={`asamblea/${asamblea.id}`} className="text-decoration-none" >
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