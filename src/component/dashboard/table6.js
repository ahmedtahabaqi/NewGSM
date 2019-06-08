import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, TextInput, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            GetPackages: [],
            pakgSelect: '',
        }
    }
    componentDidMount() {
        axios.get(host + `api/packege/`, { headers: {} })
            .then(response => {
                this.setState({ GetPackages: response.data })
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
    GetCourseByAdmin(id) {

        axios.get(host + `api/course/admin/Chapters/` + id, { headers: headers })
            .then(response => {
                console.log(response.data);
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
    AddCourseToPackage(course) {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("course", course);
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

                                    <th><div id='btnTItleTable'>Course Name</div></th>
                                    <th ><div id='btnTItleTable'>Instructor Name</div></th>
                                    <th width={60} ><div id='btnTItleTable'>Price</div></th>
                                    <th width={60} ><div id='btnTItleTable'>View</div></th>
                                    <th width={150} ><div id='btnTItleTable'>add To Package</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Courses.map(course =>
                                    <tr key={course._id}>

                                        <td>{course.title}</td>
                                        <td>{course.userName}</td>
                                        <td style={{ width: 80, textAlign: 'center' }}>
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>

                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Edit Price"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Edit"
                                                            onConfirm={() => {
                                                                this.EditCourse(course._id)
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
                                                        <span onClick={() => setState({ isShown: true })}
                                                            style={{ cursor: 'pointer', width: 80 }}>{course.price[course.__v] + ' $ '}
                                                        </span>

                                                    </Pane>
                                                )}
                                            </Component>
                                        </td>
                                        <td style={{ textAlign: 'center' }} >
                                            <Link to={`/AllCourseAdmin/${course._id}?userId=${course.userId}`}>
                                                <Icon style={{ cursor: 'pointer', height: 30, margin: 0, padding: 0 }}
                                                    icon="video" color="success" size={20} />
                                            </Link>
                                        </td>
                                        <td style={{ display: 'flex', justifyContent: 'center' }} >
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Add Course To Package"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Add"
                                                            onConfirm={() => {
                                                                this.AddCourseToPackage(course._id)
                                                                setState({ isShown: false })
                                                            }}
                                                        >
                                                            <Form>
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
                                                            </Form>

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