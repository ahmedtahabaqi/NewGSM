import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table6 extends React.Component {
    constructor() {
        super();
        this.state = {
            Courses: [],
            pakgSelect: '',
            GetUsers:[]
        }
    }
    componentDidMount() {
       
        axios.get(host + `api/student/all`, { headers: headers })
            .then(response => {console.log(response.data);
            
                this.setState({ GetUsers: response.data })
            })
            .catch((error) => { console.log('error ' + error) })
    
        axios.get(host + `api/course/`, { headers: headers })
            .then(response => {
                console.log(response.data)
                this.setState({
                    Courses: response.data
                })
            })
            .catch((error) => { toaster.danger(error.request.response) })
    }
    AddCourseToUser(course) {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("student_id", course);
        formData.append("Package", this.state.pakgSelect);
        formData.append("Package", this.state.pakgSelect);

        axios({ url: host + "api/packege/addCourse", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) {
                if (error.request.response) {
                    toaster.danger(error.request.response);
                }
            });
    }
 

    render() {
        return (
            <div>
                <Row style={{ margin: 50, padding: 0 }}>
                    <Col>

                        <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>

                                    <th><div id='btnTItleTable'>User Name</div></th>
                                    <th ><div id='btnTItleTable'>Email</div></th>
                                    <th><div id='btnTItleTable'>field</div></th>
                                    <th width={120} ><div id='btnTItleTable'>Add Course</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.GetUsers.map(user =>
                                    <tr key={user._id}>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.field}</td>
                                        <td style={{ display: 'flex', justifyContent: 'center' }} >
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Add Course To User"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Add"
                                                            onConfirm={() => {
                                                                
                                                                setState({ isShown: false })
                                                            }}
                                                        >jjjjj
                                                            {/* <Form>
                                                                <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                                                    <Form.Control as="select"

                                                                        onChange={(even) => {
                                                                            if (even.target.value !== 'SelectPackage') {
                                                                                this.setState({ pakgSelect: even.target.value })
                                                                            }
                                                                        }
                                                                        }>
                                                                        <option value="SelectPackage">Select Package </option>
                                                                        {this.state.GetPackages.map(pakg =>
                                                                            <option key={pakg._id} value={pakg._id}  >
                                                                                {pakg.Title}
                                                                            </option>
                                                                        )}
                                                                    </Form.Control>
                                                                </Form.Group>
                                                            </Form> */}

                                                        </Dialog>
                                                        <Icon onClick={() => setState({ isShown: true })}
                                                            style={{ cursor: 'pointer', height: 30, margin: 0, padding: 0 }} icon="plus" color="success" size={20}>Success</Icon>
                                                    </Pane>
                                                )}
                                            </Component>
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
export default Table6;