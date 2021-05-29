import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../css/Register.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import db from '../firebase';

function Register() {
    const history = useHistory('');
    const [organizationName, setOrganizationName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('');
    const [noUsers, setNoUsers] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [seed, setSeed] = useState('');    
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000)); 
    }, [])

    async function register(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError("");
            setLoading(true);
            const auth = await signup(email, password);
            if (auth.user) {
                auth.user.updateProfile({
                    displayName: organizationName,
                    photoURL: `https://avatars.dicebear.com/api/avataaars/${seed}.svg`
                })
                db.collection('organizations').doc(auth.user.uid).set({
                    organizationName: organizationName,
                    emailAdd: email,
                    phoneNumber: phone,
                    profilePic: `https://avatars.dicebear.com/api/avataaars/${seed}.svg`,
                    category: category,
                    noUsers: noUsers,
                })
                .then((s) => {
                    history.push("/");
                })
            }
          } catch {
            setError("Failed to create an account");
          }
      
          setLoading(false);
    }

    return (
        <div className="register">
            <Container fluid>
            <Row>
                <Col xs={12} md={6} className="register__left">
                    
                </Col>
                <Col xs={12} md={6}>
                <center>
                <div className="register__container">
                    <h1>Register Today!</h1>
                    <h3>It's quick and easy..</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form>
                        <center>
                            <input onChange={(e) => setOrganizationName(e.target.value)} type="name" placeholder="Organization Name" />
                        </center>
                        <center>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        </center>
                        <center>
                            <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Contact Number" />
                        </center>
                        <center>
                            <input onChange={(e) => setNoUsers(e.target.value)} type="numeric" placeholder="Organization Address" />
                        </center>
                        <center>
                            <input onChange={(e) => setNoUsers(e.target.value)} type="numeric" placeholder="No. of children/ older people" />
                        </center>
                        
                        <center>
                            <div onChange={(e) => setCategory(e.target.value)} className="register__radiocontainer">
                                <input type="radio" name="category" value="Orphanage" />
                                <label>Orphanage</label>
                                <input type="radio" name="category" value="Old Age Home" />
                                <label>Old Age Home</label>
                            </div>
                        </center>
                        <center>
                        <p className="register__policy">
                            By clicking sign up, you agree to our{" "}
                            <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You 
                            may recieve SMS notifications from us and can opt out at any time.
                        </p>
                        </center>

                        <center>
                            <button disabled={loading} onClick={register} type="submit" className="register__register">Sign Up</button>
                        </center>
                    </form>
                </div>
                </center>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Register
