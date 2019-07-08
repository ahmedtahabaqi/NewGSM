import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, TextInput, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table1 extends React.Component {
    constructor() {
        super();
        this.state = {
            aprovelUnDone: [],
        }
    }
    componentDidMount() {
        axios.get(host + `api/course/unDone`, { headers: headers })
            .then(response => { this.setState({ aprovelUnDone: response.data }) })
            .catch((error) => { toaster.danger(error.request.response) })

    }
    AprovelCourse(id) {

        axios({ url: host + "api/course/approvedCourse/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful")
                    this.componentDidMount()
                }
            })
            .catch((error) => { toaster.danger(error.request.response) })

    }
    EditCourse(id) {
        let formData = new FormData();

        formData.append("price", this.state.price);

        axios({ url: host + "api/course/editcourse/" + id, method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful")
                    this.componentDidMount()
                }
            })
            .catch((error) => {
                toaster.danger(error.request.response)
            })
    }

    render() {
        return (
            <div>
                <Row style={{ margin: 50, padding: 0 }}>
                    <Col>

                        <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>

                                    <th ><div id='btnTItleTable'>Course Name</div></th>
                                    <th ><div id='btnTItleTable'>Instructor Name</div></th>
                                    <th width={60} ><div id='btnTItleTable'>Price</div></th>
                                    <th width={60} ><div id='btnTItleTable'>View</div></th>
                                    <th width={60} ><div id='btnTItleTable'>Aprovel</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.aprovelUnDone.map(UnDone =>
                                    <tr key={UnDone._id}>

                                        <td>{UnDone.title}</td>
                                        <td>{UnDone.userName}</td>

                                        <Component initialState={{ isShown: false }}>
                                            {({ state, setState }) => (
                                                <Pane>

                                                    <Dialog
                                                        isShown={state.isShown}
                                                        title="Edit Price"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Edit"
                                                        onConfirm={() => {
                                                            this.EditCourse(UnDone._id)
                                                            setState({ isShown: false })
                                                        }}
                                                    >


                                                        <p id='priceTitle'>Price</p>
                                                        <TextInput id='inputPriceCource'
                                                            name="text-input-name"
                                                            placeholder="input course price..."
                                                            onChange={(event) => this.setState({ price: event.target.value })}
                                                        // value={this.state.price}
                                                        />
                                                    </Dialog>
                                                    <td style={{ width: '140px', cursor: 'pointer' }}
                                                        onClick={() => setState({ isShown: true })}>{UnDone.price[UnDone.__v] + ' $ '} </td>
                                                </Pane>
                                            )}
                                        </Component>
                                        <td style={{ textAlign: 'center' }} >
                                        <Link to={`/AllCourseAdmin/${UnDone._id}?userId=${UnDone.userId}`}>
                                            
                                                <Icon style={{ cursor: 'pointer' }}
                                                    icon="video" color="success" size={20} />
                                            </Link>
                                        </td>
                                        <td style={{ display: 'flex', justifyContent: 'center' }} >
                                            <Icon style={{ cursor: 'pointer' }}
                                                onClick={() => this.AprovelCourse(UnDone._id)}
                                                icon="tick-circle" color="success" size={20} />
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
export default Table1;