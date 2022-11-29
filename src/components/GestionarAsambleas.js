import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GlobalContext from '../context/GlobalContext'

const GestionarAsambleas = () => {

    const {getAsambleas, asambleas } = useContext(GlobalContext)
    useEffect (()=>{
        getAsambleas();
    })

    return(
        <>
            <Row>
                <Col id="text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>&nbsp;&nbsp;/&nbsp;&nbsp;<label>Gestionar asambleas</label>
                </Col>
            </Row>
            {asambleas.length !== 0 ?
                <Row>{asambleas.map((asamblea)=>
                    <Col key={asamblea.id} id="asambleas"  xs={{ span: 8, offset: 2 }} lg={{ span: 3 }} >
                        <Link to={`asamblea/${asamblea.id}`} className="text-decoration-none" id="link">
                            <Row>
                                <Col xs={{ span: 6, offset: 3 }} className="text-center border-bottom border-dark">{asamblea.suburb}</Col>
                            </Row>
                            <Row>
                                <Col>Fecha asignada: {asamblea.date}</Col>
                            </Row>
                        </Link>
                    </Col>
                )}</Row>
            : 
                <Col className="text-center" xs={{ offset: 5 }}>
                    CARGANDO
                </Col>
            }
        </>
    )

}

export default GestionarAsambleas