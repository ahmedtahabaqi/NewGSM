import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table, Form } from 'react-bootstrap';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };
class Table7 extends React.Component {
    constructor() {
        super();
        this.state = {
            Courses: [],
            GetPackages: [],
            pakgSelect: '',
            video:[]
        }
    }
    componentDidMount() {
        axios.get(host + `api/user/getVideo`, { headers: {} })
            .then(response => {console.log(response.data);
            
                this.setState({ video:response.data })
            })
            .catch((error) => { console.log('error ' + error) })

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
                                    <th><div id='btnTItleTable'>video</div></th>
                                    <th width={150} ><div id='btnTItleTable'>move</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.video.map(vid =>
                                    <tr key={vid._id}>

                                        <td>{vid.name}</td>
                                    
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
                                                                // this.AddCourseToPackage(course._id)
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
                                                                        <option value="SelectPackage">Select chapter </option>
                                                                        {/* {this.state.GetPackages.map(pakg =>
                                                                            <option key={pakg._id} value={pakg._id}  >
                                                                                {pakg.Title}
                                                                            </option>
                                                                        )} */}
                                                                    </Form.Control>
                                                                </Form.Group>
                                                            </Form>

                                                        </Dialog>
                                                        <Icon onClick={() => setState({ isShown: true })}
                                                            style={{ cursor: 'pointer', height: 30, margin: 0, padding: 0 }} icon="move" color="success" size={20}>Success</Icon>
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
export default Table7;