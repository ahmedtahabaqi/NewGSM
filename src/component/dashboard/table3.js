import React from 'react';
// import Component from "@reactions/component";
import { Icon, toaster } from 'evergreen-ui';
import { Col, Row, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table3 extends React.Component {
    constructor() {
        super();
        this.state = {
            allUser: [],
            GSMteam: []
        }
    }
    componentDidMount() {
        axios.get(host + `api/user/users`, { headers: headers })
            .then(response => {
                
                this.setState({ allUser: response.data })
            })
            .catch((error) => { toaster.danger(error.request.response) })
    }

    filter1() {
        let filt1 = []
        const gsm = this.state.allUser
        for (let i = 0; i < gsm.length; i++) {
            if (gsm[i].GSM) {
                filt1.push(
                    <tr key={gsm[i]._id}>
                        <td>{gsm[i].name}</td>
                        <td>{gsm[i].field}</td>
                        <td>{gsm[i].email}</td>
                        <td style={{display:'flex',justifyContent:'center'}}>
                            <Link to={'/courseinstructor/'+gsm[i]._id}>
                            <Icon style={{ cursor: 'pointer' }}
                                icon="video" color="success" size={20} />
                                </Link>
                        </td>
                        
                    </tr>
                )
            }
        }
        if (filt1.length > 1) {
            return filt1
        }
    }
    filter() {
        let filt = []
        const gsm = this.state.allUser
        for (let i = 0; i < gsm.length; i++) {
            if (!gsm[i].GSM) {
                filt.push(
                    <tr>
                        <td>{gsm[i].name}</td>
                        <td>{gsm[i].field}</td>
                        <td>{gsm[i].email}</td>
                        <td style={{display:'flex',justifyContent:'center'}}>
                        <Link to={'/courseinstructor/'+gsm[i]._id}>
                            <Icon style={{ cursor: 'pointer' }}
                                icon="video" color="success" size={20} />
                                </Link>
                        </td>
                        
                    </tr>
                )
            }
        }
        if (filt.length > 1) {
            return filt
        }
    }
    render() {
        return (
            <div style={{marginLeft:5,marginRight:5}}>
                <Row>
                <Col md={12} xl={6} style={{padding:0}} >
                <div id='GSmTEamDashNew1'>
                    <div id='GSmTEamDashNew'>G.S.M Team</div>
                </div>
                <Row style={{ marginTop:50, padding: 0 }}>
                    <Col>
                        <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>
                                    <th ><div id='btnTItleTable'>Instructor Name</div></th>
                                    <th><div id='btnTItleTable'>Faculty</div></th>
                                    <th><div id='btnTItleTable'>Contact</div></th>
                                    <th style={{ width: '60px' }}><div id='btnTItleTable1'>Videos</div></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <React.Fragment>{this.filter1()}</React.Fragment>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </Col>
                <Col md={12} xl={6} style={{padding:0}} >
                <div id='sellTEamDashNew1'>
                    <div id='sellTEamDashNew'>Sell Your Courses Only</div>
                </div>
                <Row style={{marginTop:50, padding: 0 }}>
                    <Col >
                        <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>
                                    <th ><div id='btnTItleTable'>Instructor Name</div></th>
                                    <th><div id='btnTItleTable'>Faculty</div></th>
                                    <th><div id='btnTItleTable'>Contact</div></th>
                                    <th style={{ width: '60px' }}><div id='btnTItleTable1'>Videos</div></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <React.Fragment>{this.filter()}</React.Fragment>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </Col>
              
                </Row>
              
            </div>
        )
    }
}
export default Table3;