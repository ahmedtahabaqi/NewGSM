import React, { Component } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';

class FooterAllPage extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <div id='newFooterContiner'>
                            <span id='New_FooterRow1'></span>
                            <div id='New_FooterRow2'>
                                <Link id='trustedby_BTN' to="/trustedby"><span id='trustedby_BTN'>Trusted By</span></Link>
                                <Link id='TermsOfService_BTN' to="/tearmsOfService">  <span id='TermsOfService_BTN'>Terms Of Service</span></Link>
                                <Link id='GSMTeam_BTN' to="/gsmteam">    <span id='GSMTeam_BTN'>G.S.M Team</span></Link>
                                <Link id='ContactUs_BTN' to="/contactus"><span id='ContactUs_BTN'>Contact Us</span></Link>
                                <Link id='AboutUs_BTN' to="/aboutus"><span id='AboutUs_BTN'>About Us</span></Link>
                            </div>
                            <div id='New_FooterRow3'>
                                <div id='LOGANDCOPY'>
                                    <div>
                                    <Link to='/'>
                                <img  onClick={() => {  window.location.href = "#continer_header" }}
                                id='logoFOOTER' src={require('../../assets/pngz.png')} alt="img" />
                                </Link>
                                    </div>
                                    <div id='CORY_RIGHT'>Copyright © 2019</div>
                                </div>
                                <div id='Socil_BTN'>
                                    <a href='https://www.facebook.com/GSM-Medical-Education-2305929739630350/'>
                                        <img width={50} id='SosialLOGO' src={require('../../assets/facebook.png')} alt="img" />
                                    </a>
                                    <a href=' https://www.instagram.com/gsmmed.education/'>
                                        <img width={50} id='SosialLOGO' src={require('../../assets/instagram.png')} alt="img" />
                                    </a>
                                    <a href='https://twitter.com/GsmMedicalEdu'>
                                        <img width={50} id='SosialLOGO' src={require('../../assets/twitter.png')} alt="img" />
                                    </a>
                                    <a href='https://www.youtube.com/channel/UCjEa0e1n5nsN4RUAYRe0c2A?view_as=subscriber'>
                                        <img width={50} id='SosialLOGO' src={require('../../assets/youtube.png')} alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default FooterAllPage;
