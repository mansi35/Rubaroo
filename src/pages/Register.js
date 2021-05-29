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
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhoneNumber] = useState('');
    const [userOrganization, setUserOrganization] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userCategory, setUserCategory] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [seed, setSeed] = useState('');    
    const [id, setId] = useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000)); 
    }, [])

    async function registerUser(e) {
        e.preventDefault();

        if (userPassword !== userConfirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError("");
            setLoading(true);
            const auth1 = await signup(userEmail, userPassword);
            if (auth1.user) {
                auth1.user.updateProfile({
                    displayName: userName,
                    photoURL: `https://avatars.dicebear.com/api/avataaars/${seed}.svg`,
                });

                db.collection("organizations").where("organizationName", "==", userOrganization).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setId(doc.id);
                    });
                })
                db.collection('organizations').doc(id).collection('users').doc(auth1.user.uid).set({
                    userName: userName,
                    organizationName: userOrganization,
                    emailAdd: userEmail,
                    phoneNumber: userPhone,
                    profilePic: `https://avatars.dicebear.com/api/avataaars/${seed}.svg`,
                    category: userCategory,
                })
                .then((s) => {
                    history.push("/dashboard");
                })
            }
          } catch {
            setError("Failed to create an account");
          }
      
          setLoading(false);
    }

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
                    history.push("/institutes");
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
                    <center>
                    <div className="register__container">
                        <h1>User Registration</h1>
                        <h3>It's quick and easy..</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <form>
                            <center>
                                <input required onChange={(e) => setUserName(e.target.value)} type="name" placeholder="User Name" />
                            </center>
                            <center>
                                <input required onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="Email" />
                            </center>
                            <center>
                                <input required onChange={(e) => setUserPhoneNumber(e.target.value)} type="tel" placeholder="Mobile Number" />
                            </center>
                            <center>
                                <input required onChange={(e) => setUserOrganization(e.target.value)} type="name" placeholder="Organization you are from" />
                            </center>
                            <center>
                                <input required onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="Password" />
                            </center>
                            <center>
                                <input required onChange={(e) => setUserConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                            </center>
                            <center>
                                <div required onChange={(e) => setUserCategory(e.target.value)} className="register__radiocontainer">
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
                                <button disabled={loading} onClick={registerUser} type="submit" className="register__register">Sign Up</button>
                            </center>
                        </form>
                    </div>
                    </center>
                </Col>
                <Col xs={12} md={6}>
                <center>
                <div className="register__container">
                    <h1>Organization Registration</h1>
                    <h3>It's quick and easy..</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form>
                        <center>
                            <input required onChange={(e) => setOrganizationName(e.target.value)} type="name" placeholder="Organization Name" />
                        </center>
                        <center>
                            <input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        </center>
                        <center>
                            <input required onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Mobile Number" />
                        </center>
                        <center>
                            <input required onChange={(e) => setNoUsers(e.target.value)} type="numeric" placeholder="No. of Users in Organization" />
                        </center>
                        <center>
                            <input required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </center>
                        <center>
                            <input required onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                        </center>
                        <center>
                            <div required onChange={(e) => setCategory(e.target.value)} className="register__radiocontainer">
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
