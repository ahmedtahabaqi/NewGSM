import React, { Component } from 'react';
import Context from '../Context';
import { toaster } from 'evergreen-ui';
import { Redirect } from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host'

const cookies = new Cookies();

class ResetPassword1 extends Component {
    constructor() {
        super()
        this.state = {
            PSW: '',
            RE_PSW: '',
            redirect: false,
            redirect1: false,
            type: [],
            token: ''
        }

    }
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('type');
        const token = urlParams.get('token');

        this.setState({ type, token })
    }

    ResetPassword1(e) {
        e.preventDefault();

        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        if (this.state.PSW === this.state.RE_PSW) {
            formData.append("password", this.state.PSW);
            formData.append("type", this.state.type);
        }
        else {
            toaster.danger('password is not matched')
        }   
             
        axios({ url: host + `api/student/resetoken` + this.state.token, method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        redirect1: true
                    })

                }
            })
            .catch(function (error) {
                console.log(error);
                

            });
    }

    renderRedirect1 = () => {
        if (this.state.redirect1) {
            return <Redirect to='/loginuser' />
        }
    }
    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <div id='contactUSTitle'>Reset Password</div>
                            <form>
                                <div id='forgetPasswordContinerInput'>
                                    <input id='inputForgetPassword' type='password' placeholder='Password :' value={this.state.PSW} autoComplete='off'
                                        onChange={(e) => this.setState({ PSW: e.target.value })} />
                                    <input id='inputForgetPasswordRE' type='password' placeholder='Re-Password :' value={this.state.RE_PSW} autoComplete='off'
                                        onChange={(e) => this.setState({ RE_PSW: e.target.value })} />
                                </div>

                                <div id='btnCOntactusContiner'>
                                    {this.renderRedirect1()}
                                    <button id='bTnContactSend1' onClick={(e) => this.ResetPassword1(e)}>Save</button>
                                    <button id='bTnContactClear' onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ PSW: '', RE_PSW: '' })
                                    }}>Clear</button>
                                </div>
                            </form>
                        </div>
                        <FooterAllPage />

                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default ResetPassword1;



