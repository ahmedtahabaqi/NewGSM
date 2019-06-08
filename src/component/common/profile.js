import React from 'react';
import Component from '@reactions/component';
import Context from '../Context';
import NavbarAllPage from './navbarAllPage';
import { Col, Row, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import host from '../Host';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: (''),
            email: (''),
            password: (''),
            bio: ('')
        }
    }
  
    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    if (ctx.value.auth === "login") {
                        // console.log(ctx.value.session)
                        return (
                            <div >
                                <NavbarAllPage />
                                <div className="main1" >

                                    <Row style={{ marginRight: 0 + 'px' }} className="card1"   >

                                        <Col md={12} lg={4} id='ss' >


                                            <Row style={{ marginRight: 0 + 'px' }} id='ss' >
                                                <Col sm={12} md={4} lg={12} >
                                                    <div className="box"> <img width={222} height={222} style={{borderRadius:45}}  src={host+ctx.value.session.img} alt='img' /></div>
                                                </Col>

                                                <Col sm={12} md={4} lg={12} id="q" >
                                                    <Link to='/mycourses'>
                                                    <img className="img22" src={require('../../assets/11.png')} alt='img' />
                                                    </Link>
                                                </Col>

                                            </Row>

                                        </Col>
                                        <Col md={12} lg={8} id='sr'>
                                            <Form>
                                                <Row id="a">
                                                    <Col>
                                                        <Row id="textbox" >
                                                            <Col xs={10} >
                                                                <label className="i" > {ctx.value.session.name} </label>
                                                            </Col>
                                                           
                                                        
                                                        </Row>

                                                        <Row id="textbox">
                                                            <Col xs={10}>
                                                                <label className="i" > {ctx.value.session.email} </label>
                                                            </Col>


                                                        </Row>

                                                        <Row id="textbox">
                                                        <Col xs={10}>
                                                                <label className="i" > {ctx.value.session.field} </label>
                                                            </Col>


                                                        </Row>

                                                    </Col>
                                                </Row>

                                                <textarea rows="3"  value={ctx.value.session.body} id="place"></textarea>

                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        )
                    }
                }

                }</Context.Consumer>
        )
    }
}
export default Profile;