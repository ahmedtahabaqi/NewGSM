import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table9 extends React.Component {
    constructor() {
        super();
        this.state = {
            aprovelUnDone: [],
        }
    }
    componentDidMount() {
        axios.get(host + `api/contact/`, { headers: headers })
            .then(response =>
                 { 
                     this.setState({ aprovelUnDone: response.data }) 
                    })
            .catch((error) => { toaster.danger(error.request.response) })

    }
    delete(id){

        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/contact/delete/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                     this.componentDidMount();

                }
            })
            .catch(function (error) { toaster.danger(error.message) });
    }
    render() {
        return (
            <div>
                <Row style={{ margin: 50, padding: 0 }}>
                    <Col>

                        <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>

                                    <th ><div id='btnTItleTable'>From</div></th>
                                    <th ><div id='btnTItleTable'> email</div></th>
                                    <th width={60} ><div id='btnTItleTable'>phone</div></th>
                                    <th width={60} ><div id='btnTItleTable'>View</div></th>
                                    <th width={60} ><div id='btnTItleTable'>delete</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.aprovelUnDone.map(UnDone =>
                                    <tr key={UnDone._id}>
                                        <td>{UnDone.name}</td>
                                        <td>{UnDone.email}</td>
                                        <td>{UnDone.phone}</td>

                                        <Component initialState={{ isShown: false }}>
                                            {({ state, setState }) => (
                                                <Pane>

                                                    <Dialog
                                                        isShown={state.isShown}
                                                        title="Messege"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Edit"
                                                    >


                                                        <p id='priceTitle'>{UnDone.body}</p>
                                
                                                    </Dialog>
                                                    <td style={{ width: '140px', cursor: 'pointer' }}
                                                        onClick={() => setState({ isShown: true })}>
                                                        
                                                        <Icon style={{ cursor: 'pointer' }}

                                                    icon="video" color="success" size={20} />
                                                        
                                                         </td>
                                                </Pane>
                                            )}
                                        </Component>
                                     
                                        <td style={{ textAlign: 'center' }} >
                                      
                                            
                                            <Icon style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    this.delete(UnDone._id)
                                                }}
                                                icon="trash" color="success" size={20} />
                                          
                                        </td>

                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Table9;