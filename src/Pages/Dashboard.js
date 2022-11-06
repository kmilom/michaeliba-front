import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Dashboard(){
    return(
        <Row>
            <Col xs={{ span: 3 }} className="border border-secondary" id="panel">
                <Row>
                    <Col xs={{span:10}} md={{span:10, offset:1}} className="text-center">
                        <Link to="" className="text-decoration-none" id="link-dash"><h1>Dashboard</h1></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" xs={{span:8, offset:2}} md={{span:8, offset:2}}>
                        <Row><Link to="gestionar-asambleas" className="text-decoration-none" id="link-dash">Asambleas</Link></Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" xs={{span:8, offset:2}} md={{span:8, offset:2}}>
                        <Row><Link to="administrar-usuarios" className="text-decoration-none" id="link-dash">Usuarios</Link></Row>
                    </Col>
                </Row>    
            </Col>
            <Col>
            <Row><Header/></Row>
            <Row><Col><Outlet /></Col></Row>
            </Col>
        </Row>
    );
}

