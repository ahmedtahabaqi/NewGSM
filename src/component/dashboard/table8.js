import React from 'react';
import Component from "@reactions/component";
import { Icon, toaster, Pane, Dialog } from 'evergreen-ui';
import { Col, Row, Table,Form } from 'react-bootstrap';
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
            CourseSelect:'',
            GetUsers:[],
            price:'',
            pricePkg:'',
            GetPackages:[]
        }
    }
    componentDidMount() {
       
        axios.get(host + `api/student/all`, { headers: headers })
            .then(response => {
            
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

            axios.get(host + `api/packege/`, { headers: {} })
            .then(response => {
                this.setState({ GetPackages: response.data })
                console.log(response.data);

            })
            .catch((error) => { console.log('error ' + error) })
    }
    AddCourseToUser(UserId) {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("student_id", UserId);
        formData.append("course", this.state.CourseSelect);
        formData.append("price", this.state.price);

        axios({ url: host + "api/Buyed/add", method: "POST", data: formData, headers: headers })
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
 
    AddPackageToUser(UserId) {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("student_id", UserId);
        formData.append("package_id", this.state.pakgSelect);
        formData.append("price", this.state.pricePkg);

        axios({ url: host + "api/Buyed/addpackage/", method: "POST", data: formData, headers: headers })
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
                                    <th  ><div id='btnTItleTable'>Add Course</div></th>
                                    <th  ><div id='btnTItleTable'>Add Package</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.GetUsers.map(user =>
                                    <tr key={user._id}>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.field}</td>
                                        <td style={{ textAlign:'center'}} >
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Add Course To User"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Add"
                                                            onConfirm={() => {
                                                                this.AddCourseToUser(user._id)
                                                                setState({ isShown: false })
                                                            }}
                                                        >
                                                            <Form>
                                                                <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                                                    <Form.Control as="select"

                                                                        onChange={(even) => {
                                                                            if (even.target.value !== 'SelectPackage') {
                                                                               const newValue= even.target.value.split("|")
                                                                               console.log(newValue);
                                                                               
                                                                                this.setState({ CourseSelect:newValue[0] ,price:newValue[1]})
                                                                            }
                                                                        }
                                                                        }>
                                                                        <option value="SelectPackage">Select Course </option>
                                                                        {this.state.Courses.map(crs =>
                                                                            <option key={crs._id} value={crs._id+"|"+crs.price[crs.__v]}  >
                                                                                {crs.title}
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
                                        <td style={{textAlign:'center'}} >
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Add Package To User"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Add"
                                                            onConfirm={() => {
                                                                this.AddPackageToUser(user._id)
                                                                setState({ isShown: false })
                                                            }}
                                                        >
                                                              <Form>
                                                                <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                                                    <Form.Control as="select"

                                                                        onChange={(even) => {
                                                                            if (even.target.value !== 'SelectPackage') {
                                                                               const newValue= even.target.value.split("|")                                                                              
                                                                               console.log(newValue);
                                                                               this.setState({ pakgSelect:newValue[0] ,pricePkg:newValue[1]})
                                                                            }
                                                                        }
                                                                        }>
                                                                        <option value="SelectPackage">Select Course </option>
                                                                        {this.state.GetPackages.map(crs =>
                                                                            <option key={crs._id} value={crs._id+"|"+crs.Price}  >
                                                                                {crs.Title}
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