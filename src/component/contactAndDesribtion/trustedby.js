import React, { Component } from 'react';
import Context from '../Context';
import { Row, Col } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

import FooterAllPage from '../common/footerAllPage';


class TrustedBy extends Component {
    constructor() {
        super()
        this.state = {
        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div id='BGcTRustedBy'>
                        <div id='contentUpFooter'>
                            <div id="headerAboutUs">
                                Trusted By
                            </div>
                            <div>
                                <Row>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/1.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                    
                                                    <p style={{fontSize:16,textAlign:'left',marginLeft:10,marginRight:10,marginTop:10}}>
                                                        Molecular oral pathology <br/>
                                                        MS.c <br/>
                                                        High Dental Deplona of oral surgery<br/>
                                                        H.D.D.<br/>
                                                        member of ISCO <br/>
                                                        Member of rare cancer <br/>
                                                        cases committy <br/>
                                                        current position<br/>
                                                        Director of cancer control department /medical city <br/>
                                                        Director of cancer research lab. in oncology teaching hospital <br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Dr.Maha Mohammed Abd Ali</div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/2.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                    <p style={{fontSize:13,textAlign:'left',marginLeft:10,marginRight:10,marginTop:10}}>
                                                    Consultant Orthopedic Surgeon Ryhov Hosptal Jönköping /Sweden.<br/>
                                                    1988 MbChB Kufa University/Iraq<br/>
                                                    1996 Orthopedic Surgeon/Högland hospital/Sweden<br/>
                                                    2004 Consultant orthopedic surgeon/Swedish Board<br/>
                                                    2008 Consultant Orthopedic Surgeon/Danish Board<br/>
                                                    1999 Member of the Swedish Society of spine surgey<br/>
                                                    Lecturer for orthopedic engineering Jönköping University/Sweden.<br/>
                                                    Member of Knee replacement Academy<br/>
                                                    Member of spine Academy<br/>
                                                    Consutlant Orthopedic (Knee replacement) surgery Jönköping Ryhov Hospital /Sweden.<br/>
                                                    Consultant  Spine surgon, Neuro-Orthopedic Center/NOC/Jönköping/Sweden<br/>
                                                    Consultant Spine surgeon ,Skaraborg Hospital Skövde /Sweden.<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Dr.khalid Mohsin Mohammed</div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/3.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                    <p style={{fontSize:16,textAlign:'left',marginLeft:10,marginRight:10,marginTop:10}}>
                                                    • M.B.Ch.B ,D.G.O ,C.A.B.G.O,<br/>
                                                    • Working in Dubai Star Polyclinic, a Private Sector in Dubai and at the same time Obstetrician and Gynecologist Consultant in Belhoul Hospital<br/>
                                                    • Member of Iraqi Medical Association 1981.<br/>
                                                    • Member of Libyan Medical Association 1997.<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Dr.Ensaf Mohsen Mohammad</div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/4.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                   
                                                    <p style={{marginTop:30}}>Consultant urologist</p>
                                                    <p>MBChB , FICMS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Ass.Prof.Dr.Mohammed Alshahwani</div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/5.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                    
                                                <p style={{marginTop:30}}>Vice President at Iraqi dental association</p>
                                                    <p>Works at Baghdad smile Clinics</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Dr.Ziad Alrawi</div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                    <div id='TrustedCardCOn'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img id='IMAGETRusted' src={require('../../assets/trustedImg/6.png')} alt='1mg' />
                                                </div>
                                                <div class="flip-card-back">
                                                   
                                                    <p style={{marginTop:30}}>Dean of Dentistry Faculty at Al-Farahidi University</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div id='TrustedTITleName'>Dr.Sahar Alani</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div id='shadowBetweenFooter'></div>
                        <FooterAllPage />

                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default TrustedBy;



