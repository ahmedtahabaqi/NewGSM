import React from 'react';
import { Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import { Button, Pane, Dialog, TextInput, FilePicker, Spinner, toaster, Textarea, Icon } from 'evergreen-ui';
import Context from '../Context';
import AvatarAndEdit from '../common/Avatar';
import FooterAllPage from '../common/footerAllPage';
import { Link } from 'react-router-dom';
import Component from "@reactions/component";
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
import ReactTooltip from 'react-tooltip';
const cookies = new Cookies();


var type;
class SlideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cateSelect: '',
            sidebarOpen: true,
            title: '',
            price: 0,
            category: [],
            file: [],
            description: '',
            sub_Titel: '',
            course: [],
            selectCourse: [],
            fileEdit: [],
            colors: [' #bce9aa, #20b2aa', '#6e99d6, #b22222', '#ffeb78, #4edeff', '#ea92e0, #ff892a']
        };
    }
    componentDidMount() {
        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })

        axios.get(host + `api/course/teacher`, { headers: { token: cookies.get('token') } })
            .then(response => { this.setState({ course: response.data }) })
            .catch((error) => { console.log('error ' + error); })
    }
    deleteCourse(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deletecourse/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) { toaster.danger(error.request.response) });

    }
    AddCourse() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("title", this.state.title);
        formData.append("price", this.state.price);
        formData.append("body", this.state.description);
        formData.append("category", this.state.cateSelect);
        formData.append("sub_title", this.state.sub_Titel);
        formData.append("type", type);
        formData.append("file", this.state.file[0]);

        axios({ url: host + "api/course/addcourse", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) {
                toaster.danger(error.request.response)

            });
    }

    EditCourse(id) {
        console.log(this.state.sub_Titel);
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        formData.append("title", this.state.title);
        formData.append("price", this.state.price);
        formData.append("body", this.state.description);
        formData.append("sub_title", this.state.sub_Titel);
        formData.append("category", this.state.cateSelect);
        if (type !== "") {
            formData.append("type", type);
        }

        formData.append("file", this.state.file[0]);


        axios({ url: host + "api/course/editcourse/" + id, method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) {
                    window.location.reload();
                    this.componentDidMount();
                }
            })
            .catch(function (error) { toaster.danger(error.request.response) });
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    if (ctx.value.auth === "login") {
                        return (
                            <div >
                                <div id='contentUpFooter'>
                                    <Navbar
                                        id='collapsAddCourse' collapseOnSelect expand="md" variant="light" >
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Link to='/'>
                                            <img height="45" src={require('../../assets/log.png')} alt="img" />
                                        </Link>

                                        <Nav className="mr-auto">
                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            title="Create Course"
                                                            onConfirm={() => {
                                                                this.AddCourse()
                                                                setState({ isShown: false })
                                                            }}
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Create"
                                                        >
                                                            <p>Course Name</p>
                                                            <TextInput id='inputnamecourse'
                                                                name="text-input-name"
                                                                placeholder="input course name..."
                                                                onChange={(event) => this.setState({ title: event.target.value })}

                                                            />
                                                            <p id='priceTitle'>Price</p>
                                                            <TextInput id='inputPriceCource'
                                                                name="text-input-name"
                                                                placeholder="input course price..."
                                                                onChange={(event) => this.setState({ price: event.target.value })}
                                                            // value={this.state.price}
                                                            />
                                                            <Form>
                                                                <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                                                    <Form.Label >Category</Form.Label>
                                                                    <Form.Control as="select"
                                                                        onChange={(even) => {
                                                                            if (even.target.value !== 'SelectCategory') {
                                                                                this.setState({ cateSelect: even.target.value })
                                                                            }
                                                                        }}>
                                                                        <option value="SelectCategory">Select Category </option>
                                                                        {this.state.category.map(cate =>

                                                                            <option key={cate._id} value={cate._id} >
                                                                                {cate.name}
                                                                            </option>

                                                                        )}
                                                                    </Form.Control>
                                                                </Form.Group>
                                                            </Form>
                                                            <Form>

                                                                <div className="mb-3">
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
                                                                    <Form>
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
                                                                    </Form>
                                                                </div>


                                                            </Form>
                                                            <p>Upload Image</p>
                                                            <FilePicker
                                                                width={250}
                                                                marginBottom={32}
                                                                onChange={files => { this.setState({ file: files }) }}

                                                            />
                                                            <p>Sub Title</p>
                                                            <Textarea
                                                                id="textarea-1"
                                                                placeholder="Sub Title..."
                                                                onChange={(event) => this.setState({ sub_Titel: event.target.value })}
                                                            // value={this.state.description}
                                                            />
                                                            <p>Course Description</p>
                                                            <Textarea
                                                                id="textarea-2"
                                                                placeholder="Description..."
                                                                onChange={(event) => this.setState({ description: event.target.value })}
                                                            // value={this.state.description}
                                                            />

                                                        </Dialog>

                                                        <Button onClick={() => setState({ isShown: true })} marginLeft={16} appearance="primary">Add New Course</Button>
                                                    </Pane>
                                                )}
                                            </Component>
                                        </Nav>
                                        <Nav>
                                            <Navbar.Collapse id="responsive-navbar-nav">

                                            </Navbar.Collapse>
                                        </Nav>
                                        <AvatarAndEdit />
                                    </Navbar>
                                    <Row style={{ margin: 0, padding: 0 }}>
                                        <Col style={{ margin: 0, padding: 0 }}>
                                            <div id='AddContentContiner' >
                                                <Row >
                                                    {this.state.course.map(course =>
                                                        <Col key={course._id} id="col1" style={{ margin: 0, marginTop: 50, marginBottom: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
                                                            <div id='continerNewCard'>
                                                                <Component initialState={{ color1: Math.floor(Math.random() * 3) }}>
                                                                    {({ state, setState }) => (
                                                                        <div id='MaincontinerNewCard'>

                                                                            <div id='continerNewCard1'>

                                                                                <div id='continerNewCard2' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                                    <div id='headerNewCard'>
                                                                                        <Link to={'/addlecture/' + course._id}
                                                                                            onClick={() => ctx.action.HeaderCource(
                                                                                                course
                                                                                            )}>
                                                                                            <img alt="img" height="150" width="250" src={host + course.img} />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div id='divReduisCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}></div>
                                                                                </div>
                                                                                <div id='TitleNewCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                                    <Link to={'/addlecture/' + course._id} style={{ color: '#fff' }}
                                                                                        onClick={() => ctx.action.HeaderCource(
                                                                                            course
                                                                                        )}>
                                                                                        <div  >{course.title}</div>
                                                                                    </Link>
                                                                                </div>
                                                                                <div id='BodyNewCard'>
                                                                                    <div id='BodyNewCardImg'>
                                                                                        <Link to={'/addlecture/' + course._id}
                                                                                            onClick={() => ctx.action.HeaderCource(
                                                                                                course
                                                                                            )}>
                                                                                            <div>
                                                                                                <pre id="CorsSubT" data-tip={course.sub_title}>{course.sub_title}</pre>
                                                                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy' />
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div id='BodyNewCardAut' style={{ marginTop: '25px' }}>
                                                                                        <div id='menuEdit1'>
                                                                                            <Component initialState={{ isShown: false }}>
                                                                                                {({ state, setState }) => (
                                                                                                    <Pane>

                                                                                                        <Dialog
                                                                                                            isShown={state.isShown}
                                                                                                            title="Edit Courses"
                                                                                                            onCloseComplete={() => setState({ isShown: false })}
                                                                                                            confirmLabel="Edit"
                                                                                                            onConfirm={() => {
                                                                                                                this.EditCourse(course._id)
                                                                                                                setState({ isShown: false })
                                                                                                            }}
                                                                                                        >

                                                                                                            <p>Course Name</p>
                                                                                                            <TextInput id='inputnamecourse'
                                                                                                                name="text-input-name"
                                                                                                                placeholder="input course name..."
                                                                                                                onChange={(event) => this.setState({ title: event.target.value })}

                                                                                                            />
                                                                                                            <p id='priceTitle'>Price</p>
                                                                                                            <TextInput id='inputPriceCource'
                                                                                                                name="text-input-name"
                                                                                                                placeholder="input course price..."
                                                                                                                onChange={(event) => this.setState({ price: event.target.value })}

                                                                                                            />
                                                                                                            <Form>
                                                                                                                <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
                                                                                                                    <Form.Label >Category</Form.Label>
                                                                                                                    <Form.Control as="select"

                                                                                                                        onChange={(even) => {
                                                                                                                            if (even.target.value !== 'SelectCategory') {
                                                                                                                                this.setState({ cateSelect: even.target.value })
                                                                                                                            }
                                                                                                                        }}>
                                                                                                                        <option value="SelectCategory">Select Category </option>
                                                                                                                        {this.state.category.map(cate =>

                                                                                                                            <option key={cate._id} value={cate._id} >
                                                                                                                                {cate.name}
                                                                                                                            </option>

                                                                                                                        )}
                                                                                                                    </Form.Control>
                                                                                                                </Form.Group>
                                                                                                            </Form>
                                                                                                            <Form>

                                                                                                                <div className="mb-3">
                                                                                                                    <Form.Group as={Row}>
                                                                                                                        <Col sm={10}>
                                                                                                                            <Form.Check
                                                                                                                                type="radio"
                                                                                                                                label="Post"
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
                                                                                                                                label="Under"
                                                                                                                                custom
                                                                                                                                onChange={(e) => {

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
                                                                                                                    <Form>
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
                                                                                                                    </Form>
                                                                                                                </div>


                                                                                                            </Form>
                                                                                                            <p>Upload Image</p>
                                                                                                            <FilePicker
                                                                                                                width={250}
                                                                                                                marginBottom={32}
                                                                                                                onChange={files => { this.setState({ file: files }) }}

                                                                                                            />
                                                                                                            <p>Sub Title</p>
                                                                                                            <Textarea
                                                                                                                id="textarea-2"
                                                                                                                placeholder="Sub Title                                                                                            ..."
                                                                                                                onChange={(event) => this.setState({ sub_Titel: event.target.value })}

                                                                                                            />
                                                                                                            <p>Course Description</p>
                                                                                                            <Textarea
                                                                                                                id="textarea-2"
                                                                                                                placeholder="Description..."
                                                                                                                onChange={(event) => this.setState({ description: event.target.value })}

                                                                                                            />

                                                                                                        </Dialog>
                                                                                                        <Icon id='editAddCourseIcon' icon="edit" size={25} marginRight={5}
                                                                                                            onClick={() => setState({ isShown: true })} />
                                                                                                    </Pane>
                                                                                                )}
                                                                                            </Component>

                                                                                        </div>
                                                                                        <Component initialState={{ isShown: false }}>
                                                                                            {({ state, setState }) => (
                                                                                                <Pane>
                                                                                                    <Dialog
                                                                                                        isShown={state.isShown}
                                                                                                        title="Delete Course"
                                                                                                        intent="danger"
                                                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                                                        confirmLabel="Delete"
                                                                                                        onConfirm={()=>{
                                                                                                            this.deleteCourse(course._id)
                                                                                                        }}
                                                                                                    >
                                                                                                       <div id='deleteDangerMessage'>
                                                                                                       Are You Sure to Delete This Course !
                                                                                                       </div>
                                                                                                     </Dialog>
                                                                                                    <Icon id='trushAddCourseIcon' onClick={() => {
                                                                                                        
                                                                                                        setState({ isShown: true })
                                                                                                    }}
                                                                                                        marginLeft={5} size={25} icon="trash" color="danger" />

                                                                                                </Pane>
                                                                                            )}
                                                                                        </Component>


                                                                                    </div>
                                                                                    <div id='btnBuyNewCard'>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                </Component>
                                                            </div>

                                                        </Col>
                                                    )}
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <FooterAllPage />
                            </div>

                        )
                    }
                    // else if (  ctx.value.auth!=="login" && ctx.value.session.role === 0)
                    // {
                    //     return(
                    //     <Home/>
                    // )  
                    // }
                    // else if(ctx.value.auth==="loading" )
                    // {
                    //     return(
                    //         <Home/>
                    //     )
                    // }
                    else {


                        return (

                            <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
                                <Spinner />
                            </Pane>
                        )
                    }

                }}
            </Context.Consumer>
        )
    }
}
export default SlideBar;