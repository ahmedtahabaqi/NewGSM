import React, { Component } from 'react';
import Context from '../Context';
import { Row, Col } from 'react-bootstrap';
import NavbarAllPage from '../common/navbarAllPage'
import FooterAllPage from '../common/footerAllPage';
// import {Link} from 'react-router-dom';

class GsmTeme extends Component {
    constructor() {
        super()
        this.state = {
        }

    }

    render() {
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div id='ourTeamContinerPage'>
                        <NavbarAllPage />
                        <div id='ourTeamHeader'>
                            OUR TEAM
                        </div>
                        <div id='ourTeamContent'>

                        <div id='partOneTitleOurTEam'>MEDICINE TEAM</div>
                            <Row className="justify-content-md-center">
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR.HARITH ALAWADI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM2'>DR.HARITH ALAWADI,MD</p>
                                        <p id='nameCardOURTEAM1'>GSM CEO & FOUNDER</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/DR.ALI ALWAILY.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM2'>DR.ALI ALWAILY,MD</p>
                                        <p id='nameCardOURTEAM1'>GSM CO-FOUNDER</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/DR. DANI MAMO.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.DANI MAMO,MD</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/DR. KARRAR MAHDI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.KARRAR MAHDI,MD</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/AHMED SAMEER.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>AHMED SAMEER <br/>MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/BILAL HUSSEIN.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>BILAL HUSSEIN<br/>MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/MUTHANNA ALAMI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>MUTHANNA ALAMI <br/>MD STUDENT</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/NANCY JOSEPH.png')} alt='img' />
                                        <p id='nameCardOURTEAM'>NANCY JOSEPH<br/>MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/ALI YOUSIF.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>ALI YOUSIF<br/>MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/HUMAM ADNAN AL-OBAIDI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>HUMAM ADNAN AL-OBAIDI<br/>MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/OMAR ALFAROOQ AL-OBAIDI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>OMAR ALFAROOQ <br/>AL-OBAIDI,MD STUDENT</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/Dr.Mohammed Elward.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>Dr.Mohammed Elward<br/>Emergency Hospital Of Bu-<br/>charest Orthopedics and<br/> Traumatology</p>
                                    </div>
                                </Col>

                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                    <img id='imgOURTEAM' src={require('../../assets/team/RUQAYA SAMEER.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>RUQAYA SAMEER<br/>MD STUDENT</p>
                                    </div>
                                </Col>
                            </Row>

                            <div id='partOneTitleOurTEam'>DENTISTRY TEAM</div>

                            <Row className="justify-content-md-center">
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR.ABDULLAH ALKHATEEB1.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.ABDULLAH ALKHATEEB<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR.ALI ALJOBORY .jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.ALI ALJOBORY<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR. HAYDER ALSLMAWY.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.HAYDER ALSLMAWY<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR.AHMED ALDAWOODI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.AHMED ALDAWOODI<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR. ABDULHADI KUMAIT.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.ABDULHADI KUMAIT<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR. SAJA HAMED ALAMI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.SAJA HAMED ALAMI<br/>DENTIST</p>
                                    </div>
                                </Col>
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM' src={require('../../assets/team/DR. ZIYAD TARIQ ALWAILY.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>DR.ZIYAD TARIQ ALWAILY<br/>DENTIST</p>
                                    </div>
                                </Col>
                            </Row>

                            <div id='partOneTitleOurTEam'>TECHNICAL TEAM</div>
                            <Row className="justify-content-md-center">
                                <Col md={12} lg={7} xl={6} id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM2' src={require('../../assets/team/new.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM4'>
                                        ABDULLAH AL_KHATEEB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DR.HARITH ALAWADI &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;AHMED SAMEER</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={5} xl={3} id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM1' src={require('../../assets/team/AHMED ALZAEDY.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM2'>Ahmed Alzaedy</p>
                                        <p id='nameCardOURTEAM1'>VOCALS AND DIRECTOR</p>
                                    </div>
                                </Col>
                                </Row>
                                
                            <div id='partOneTitleOurTEam'>LAWYERS TEAM</div>
                                <Row className="justify-content-md-center">
                                <Col  id='ColOur'>
                                    <div id='ourTeamCards'>
                                        <img id='imgOURTEAM1' src={require('../../assets/team/ABDULLAH ALAWADI.jpg')} alt='img' />
                                        <p id='nameCardOURTEAM'>ABDULLAH ALAWADI</p>
                                    </div>
                                </Col>
                                </Row>
                                <div id='shadowBetweenFooter'></div>
                        </div>
                        
                        <FooterAllPage/>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default GsmTeme;



