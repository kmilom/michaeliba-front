import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home () {
    return(
        <>
            <Row id="home-header" className="border">
                <Col xs = {{ span: 2 }} className="text-center">
                    <Link to='/dashboard'><button id="home-michaeliba">Sign in</button></Link>
                </Col>
            </Row>
        </>
    );
}