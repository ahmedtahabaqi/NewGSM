import React from "react";
import { Row, Col } from 'react-bootstrap';
import { toaster, Pane, TextInput,Checkbox } from "evergreen-ui";
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
            <div >
                <form >
                    <div id="MainContinerNewSignup">

                        <Row id="MainContiner2NewSignup">
                            <Col id='COOOl1Signup' md={12} lg={5}>
                                <div id='LOginLOgoSignup'><img height={100} src={require('../../assets/pngz.png')} alt='1' /></div>
                                <div id='LOginTItleSignup'> Sign Up Now</div>
                                <div id='LOginINputSignup'>

                                    <TextInput width={'80%'} height={'40px'}
                                        name="FirstName"
                                        placeholder="First Name..."
                                        id="emailNewSignup"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="LastName"
                                        placeholder="Last Name..."
                                        id="passwordNewSignup"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Password}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Email"
                                        placeholder="Your E-mail..."
                                        id="emailNewSignup"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Password"
                                        placeholder="Password..."
                                        id="passwordNewSignup"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Password}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="RePassword"
                                        placeholder="Re-Password..."
                                        id="passwordNewSignup"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.Password}
                                    />

                                </div>
                            </Col>
                            <Col md={12} lg={1} />
                            <Col id='COOOl2Signup' md={12} lg={6}>

                                <div id='part2SignUpimg'><img height={320} src={require('../../assets/doctor.png')} alt='1' /></div>
                                <div id='part2SignUpContent'>
                                    <div id='CONTinerFIEldsSIgnUP'>  
                                    <TextInput width={'80%'} height={'40px'}
                                        name="LastName"
                                        placeholder="select field"
                                        id="passwordNewSignup" />
                                    </div>
                                    <div id='CONTinerFIEldsSIgnUP'>
                                        <div id='SELLYORECORSE_BTN'>Sell Your Courses Only</div>
                                        <div id='JOINGSM_BTN'>JOIN G.S.M Team</div>
                                    </div>
                                    <div id='CHEckBOxSIgnUPCOntiner'>
                                    <Pane>
                                    <Checkbox  label="" /> 
                                    </Pane>
                                    
                                    &nbsp;&nbsp;I Agree to the &nbsp;<a> Terms & Conditions</a></div>
                                    <div id='SIgNuP_BTN'> Sign Up</div>
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