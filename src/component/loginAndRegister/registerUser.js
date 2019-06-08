import React from "react";
import { Row, Col,Form } from 'react-bootstrap';
import { toaster, Pane, TextInput } from "evergreen-ui";
import axios from "axios";
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            Email: "",
            Password: "",
            re_password: '',
            Field: ''
        };
    }

    Login(event) {

        if (document.getElementById("Agree").checked) {


            if (this.state.Password !== this.state.re_password) {
                toaster.danger("Passsword not macth with Re-password");
            } else {

                axios.post(host + `api/student/register`, {
                    email: this.state.Email,
                    password: this.state.Password,
                    firstName: this.state.FirstName,
                    lastName: this.state.LastName,
                    field: this.state.Field,
                   
                })
                    .then(function (response) {
                        cookies.set("tokenUser", response.data, {
                            path: "/",
                            expires: new Date(Date.now() + 604800000)
                        });
                        window.location.href = "/";
                    })
                    .catch(function (error) {
                        console.log(error.response)
                        if (error.response) {
                            toaster.danger("Email is already in use");
                        }
                    });
            }
        } else {
            toaster.danger("please Agree on Terms & Conditions");
        }


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
                                        autocomplete="off"
                                        name="FirstName"
                                        placeholder="First Name..."
                                        id="emailNewSignup"
                                        onChange={(e) => this.setState({ FirstName: e.target.value })}
                                        value={this.state.FirstName}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        autocomplete="off"
                                        name="LastName"
                                        placeholder="Last Name..."
                                        id="passwordNewSignup"
                                        onChange={(e) => this.setState({ LastName: e.target.value })}
                                        value={this.state.LastName}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                      autocomplete="off"
                                      name="Email"
                                        placeholder="Your E-mail..."
                                        id="emailNewSignup"
                                        onChange={(e) => this.setState({ Email: e.target.value })}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                    autocomplete="off"
                                        name="Password"
                                        placeholder="Password..."
                                        type='password'
                                        id="passwordNewSignup"
                                        onChange={(e) => this.setState({ Password: e.target.value })}
                                        value={this.state.Password}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                    autocomplete="off"
                                        name="RePassword"
                                        placeholder="Re-Password..."
                                        id="passwordNewSignup"
                                        type='password'
                                        onChange={(e) => this.setState({ re_password: e.target.value })}
                                        value={this.state.re_password}
                                    />

                                </div>
                            </Col>
                            <Col md={12} lg={1} />
                            <Col id='COOOl2Signup' md={12} lg={6}>

                                <div id='part2SignUpimg'><img height={250} src={require('../../assets/student.png')} alt='1' /></div>
                                <div id='part2SignUpContentuser'>
                                    <div id='CONTinerFIEldsSIgnUP'>
                                        <TextInput width={'80%'} height={'40px'}
                                        autocomplete="off"
                                            name="LastName"
                                            placeholder="select field"
                                            onChange={(e) => this.setState({ Field: e.target.value })}
                                            id="passwordNewSignup" />
                                    </div>
                                    <div style={{ marginTop: 60 }}></div>
                                    <div id='CHEckBOxSIgnUPCOntiner'>
                                    <Pane>
                                    <Form.Check 
                                   
                                        type={"checkbox"}
                                        id={`Agree`}
                                        // label={`Check this custom ${type}`}
                                    />
                                    </Pane>
                                        &nbsp;&nbsp;I Agree to the &nbsp;<span>Terms & Conditions</span></div>
                                    <div id='SIgNuP_BTN' style={{cursor:"pointer"}} onClick={()=>{
                                        this.Login()
                                    }}> Sign Up</div>
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