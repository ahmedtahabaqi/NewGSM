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

class ResetPassword extends Component {
    constructor() {
        super()
        this.state = {
            PSW: '',
            RE_PSW: '',
            redirect: false,
            redirect1: false,
            type: [],
            tokens: ''
        }

    }
    componentDidMount() {
        const urlParam = new URLSearchParams(window.location.search);
        const type = urlParam.get('type');
        const tokens = urlParam.get('token');

        this.setState({ type, tokens })
    }
    ResetPassword(e) {
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

        axios({ url: host + `api/user/restpassword/${this.state.tokens}` , method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        redirect: true
                    })

                }
            })
            .catch(function (error) {
                toaster.danger(error.message)


            });
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/logintecher' />
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
                                        {this.renderRedirect()}
                                        <button id='bTnContactSend' onClick={(e) => this.ResetPassword(e)}>Save</button>
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

export default ResetPassword;



