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
                    <Col xs={8} md={6} className="d-none d-md-block">
                        <Link className="/register" to="/register">
                            <button className="header__button">Connecting souls</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default LoginHeader
