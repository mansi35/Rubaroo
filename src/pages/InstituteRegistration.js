import React from 'react'
import "./InstituteRegistration.css";
import axios from "axios"
import { Link } from 'react-router-dom';

class InstituteRegistration extends Component {
	constructor() {
	    super()
	    this.state = {
        UserName: "",
        Institute name: "",
		Institute Address: "",
		Institute pincode: "",
	    }
		this.handleChange=this.handleChange.bind(this);
		//this.handleLogin=this.handleLogin.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }

    handleSubmit(event){
        event.preventDefault();

            const user = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                    }

            console.log(user);

            axios.post('http://localhost:3000/messauth/register', user)
              .then(res => console.log(res.data));

            window.location = '/messauth/login';
          }

function InstituteRegistration() {
    return (
        <div>
        <body className="Institute_Registration">
            <div className="Institute_Registration-container" id="Institute_Registration-container">
                <div className="Student_registration-form-container Student_registration-sign-in-container">
                <form action="#" onSubmit={this.handleSubmit}>
                    <h1 >Create Account</h1><br/>
                    <input type="text" placeholder="UserName" name="Username" onChange={this.handleChange}/>
                    <input type="text" placeholder="Institute name" name="Institute name" onChange={this.handleChange}/>
                    <input type="text" placeholder="Institute Address" name="Institute Address" onChange={this.handleChange}/>
                    <input type="text" placeholder="Institute pincode" name="Institute pincode" onChange={this.handleChange}/>
                    <input type="picture" placeholder="" onChange={this.handleChange}/>
                    
                    <br/><button className="Institute_Registration-button">Register</button>
                </form>
                </div>
            
            <div class="Institute_Registration-overlay-container">
                <div class="Institute_Registration-overlay">
                <div class="Institute_Registration-overlay-panel Institute_Registration-overlay-right">
                    <h1>Welcome </h1>
                    <p>We love you</p>
                    <Link to="" className="">Login</Link>
                </div>
                </div>
            </div>
            </div>
        </body>
    </div>
    )
}

export default InstituteRegistration
