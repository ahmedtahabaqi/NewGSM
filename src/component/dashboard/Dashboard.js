
import React from 'react';
import PropTypes from 'prop-types';
import {Spinner, Pane } from 'evergreen-ui';
import Table1 from './table1';
import Table2 from './table2';
import Table3 from './table3';
import Table4 from './table4';
import Table5 from './table5';
import Table6 from './table6';
import Table7 from './table7';
import Table8 from './table8';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import Home from '@material-ui/icons/Home';
import Context from '../Context';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    [theme.breakpoints.down(600)]: {
      flexDirection: 'column',

    }

  },
  
  drawer: {
    [theme.breakpoints.up(600)]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up(600)]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up(600)]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
      <Context.Consumer>
        {ctx => {
          if (ctx.value.session.role === 1) {
            return (

              <div className={classes.root} >

                <CssBaseline />                  
                  <IconButton
                  style={{backgroundColor:'#30f9d7',padding:0,height:40,width:40}}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>

                <nav className={classes.drawer}>
                  {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
                  <Hidden smUp implementation="css">
                    <Drawer
                      container={this.props.container}
                      variant="temporary"
                      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                      open={this.state.mobileOpen}
                      onClose={this.handleDrawerToggle}
                      classes={{
                        paper: classes.drawerPaper,
                      }}

                    >
                      <div id='sideBarBGC'>
                        <div id='sideBarBGC1'></div>
                        <div className={classes.toolbar} />
                        <div id='sideDashNew'>
                        <Link to='table1'>
                          <div>Aprovel</div>
                        </Link>
                        <Link to='table6'>
                          <div>COURSES</div>
                        </Link>
                        {/* <Link to='table8'>
                          <div>Students</div>
                        </Link> */}
                        <Link to='table2'>
                          <div>PACKAGES</div>
                        </Link>
                        <Link to='table3'>
                          <div style={{ fontSize: 20 }}>Applied Instructor</div>
                        </Link>
                        <Link to='table4'>
                          <div>INSTRUCTOR</div>
                        </Link>
                        <Link to='table5'>
                          <div>CATEGORY</div>
                        </Link>
                        <Link to='/'>
                          <div>Home</div>
                        </Link>
                        </div>
                      </div>
                    </Drawer>
                  </Hidden>
                  <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                    >
                      <div id='sideBarBGC'>
                        <div id='sideBarBGC1'></div>
                        <div className={classes.toolbar} />
                        <div id='sideDashNew'>
                        <Link to='table1'>
                          <div>APROVEL</div>
                        </Link>
                        <Link to='table6'>
                          <div>COURSES</div>
                        </Link>
                        {/* <Link to='table8'>
                          <div>Students</div>
                        </Link> */}
                        <Link to='table2'>
                          <div>PACKAGES</div>
                        </Link>
                        <Link to='table3'>
                          <div style={{ fontSize: 20 }}>Applied Instructor</div>
                        </Link>
                        <Link to='table4'>
                          <div>INSTRUCTOR</div>
                        </Link>
                        <Link to='table5'>
                          <div>CATEGORY</div>
                        </Link>
                        <Link to='/'>
                          <div>Home</div>
                        </Link>
                        </div>
                      </div>
                    </Drawer>
                  </Hidden>

                </nav>

                <main className={classes.content}>

                
                  {renderPage(this.props)}
                </main>
              </div>

            )
          }
          else if( ctx.value.spinner){
            return(
              <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
              <Spinner />
          </Pane>
            )
          }
          else 
          {
            return (
              window.location.href='/'
            )
          }
        }}
      </Context.Consumer>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {
  if (props.match.path === '/dashboard1/table1') {
    return (<Table1 />)
  }
  else if (props.match.path === '/dashboard1/table6') {
    return (<Table6 />)
  }
  else if (props.match.path === '/dashboard1/table8') {
    return (<Table8 />)
  }
  else if (props.match.path === '/dashboard1/table2') {
    return (<Table2 />)
  }
  else if (props.match.path === '/dashboard1/table3') {
    return (<Table3 />)
  }
else if (props.match.path === '/dashboard1/table4') {
  return (<Table4 />)
}
  else if (props.match.path === '/dashboard1/table5') {
    return (<Table5 />)
  }

else if (props.match.path === '/dashboard1/table7') {
  return (<Table7 />)
}
}
export default withStyles(styles, { withTheme: true })(Dashboard);












// import React from 'react';
// import Table1 from './table1';
// import Table2 from './table2';
// import Table3 from './table3';
// import Table4 from './table4';
// import Table5 from './table5';
// import Component from "@reactions/component";
// import { Col, Row, Table, Button, Form } from 'react-bootstrap';
// import { Pane, Dialog, TextInput, toaster, FilePicker, Textarea, Icon, Spinner } from 'evergreen-ui';
// import Context from '../Context';
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from "universal-cookie";
// import HeaderHome from '../Home/Header';
// import host from '../Host';
// const cookies = new Cookies();
// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <div id='NewDashCONtiner'>
//                     <div id='sideDashNew'>
//                         <Link to='table1'>
//                         <div>COURSES</div>
//                         </Link>
//                         <Link to='table2'>
//                         <div>PACKAGES</div>
//                         </Link>
//                         <Link to='table3'>
//                         <div style={{fontSize:20}}>Applied Instructor</div>
//                         </Link>
//                         <Link to='table4'>
//                         <div>INSTRUCTOR</div>
//                         </Link>
//                         <Link to='table5'>
//                         <div>CATEGORY</div>
//                         </Link>
//                     </div>
//                     <div id='MainDashNew'>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Dashboard;












// var type;
// class Dashboard extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             addCategory: '',
//             titlePackage: '',
//             pricePackage: '',
//             descPackage: '',
//             imgPackage: [],
//             aprovelUnDone: [],
//             Packages: [],
//             pakgSelect: '',
//             category: [],
//             cateSelect: '',
//             editCategory: ''
//         }
//     }
//     componentDidMount() {

//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };
//         axios.get(host + `api/course/unDone`, { headers: headers })
//             .then(response => { this.setState({ aprovelUnDone: response.data }) })
//             .catch((error) => { console.log('error ' + error) })

//         axios.get(host + `api/course/Category`, { headers: {} })
//             .then(response => { this.setState({ category: response.data }) })
//             .catch((error) => { console.log('error ' + error) })

//         axios.get(host + `api/course/Package`, { headers: {} })
//             .then(response => { this.setState({ Packages: response.data }) })
//             .catch((error) => { console.log('error ' + error) })

//     }
//     AprovedCourse(id) {
//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };

//         axios({ url: host + "api/course/approvedCourse/" + id, method: "POST", headers: headers })
//             .then(response => { if (response.status === 200) { toaster.success("Successful"); this.componentDidMount(); } })
//             .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });

//     }

//     addCategory() {
//         let formData = new FormData();
//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };
//         formData.append("name", this.state.addCategory);

//         axios({ url: host + "api/course/addCategory", method: "POST", data: formData, headers: headers })
//             .then(response => { if (response.status === 200) { toaster.success("Successful"); } })
//             .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
//     }

//     editCategory() {
//         let formData = new FormData();
//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };

//         formData.append("name", this.state.editCategory);

//         axios({ url: host + "api/course/editCategory/" + this.state.cateSelect, method: "POST", data: formData, headers: headers })
//             .then(response => { if (response.status === 200) { window.location.reload(); this.componentDidMount(); } })
//             .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
//     }

//     AddPackage() {
//         let formData = new FormData();
//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };

//         formData.append("title", this.state.titlePackage);
//         formData.append("price", this.state.pricePackage);
//         formData.append("body", this.state.descPackage);
//         formData.append("type", type);
//         formData.append("file", this.state.imgPackage[0]);

//         axios({ url: host + "api/course/addPackage", method: "POST", data: formData, headers: headers })
//             .then(response => { if (response.status === 200) { toaster.success("Successful"); } })
//             .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
//     }

//     deletePackage() {
//         var headers = { "Content-Type": "application/json", token: cookies.get("token") };

//         axios({ url: host + "api/course/deletePackage/" + this.state.pakgSelect, method: "POST", headers: headers })
//             .then(response => { if (response.status === 200) { toaster.success("Successful"); this.componentDidMount(); } })
//             .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
//     }
//     render() {
//         return (
//             <Context.Consumer>
//                 {ctx => {
//                     if (ctx.value.auth === "login"&&ctx.value.session.role === 1) {
//                         return (
//                             <div>
//                                 <Row style={{ height: '100vh', margin: 0, padding: 0 }}>
//                                     <Col id='col1Dash' md={3} xl={2}>
//                                         <div className="logoDash">
//                                             <Link to='/'>
//                                                 <img width="100" src={require('../../assets/loog.png')} alt="img" />
//                                             </Link>
//                                         </div>
//                                         <div id='isolate' />
//                                         <div id='continerButtonDash'>
//                                             <NavLink activeClassName='activeDash1' to='/dashboard1'>
//                                                 <Col id='slideCol' md={12}>
//                                                     <div>
//                                                         Aprovel
//                                     </div>
//                                                 </Col>
//                                             </NavLink>
//                                             <NavLink activeClassName='activeDash2' to='/dashboard2'>
//                                                 <Col id='slideCol' md={12}>
//                                                     <div>
//                                                         Courses
//                                                     </div>

//                                                 </Col>
//                                             </NavLink>
//                                             <Col id='slideColLogout' md={12}
//                                                 style={{ cursor: 'pointer' }}
//                                                 onClick={() => {
//                                                     cookies.remove("token");
//                                                     window.location.href = "/"
//                                                 }}>
//                                                 <div>
//                                                     Logout
//                                                 </div>
//                                             </Col>
//                                         </div>
//                                     </Col>
//                                     <Col id='col2Dash' sm={12} md={9} xl={10}>
//                                         <Row id='RowDashContent'>
//                                             <Col id='teest' xs={12} sm={6} md={6} lg={6} xl={3} style={{ marginTop: 20 }}>
//                                                 <div id='borderCard1'>
//                                                     <div id='cardDashContent'>
//                                                         <div id='cardDashTitle1'>Earnings (Monthly)</div>
//                                                         <div>40,000 $</div>
//                                                     </div>
//                                                 </div>
//                                             </Col>




//                                             <Col id='teest' xs={12} sm={6} md={6} lg={6} xl={3} style={{ marginTop: 20 }}>
//                                                 <div id='borderCard3'>
//                                                     <div id='cardDashContent'>
//                                                         <div id='cardDashTitle3'>Earnings (Monthly)</div>
//                                                         <div>40,000 $</div>
//                                                     </div>
//                                                 </div>
//                                             </Col>

//                                             <Col id='teest' xs={12} sm={6} md={6} lg={6} xl={3} style={{ marginTop: 20 }}>
//                                                 <div id='borderCard2'>
//                                                     <div id='cardDashContent'>
//                                                         <div id='cardDashTitle2'>Earnings (Monthly)</div>
//                                                         <div>40,000 $</div>
//                                                     </div>
//                                                 </div>
//                                             </Col>

//                                             <Col id='teest' xs={12} sm={6} md={6} lg={6} xl={3} style={{ marginTop: 20 }}>
//                                                 <div id='borderCard4'>
//                                                     <div id='cardDashContent'>
//                                                         <div id='cardDashTitle4'>Earnings (Monthly)</div>
//                                                         <div>40,000 $</div>
//                                                     </div>
//                                                 </div>
//                                             </Col>

//                                         </Row>

//                                         <Row id='RowDashContent1'>
//                                             <Col id='colBtnDash' xs={12} sm={6} md={6} lg={6} xl={3}>
//                                                 <Component initialState={{ isShown: false }}>
//                                                     {({ state, setState }) => (
//                                                         <Pane>
//                                                             <Dialog
//                                                                 isShown={state.isShown}
//                                                                 title="Add Category"
//                                                                 onCloseComplete={() => setState({ isShown: false })}
//                                                                 confirmLabel="Save"
//                                                                 onConfirm={() => {
//                                                                     this.addCategory()
//                                                                     setState({ isShown: false })
//                                                                 }}
//                                                             >
//                                                                 <TextInput width='75%' name="text-input-name"
//                                                                     placeholder="input name of Category..."
//                                                                     onChange={(event) =>
//                                                                         this.setState({ addCategory: event.target.value })}
//                                                                 />
//                                                             </Dialog>

//                                                             <Button onClick={() => setState({ isShown: true })} style={{ width: '150px' }}
//                                                                 variant="outline-primary">Add Category</Button>
//                                                         </Pane>
//                                                     )}
//                                                 </Component>

//                                             </Col>

//                                             <Col id='colBtnDash' xs={12} sm={6} md={6} lg={6} xl={3}>
//                                                 <Component initialState={{ isShown: false }}>
//                                                     {({ state, setState }) => (
//                                                         <Pane>
//                                                             <Dialog
//                                                                 isShown={state.isShown}
//                                                                 title="Edit Category"
//                                                                 onCloseComplete={() => setState({ isShown: false })}
//                                                                 confirmLabel="Edit"
//                                                                 onConfirm={() => {
//                                                                     this.editCategory()
//                                                                     setState({ isShown: false })
//                                                                 }}
//                                                             >
//                                                                 <Form>
//                                                                     <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
//                                                                         <Form.Label >Category</Form.Label>
//                                                                         <Form.Control as="select"

//                                                                             onChange={(even) => {
//                                                                                 if (even.target.value !== 'SelectCategory') {
//                                                                                     this.setState({ cateSelect: even.target.value })
//                                                                                 }
//                                                                             }
//                                                                             }>
//                                                                             <option value="SelectCategory">Select Category </option>
//                                                                             {this.state.category.map(cate =>
//                                                                                 <option key={cate._id} value={cate._id}  >
//                                                                                     {cate.name}
//                                                                                 </option>
//                                                                             )}
//                                                                         </Form.Control>
//                                                                     </Form.Group>
//                                                                 </Form>
//                                                                 <TextInput width='75%' name="text-input-name"
//                                                                     placeholder="input New name of Category..."
//                                                                     onChange={(event) =>
//                                                                         this.setState({ editCategory: event.target.value })}
//                                                                 />
//                                                             </Dialog>

//                                                             <Button onClick={() => setState({ isShown: true })} style={{ width: '150px' }}
//                                                                 variant="outline-info">Edit Category</Button>
//                                                         </Pane>
//                                                     )}
//                                                 </Component>

//                                             </Col>

//                                             <Col id='colBtnDash' xs={12} sm={6} md={6} lg={6} xl={3}>
//                                                 <Component initialState={{ isShown: false }}>
//                                                     {({ state, setState }) => (
//                                                         <Pane>
//                                                             <Dialog
//                                                                 isShown={state.isShown}
//                                                                 title="Add Package"
//                                                                 onCloseComplete={() => setState({ isShown: false })}
//                                                                 confirmLabel="Create"
//                                                                 onConfirm={() => {
//                                                                     this.AddPackage()
//                                                                     setState({ isShown: false })
//                                                                 }}
//                                                             >
//                                                                 <p>Package Name</p>
//                                                                 <TextInput id='inputnamepackeg'
//                                                                     name="text-input-name"
//                                                                     placeholder="input Package name..."
//                                                                     onChange={(event) => this.setState({ titlePackage: event.target.value })}

//                                                                 />
//                                                                 <p id='pricepackeg'>Price</p>
//                                                                 <TextInput id='inputPriceCource'
//                                                                     name="text-input-name"
//                                                                     placeholder="input course price..."
//                                                                     onChange={(event) => this.setState({ pricePackage: event.target.value })}

//                                                                 />
//                                                                 <Form>

//                                                                     <div className="mb-3" style={{ marginTop: 20 }}>
//                                                                         <Form.Group as={Row}>
//                                                                             <Col sm={10}>
//                                                                                 <Form.Check
//                                                                                     type="radio"
//                                                                                     label="Post Graduate"
//                                                                                     onChange={(e) => {
//                                                                                         document.getElementById('steps').style.display = 'none'
//                                                                                         let radiobtn1 = document.getElementById("step1");
//                                                                                         radiobtn1.checked = false;
//                                                                                         type = 'post';
//                                                                                         let radiobtn = document.getElementById("step2");
//                                                                                         radiobtn.checked = false;

//                                                                                     }}
//                                                                                     custom
//                                                                                     value="uptime"
//                                                                                     name="formHorizontalRadios"
//                                                                                     id="Post"

//                                                                                 />
//                                                                                 <Form.Check
//                                                                                     type="radio"
//                                                                                     label="Under Graduate"
//                                                                                     custom
//                                                                                     onChange={(e) => {
//                                                                                         //   this.Sort(e.target.value)
//                                                                                         document.getElementById('steps').style.display = 'block'
//                                                                                         document.getElementById('Under').Check = true;
//                                                                                     }}
//                                                                                     value="price"
//                                                                                     name="formHorizontalRadios"
//                                                                                     id="Under"

//                                                                                 />
//                                                                             </Col>
//                                                                         </Form.Group>
//                                                                     </div>


//                                                                     <div id="steps">
//                                                                         <Form>
//                                                                             <Form.Group as={Row}>
//                                                                                 <Col sm={10}>
//                                                                                     <Form.Check
//                                                                                         type="radio"
//                                                                                         label="Step 1"
//                                                                                         onChange={(e) => {
//                                                                                             type = 'under Step1';

//                                                                                         }}
//                                                                                         custom
//                                                                                         value="uptime"
//                                                                                         name="formHorizontalRadios"
//                                                                                         id="step1"

//                                                                                     />
//                                                                                     <Form.Check
//                                                                                         type="radio"
//                                                                                         label="Step 2"
//                                                                                         custom
//                                                                                         onChange={(e) => {
//                                                                                             type = 'under Step2';

//                                                                                         }}
//                                                                                         value="price"
//                                                                                         name="formHorizontalRadios"
//                                                                                         id="step2"

//                                                                                     />
//                                                                                 </Col>
//                                                                             </Form.Group>
//                                                                         </Form>
//                                                                     </div>


//                                                                 </Form>
//                                                                 <p id='titleImgPackeg'>Upload Image</p>
//                                                                 <FilePicker
//                                                                     width={250}
//                                                                     marginBottom={32}
//                                                                     onChange={files => { this.setState({ imgPackage: files }) }}

//                                                                 />
//                                                                 <p>Package Description</p>
//                                                                 <Textarea
//                                                                     id="textarea-2"
//                                                                     placeholder="Description..."
//                                                                     onChange={(event) => this.setState({ descPackage: event.target.value })}

//                                                                 />
//                                                             </Dialog>

//                                                             <Button onClick={() => setState({ isShown: true })} style={{ width: '150px' }}
//                                                                 variant="outline-success">Add Package</Button>
//                                                         </Pane>
//                                                     )}
//                                                 </Component>

//                                             </Col>

//                                             <Col id='colBtnDash' xs={12} sm={6} md={6} lg={6} xl={3}>
//                                                 <Component initialState={{ isShown: false }}>
//                                                     {({ state, setState }) => (
//                                                         <Pane>
//                                                             <Dialog
//                                                                 isShown={state.isShown}
//                                                                 title="Delete Package"
//                                                                 onCloseComplete={() => setState({ isShown: false })}
//                                                                 confirmLabel="Delete"
//                                                                 onConfirm={() => {
//                                                                     this.deletePackage()
//                                                                     setState({ isShown: false })
//                                                                 }}
//                                                             >
//                                                                 <Form>
//                                                                     <Form.Group id='selectCategoryContiner' controlId="exampleForm.ControlSelect1">
//                                                                         <Form.Label >Packages</Form.Label>
//                                                                         <Form.Control as="select"

//                                                                             onChange={(even) => {
//                                                                                 if (even.target.value !== 'SelectPackage') {
//                                                                                     this.setState({ pakgSelect: even.target.value })
//                                                                                 }
//                                                                             }
//                                                                             }>
//                                                                             <option value="SelectPackage">Select Package </option>
//                                                                             {this.state.Packages.map(pakg =>
//                                                                                 <option key={pakg._id} value={pakg._id}  >
//                                                                                     {pakg.Title}
//                                                                                 </option>
//                                                                             )}
//                                                                         </Form.Control>
//                                                                     </Form.Group>
//                                                                 </Form>
//                                                             </Dialog>

//                                                             <Button onClick={() => setState({ isShown: true })} style={{ width: '150px' }}
//                                                                 variant="outline-warning">Delete Package</Button>
//                                                         </Pane>
//                                                     )}
//                                                 </Component>

//                                             </Col>

//                                         </Row>
//                                         <Row style={{ margin: 50, padding: 0 }}>
//                                             <Col>

//                                                 <Table id='RowTable' striped bordered hover size="xs" variant="">
//                                                     <thead>
//                                                         <tr>

//                                                             <th> Name Course</th>
//                                                             <th style={{ width: '300px' }}>Name Instructor</th>
//                                                             <th style={{ width: '100px' }}>Price</th>
//                                                             <th style={{ width: '40px' }}>Aprovel</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         {this.state.aprovelUnDone.map(UnDone =>
//                                                             <tr key={UnDone._id}>

//                                                                 <td>{UnDone.title}</td>
//                                                                 <td>{UnDone.userName}</td>
//                                                                 <td>{UnDone.price + ' $ '}</td>
//                                                                 <td style={{ display: 'flex', justifyContent: 'center' }} >
//                                                                     <Icon style={{ cursor: 'pointer' }}
//                                                                         onClick={() => this.AprovedCourse(UnDone._id)}
//                                                                         icon="tick-circle" color="success" size={20} />
//                                                                 </td>

//                                                             </tr>
//                                                         )}
//                                                     </tbody>
//                                                 </Table>
//                                             </Col>
//                                         </Row>

//                                     </Col>
//                                 </Row>

//                             </div>
//                         )
//                     } else if (ctx.value.auth !== "login") {
//                         return (
//                             <HeaderHome />
//                         )
//                     }
//                     else if (ctx.value.auth ==='logding') {


//                         return (

//                             <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
//                                 <Spinner />
//                             </Pane>

//                         )
//                     }

//                 }}
//             </Context.Consumer>
//         )
//     }
// }
// export default Dashboard;