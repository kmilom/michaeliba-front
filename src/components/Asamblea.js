import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Asamblea = () => {

    const params  = useParams();
    let idAsamblea = Number(params.idAsamblea);

    const { deletePregunta, getPreguntas, preguntas } = useContext(GlobalContext)

    useEffect (()=>{
        getPreguntas();
    })

    return(
        <Row>
            <Row>
                <Col id="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>&nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Gestionar asambleas</label>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <label>Preguntas</label>
                </Col>
            </Row>
            <Col xs={{ span: 10, offset: 1 }} className="py-4">
                <Card id="text">
                    <Card.Body>
                        <Table hover>
                            <tbody>
                                {preguntas.map((p) =>
                                    <tr key={p.id}>
                                        {p.assamblies_id === idAsamblea ?
                                            <>
                                                <td>{p.question}</td>
                                                <td className="text-center">
                                                    <Button size="sm" onClick={() => {deletePregunta(p.id)}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                        </svg> 
                                                    </Button>
                                                </td>
                                            </> 
                                        : null}
                                    </tr>
                                )}
                            </tbody>
                        </Table>       
                    </Card.Body>
                </Card>
            </Col>           
        </Row>
    );
}

export default Asamblea

/*<CrearPregunta props={idAsamblea} />*/
