import React, { Component } from 'react';
import Context from '../Context';
// import {Link} from 'react-router-dom';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';


class MessageCheack extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <div id='messagecheack'>
                                <h2>Please Check Your Email To Reset Password</h2>
                            </div>
                        </div>
                        <FooterAllPage />

                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default MessageCheack;



