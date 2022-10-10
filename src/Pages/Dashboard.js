import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Styles/estilos-dashboard.css";

export default function Dashboard(){
    return(
        <Row>
            <Col xs={{ span: 4 }} className="border border-secondary" id="panel">
                <Row>
                    <Col xs={{span:10}} md={{span:10, offset:1}} className="text-center">
                        <Link to="" className="text-decoration-none" ><h1>Dashboard</h1></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" xs={{span:8, offset:2}} md={{span:8, offset:2}}>
                        <Row><Link to="administrar-usuarios" className="text-decoration-none">Administrar Usuarios</Link></Row>
                    </Col>
                </Row>                  
            </Col>
            <Col><Outlet /></Col>
        </Row>
    );
}