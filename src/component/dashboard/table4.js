import React from "react";
import { Row, Col,Form } from 'react-bootstrap';
import { toaster, Pane, TextInput } from "evergreen-ui";
import axios from "axios";
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();

class Table4 extends React.Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: "",
            re_Password: "",
            firstName:"",
            lastName:"",
            team:false,
            field:"",
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    Login(event) {

            if ( document.getElementById("Agree").checked) {
                
     
            if (this.state.Password!==this.state.re_Password) {
                toaster.danger("Passsword not macth with Re-password");
            } else {
      
        axios.post(host + `api/user/register`, {
            email: this.state.Email,
            password: this.state.Password,
            firstname:this.state.firstName,
            lastname:this.state.lastName,
            field:this.state.field,
            gsm:this.state.team,
        })
            .then(function (response) {
                cookies.set("token", response.data, {
                    path: "/",
                    expires: new Date(Date.now() + 604800000)
                });
                window.location.href = "/Addcourses";
            })
            .catch(function (error) {
                console.log(error.response)
                if (error.response) {
                    toaster.danger("Email is already in use");
                }
            });
    }
}else{
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
                                        name="FirstName"
                                        placeholder="First Name..."
                                        id="emailNewSignup"
                                        onChange={(e)=>{
                                            this.setState({
                                                firstName:e.target.value
                                            })
                                        }}
                                        value={this.state.firstName}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="LastName"
                                        placeholder="Last Name..."
                                        id="passwordNewSignup"
                                        onChange={(e)=>{
                                            this.setState({
                                                lastName:e.target.value
                                            })
                                        }}
                                        value={this.state.lastName}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Email"
                                        placeholder="Your E-mail..."
                                        id="emailNewSignup"
                                        onChange={(e)=>{
                                            this.setState({
                                                Email:e.target.value
                                            })
                                        }}
                                        value={this.state.Email}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="Password"
                                        placeholder="Password..."
                                        type="password"
                                        id="passwordNewSignup"
                                        onChange={(e)=>{
                                            this.setState({
                                                Password:e.target.value
                                            })
                                        }}
                                        value={this.state.Password}
                                    />
                                    <TextInput width={'80%'} height={'40px'}
                                        name="RePassword"
                                        type="password"
                                        placeholder="Re-Password..."
                                        id="passwordNewSignup"
                                        onChange={(e)=>{
                                            this.setState({
                                                re_Password:e.target.value
                                            })
                                        }}
                                        value={this.state.re_Password}
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
                                        onChange={(e)=>{
                                            this.setState({
                                                field:e.target.value
                                            })
                                        }}
                                        value={this.state.field}
                                        id="passwordNewSignup" />
                                    </div>
                                    <div id='CONTinerFIEldsSIgnUP' >
                                        <div id='SELLYORECORSE_BTN' style={{cursor:"pointer"}} onClick={()=>{
                                            this.setState({team:false})
                                        }} >Sell Your Courses Only</div>
                                        <div id='JOINGSM_BTN' style={{cursor:"pointer"}} onClick={()=>{
                                            this.setState({team:true})
                                        }} >JOIN G.S.M Team</div>
                                    </div>
                                    <div id='CHEckBOxSIgnUPCOntiner'>
                                    <Pane>
                                    <Form.Check 
                                   
                                        type={"checkbox"}
                                        id={`Agree`}
                                        // label={`Check this custom ${type}`}
                                    />
                                    </Pane>
                                    
                                    &nbsp;&nbsp;I Agree to the &nbsp;<span> Terms & Conditions</span></div>
                                    <div id='SIgNuP_BTN'style={{cursor:"pointer"}} onClick={()=>{
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
export default Table4;