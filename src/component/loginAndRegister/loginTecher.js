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
        axios.post(host + `api/user/login`, {
            email: this.state.Email,
            password: this.state.Password
        })
            .then(function (response) {
                cookies.set("token", response.data.token, {
                    path: "/",
                    expires: new Date(Date.now() + 604800000)
                });
                window.location.href = "/Addcourses";
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
                                        placeholder="Your E-mail..."
                                        id="emailNewLogin"
                                        autocomplete="off"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Password"
                                        placeholder="Password..."
                                        id="passwordNewLogin"
                                        type="password"
                                        autocomplete="off"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Password}
                                    />
                                      <a id='forgetpasswordNew' href="/forgetpassword">Forget Password</a>
                                </div>
                                <div id="linkSignUp">
                                    
                                    <span>Don’t have an account? &nbsp;</span>
                                    <Link to="/registertecher"> Sign Up</Link>
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