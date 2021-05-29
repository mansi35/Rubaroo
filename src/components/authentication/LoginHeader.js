import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/RegisterHeader.css';

function LoginHeader() {
    return (
        <div>
            <div className="register__header">
            <Container fluid>
                <Row>
                    <Col xs={8} md={12} className="header__left">
                        
                    </Col>
                    <Col xs={8} md={12} className="d-none d-md-block">
                        <div class = "app__header">
                            <h1>Roobaroo</h1>
                        </div>

                        <div className = "app__subheader">
                            <p>Come, let's connect :)</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default LoginHeader
