import React, { useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

import { ReactComponent as Connect } from "../svg/undraw_join_of2w.svg";

function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("");
          setLoading(true);
          const auth = await login(email);
          console.log(auth);
          history.push("/");
        } catch {
          setError("Failed to log in");
        }
    
        setLoading(false);
    }

    return (
        <div className="login">
            <Container fluid>
            
                <Row>
                    <Col xs={6} md={6} className="login__left">
                    </Col>
                    <Col xs={6} md={12}>
                        <div className="login__container">
                            {/* <div className= "login__header">
                                <h3>Rubaroo</h3>
                            </div> */}
                            {error && <Alert variant="danger">{error}</Alert>}
                            <form>
                                
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />

                                
                                <center>
                                    <div className = "login__buttons">
                                        <button disabled={loading} type="submit" onClick={handleSubmit} className="login__login mb-3">Log In</button>
                                        <Link to="/register">
                                            <button className="login__createNewAccount">Register</button>
                                        </Link>
                                    </div>
                                </center>
                                
                                <center>
                                    <hr />
                                </center>

                                <center>
                                    <div className = "loginsocial__header">
                                        <h4>Login with</h4>
                                    </div>
                                    <div className = "loginsocial__icons">
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png" alt = "facebook" />
                                    <img alt = "google" src = "https://image.similarpng.com/thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" />
                                    </div>
                                </center>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Connect />
        </div>
    )
}

export default Login
