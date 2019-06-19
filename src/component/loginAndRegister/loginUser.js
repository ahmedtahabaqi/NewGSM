import React from "react";
import { Row, Col } from 'react-bootstrap';
import { toaster,  TextInput } from "evergreen-ui";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
import host from '../Host';
const cookies = new Cookies();

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: ""
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    Login(event) {
        event.preventDefault();
        axios.post(host + `api/student/login`, {
            email: this.state.Email,
            password: this.state.Password
        })
            .then(function (response) {
                console.log(response.data)
                cookies.set("tokenUser", response.data, {
                    path: "/",
                    expires: new Date(Date.now() + 604800000)
                });
                window.location.href = "/";
            })
            .catch(function (error) {
                if (error.response) {
                    toaster.danger("Please check your email and password then try again");
                }
            });
    }
    render() {
        return (
            <div>
                <form >
                    <div id="MainContinerNewLogin">

                        <Row id="MainContiner2NewLogin">
                            <Col id='COOOl1' md={12} lg={5}>
                                <div id='LOginLOgo'><img height={120} src={require('../../assets/pngz.png')} alt='1' /></div>
                                <div id='LOginTItle'> Logn in</div>
                                <div id='LOginINput'>

                                    <TextInput width={'80%'} height={'40px'}
                                        name="Email"
                                        autocomplete="off"
                                        placeholder="Your E-mail..."
                                        id="emailNewLogin"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Password"
                                        placeholder="Password..."
                                        id="passwordNewLogin"
                                        autocomplete="off"
                                        type='password'
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Password}
                                    />
                                    <Link to='/forgetpassword1' id='forgetpasswordNew'>Forget Password</Link>
                                      {/* <a id='forgetpasswordNew' href="/forgetpassword">Forget Password</a> */}
                                </div>
                                <div id="linkSignUp">
                                    
                                    <span>Don’t have an account? &nbsp;</span>
                                    <Link to="/registeruser"> Sign Up</Link>
                                </div>
                            </Col>
                            <Col md={12} lg={1} />
                            <Col id='COOOl2' md={12} lg={6}>
                                <div onClick={this.Login.bind(this)} id='btnNEWlogin'>
                                    Logn in
                               </div>

                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;