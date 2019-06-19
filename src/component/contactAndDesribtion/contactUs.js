import React, { Component } from 'react';
import Context from '../Context';
import {toaster} from 'evergreen-ui';
// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host'


const cookies = new Cookies();

class ContactUs extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }

    }
    addContact(e) {
        e.preventDefault();
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("body", this.state.message);
    

        axios({ url: host + "api/contact/add/", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    
                }
            })
            .catch(function (error) {
                toaster.danger(error.request.response)

            });
    }
    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <div id='contactUSTitle'>Contact Us</div>
                            <form>
                                <div id='inputContactContiner'> 
                                    <input id='inputContactUs' placeholder='Name :' value={this.state.name} autoComplete='off'
                                        onChange={(e) => this.setState({ name: e.target.value })} />
                                    <input id='inputContactUs' placeholder='E-mail :' value={this.state.email} autoComplete='off'
                                        onChange={(e) => this.setState({ email: e.target.value })} />
                                    <input id='inputContactUs' placeholder='Phone :' value={this.state.phone} autoComplete='off'
                                        onChange={(e) => this.setState({ phone: e.target.value })} />
                                </div>
                                <div>
                                    <textarea id='inputContactUsArea' placeholder='Message :' value={this.state.message} autoComplete='off'
                                        onChange={(e) => this.setState({ message: e.target.value })} />
                                </div>
                                <div id='btnCOntactusContiner'>
                                    <button id='bTnContactSend' onClick={(e)=>this.addContact(e)}>send</button>
                                    <button id='bTnContactClear' onClick={(e)=>{e.preventDefault();
                                        this.setState({name:'',email:'',phone:'',message:''})}}>clear</button>
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

export default ContactUs;



