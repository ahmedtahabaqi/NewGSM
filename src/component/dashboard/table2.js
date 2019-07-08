import React from 'react';
import Component from "@reactions/component";
import { toaster, TextInput, Pane, Dialog, Textarea, FilePicker, Icon } from 'evergreen-ui';
import { Col, Row, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("token") };

var type;
class Table2 extends React.Component {
    constructor() {
        super();
        this.state = {
            titlePackage: '',
            pricePackage: '',
            pakgSelect: '',
            imgPackage: [],
            descPackage: '',
            GetPackages: []

        }
    }
    componentDidMount() {
        axios.get(host + `api/packege/`, { headers: {} })
            .then(response => {
                this.setState({ GetPackages: response.data })
               

            })
            .catch((error) => { console.log('error ' + error) })
    }
    AddPackage() {
        let formData = new FormData();

        formData.append("title", this.state.titlePackage);
        formData.append("price", this.state.pricePackage);
        formData.append("tire", this.state.pakgSelect);
        formData.append("body", this.state.descPackage);
        formData.append("type", type);
        formData.append("file", this.state.imgPackage[0]);


        axios({ url: host + "api/packege/add/?", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful")
                    this.componentDidMount()
                }
            })
            .catch(function (error) { toaster.danger(error.message); });
    }
    deletePackage(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/packege/delete/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) { 
             console.log(error.message);  
            });

    }
    render() {
        return (
            <div>
                <div id='packNewDashContiner'>
                    <Component initialState={{ isShown: false }}>
                        {({ state, setState }) => (
                            <Pane>
                                <Dialog
                                    isShown={state.isShown}
                                    title="Add Package"
                                    onCloseComplete={() => setState({ isShown: false })}
                                    confirmLabel="Create"
                                    onConfirm={() => {
                                        this.AddPackage()
                                        setState({ isShown: false })
                                    }}
                                >
                                    <TextInput id='inputNeuDash'
                                        name="text-input-name"
                                        placeholder="input name of package..."
                                        onChange={(event) => this.setState({ titlePackage: event.target.value })}

                                    />

                                    <TextInput id='inputNeuDash'
                                        name="text-input-name"
                                        placeholder="input price of package..."
                                        onChange={(event) => this.setState({ pricePackage: event.target.value })}

                                    />

                                    <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select"

                                            onChange={(even) => {
                                                if (even.target.value !== 'SelectPackage') {
                                                    this.setState({ pakgSelect: even.target.value })
                                                }
                                            }
                                            }>
                                            <option value="SelectPackage">Select Package </option>
                                            <option value='Daimond'>Daimond</option>
                                            <option value='Platinum'>Platinum</option>
                                            <option value='Gold'>Gold</option>
                                            <option value='Silver'>Silver</option>

                                        </Form.Control>
                                    </Form.Group>
                                    <div className="mb-3" style={{ marginTop: 20 }}>
                                        <Form.Group as={Row}>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Post Graduate"
                                                    onChange={(e) => {
                                                        document.getElementById('steps').style.display = 'none'
                                                        let radiobtn1 = document.getElementById("step1");
                                                        radiobtn1.checked = false;
                                                        type = 'post';
                                                        let radiobtn = document.getElementById("step2");
                                                        radiobtn.checked = false;

                                                    }}
                                                    custom
                                                    value="uptime"
                                                    name="formHorizontalRadios"
                                                    id="Post"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Under Graduate"
                                                    custom
                                                    onChange={(e) => {
                                                        //   this.Sort(e.target.value)
                                                        document.getElementById('steps').style.display = 'block'
                                                        document.getElementById('Under').Check = true;
                                                    }}
                                                    value="price"
                                                    name="formHorizontalRadios"
                                                    id="Under"

                                                />
                                            </Col>
                                        </Form.Group>
                                    </div>


                                    <div id="steps">

                                        <Form.Group as={Row}>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Step 1"
                                                    onChange={(e) => {
                                                        type = 'under Step1';

                                                    }}
                                                    custom
                                                    value="uptime"
                                                    name="formHorizontalRadios"
                                                    id="step1"

                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Step 2"
                                                    custom
                                                    onChange={(e) => {
                                                        type = 'under Step2';

                                                    }}
                                                    value="price"
                                                    name="formHorizontalRadios"
                                                    id="step2"

                                                />
                                            </Col>
                                        </Form.Group>

                                    </div>



                                    <FilePicker
                                        width={250}
                                        marginBottom={32}
                                        onChange={files => { this.setState({ imgPackage: files }) }}

                                    />
                                    <Textarea
                                        id="textarea-2"
                                        placeholder="Description..."
                                        onChange={(event) => this.setState({ descPackage: event.target.value })}

                                    />
                                </Dialog>
                                <div id='CateBtnDashNew' onClick={() => setState({ isShown: true })}>Add New Package</div>

                            </Pane>
                        )}
                    </Component>
                </div>
                <div>
                    <Row style={{ margin: 50, padding: 0 }}>
                        <Col>
                            <Table id='RowTable' striped bordered hover size="xs" variant="">
                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th width={80} >type</th>
                                        <th width={80} >Price</th>
                                        <th width={80} >Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.GetPackages.map(pakg =>
                                        <tr key={pakg._id}>
                                            <td>{pakg.Title}</td>
                                            <td>{pakg.tire}</td>
                                            <td>{pakg.Price + '$'}</td>
                                            <td style={{ display: 'flex', justifyContent: 'center' }} >
                                                <Icon style={{ cursor: 'pointer' }}
                                                    onClick={() => this.deletePackage(pakg._id)}
                                                    icon="trash" color="danger" size={20} />
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    {/* <Row style={{ margin: 50, padding: 0 }}>
                    <Col> */}

                    {/* <Table id='RowTable' striped bordered hover size="xs" variant="">
                            <thead>
                                <tr id='CourseDAShNEWContiner'>

                                    <th><div id='btnTItleTable'>Course Name</div></th>
                                    <th style={{ width: '200px' }}><div id='btnTItleTable'>Instructor Name</div></th>
                                    <th style={{ width: '140px' }}><div id='btnTItleTable'>Price Edit</div></th>
                                    <th style={{ width: '140px' }}><div id='btnTItleTable'>View Videos</div></th>
                                    <th style={{ width: '140px' }}><div id='btnTItleTable'>Aprovel</div></th>
                                </tr>
                            </thead>
                            <tbody> */}
                    {/* {this.state.aprovelpakg.map(pakg =>
                                    <tr key={pakg._id}>

                                        <td>{pakg.title}</td>
                                        <td>{pakg.userName}</td>
                                        
                                        <Component initialState={{ isShown: false }}>
                                            {({ state, setState }) => (
                                                <Pane>

                                                    <Dialog
                                                        isShown={state.isShown}
                                                        title="Edit Price"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Edit"
                                                        onConfirm={() => {
                                                            this.EditCourse(pakg._id)
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
                                                    <td style={{ width: '140px',cursor:'pointer' }} 
                                                     onClick={() => setState({ isShown: true })}>{pakg.price[pakg.__v] + ' $ '}</td>
                                                </Pane>
                                            )}
                                        </Component>                                       
                                        <td style={{ textAlign: 'center' }} >
                                        <Link to={'/courses/' + pakg._id}>
                                            <Icon style={{ cursor: 'pointer' }}
                                                icon="video" color="success" size={20} />
                                                </Link>
                                        </td>
                                        <td style={{ display: 'flex', justifyContent: 'center' }} >
                                            <Icon style={{ cursor: 'pointer' }}
                                                onClick={() => this.AprovelCourse(pakg._id)}
                                                icon="tick-circle" color="success" size={20} />
                                        </td>
                                    </tr>
                                )} */}
                    {/* </tbody>
                        </Table> */}
                    {/* </Col>
                </Row> */}
                </div>
            </div>
        )
    }
}
export default Table2;