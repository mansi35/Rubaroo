import React, {Component} from "react";
import "./InstituteLogin.css";
import { Link } from 'react-router-dom';
import axios from "axios";


class InstituteLogin extends Component {
	constructor() {
	    super()
	    this.state = {
		username: "",
		
		
	    }
		this.handleChange=this.handleChange.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		//this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	
	handleChange(event){
	    this.setState({
		[event.target.name]: event.target.value
	    })
    }
    
    handleLogin(event){
        event.preventDefault();

            const user = {
                      username: this.state.username
                    }

            console.log(user);

            axios.post('http://localhost:3000/Institute/login', user)
              .then(res => console.log(res.data));

            window.location = '';
          }


    render() {
        return(
            <div>
                <body className="InstituteLogin">
                    <div className="InstituteLogin-container" id="InstituteLogin-container">
                        <div className="InstituteLogin-form-container InstituteLogin-sign-in-container">
					    <form action="#" onSubmit={this.handleLogin}>
		    			    <h1 >Login</h1><br/>
		    			    <input type="text" placeholder="User Name" name="username" onChange={this.handleChange}/>
		    			    <br/><button className="InstituteLogin-button">Login</button>
		    		    </form>
		    	        </div>
                    
                    <div class="InstituteLogin-overlay-container">
                        <div class="InstituteLogin-overlay">
                        <div class="InstituteLogin-overlay-panel InstituteLogin-overlay-right">
		    				<h1>Hello!</h1>
		    				<p>Enter your personal details and start journey with us</p>
                            <Link to="" className="">Register</Link>
		    			</div>
                        </div>
                    </div>
					</div>
                </body>
            </div>
        )
    }

}
export default InstituteLogin;