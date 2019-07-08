import React, { Component } from 'react';
import Context from '../Context';
// import { toaster } from 'evergreen-ui';
import { Redirect } from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
import axios from 'axios';
import host from '../Host'

class ForgetPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            redirect: false,
        }

    }
    componentDidMount() {

    }

    SendEmail(e) {
        e.preventDefault();
        let formData = new FormData();
        var headers = { "Content-Type": "application/json" };

        formData.append("email", this.state.email);
        
            axios({ url: host + `api/user/sendemail`, method: "POST", data: formData, headers: headers })
            .then(response => {

                if (response.status === 200) {
                    this.setState({
                        redirect: true
                    })
                }
            })
            .catch(function (error) {
                console.log(error.message);
                

            });     
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/message' />
        }
    }
    render() {
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <div id='contactUSTitle'>Forget Password</div>
                            <form>
                                <div id='forgetPasswordContinerInput'>
                                    <input id='inputForgetPassword' placeholder='E-mail :' value={this.state.name} autoComplete='off'
                                        onChange={(e) => this.setState({ email: e.target.value })} />

                                </div>

                                <div id='btnCOntactusContiner'>
                                    {this.renderRedirect()}
                                    <button id='bTnContactSend' onClick={(e) => {
                                        this.SendEmail(e)
                                    }}>ok</button>
                                    <button id='bTnContactClear' onClick={(e) => {
                                        e.preventDefault();
                                    }}>cancel</button>
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

export default ForgetPassword;



