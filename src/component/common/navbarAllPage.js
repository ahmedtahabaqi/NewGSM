import React, { Component } from 'react';
import Context from '../Context';
import { Navbar, Nav, OverlayTrigger } from 'react-bootstrap';
import { Button, Popover, Menu, Position, Icon } from 'evergreen-ui';
import AvataeAndEdit from '../common/Avatar';
import axios from 'axios';
import host from '../Host';
import { Link } from 'react-router-dom';

class NavbarAllPage extends Component {
    constructor() {
        super()
        this.state = {
            rating: 3.5,
            category: [],
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })
    }
    render() {
        const renderTooltip = props => (
            <div
                {...props}
                style={{
                    backgroundColor: '#f8f9fa',
                    padding: '2px 10px',
                    color: 'black',
                    borderRadius: 3,
                    display: 'flex',
                    ...props.style,
                }}
            >
                <Popover title="Popover right">


                    <Menu.Group>
                        <span onClick={() => {
                            window.location.href = `/allcourses?category=all`;

                        }}

                        >
                            <Menu.Item>All Categories</Menu.Item></span>
                        {this.state.category.map(cate =>
                            <span key={cate._id} onClick={() => {
                                window.location.href = `/allcourses?category=${cate._id}`;

                            }} >
                                <Menu.Item  >{cate.name}</Menu.Item>
                            </span>
                        )}
                    </Menu.Group>
                </Popover>
            </div>

        );
        return (<Context.Consumer>
            {ctx => {

                return (
                    <div>
                        <Navbar id='collapss' collapseOnSelect expand="lg" bg="light" variant="light" >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Link to='/'>
                                <img height="45" src={require('../../assets/log.png')} alt="img" />
                            </Link>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <OverlayTrigger
                                        placement="bottom-start"
                                        delay={{ show: 50, hide: 1000 }}
                                        overlay={renderTooltip}
                                        onExited={!renderTooltip}
                                    >
                                        <div style={{ marginLeft: 30, cursor: 'pointer' ,display:'flex',alignItems:'center' }}>
                                            <img height="25" src={require('../../assets/cate.png')} alt="img" />
                                            <span style={{ marginLeft: 10,fontSize:23,color:'#403838' }}>Category</span>
                                        </div>
                                        {/* 
    <Button  iconBefore="layout-grid">Hover me to see</Button> */}
                                    </OverlayTrigger>
                                    {/* <Popover
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <span onClick={()=>{
                                                            window.location.href = `/allcourses?category=all`;

                                                        }}
                                                    
                                                    >
                                                    <Menu.Item>All Categories</Menu.Item></span>
                                                    {this.state.category.map(cate =>
                                                        <span key={cate._id} onClick={()=>{
                                                            window.location.href = `/allcourses?category=${cate._id}`;

                                                        }} >
                                                            <Menu.Item  >{cate.name}</Menu.Item>
                                                        </span>
                                                    )}
                                                </Menu.Group>

                                            </Menu>
                                        }
                                    >
                                        <Button marginRight={10} marginLeft={10} iconAfter="caret-down">Category</Button>
                                    </Popover>
                                     */}
                                    <Link to='/'>
                                        <div style={{ marginLeft: 30, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => {
                                            window.location.href = "#homePackagesContiner";
                                        }}>
                                            <img height="30" src={require('../../assets/box.png')} alt="img" />
                                            <span style={{ marginLeft: 10,fontSize:23 ,color:'#403838' }}>Packages</span>
                                        </div>
                                    </Link>
                                    {/* <Link to="/ShowPackages">
                                        < Button appearance="primary" intent="none">Packages</Button>
                                    </Link> */}
                                </Nav>
                                <Nav>
                                    <div style={{ marginRight: 40, marginTop: 7, cursor: 'pointer' }}>
                                        <img height="35" src={require('../../assets/nof.png')} alt="img" />
                                    </div>
                                    <div style={{ marginRight: 40, marginTop: 7, cursor: 'pointer' }}>
                                        <img height="35" src={require('../../assets/shopping.png')} alt="img" /></div>
                                    <div style={ctx.value.auth === "login" ? {} : { display: "none" }}>
                                        <AvataeAndEdit />
                                    </div>
                                    <div style={ctx.value.auth === "login" ? { display: "none" } : {}}>
                                        <Popover
                                            position={Position.BOTTOM_LEFT}
                                            content={
                                                <Menu>
                                                    <Menu.Group>
                                                        <Menu.Item ><Link
                                                            to="/loginuser"
                                                        >Login student</Link></Menu.Item>
                                                        <Menu.Item ><Link to="/logintecher">Login Instructor</Link></Menu.Item>
                                                    </Menu.Group>
                                                </Menu>
                                            }
                                        >
                                            <Button marginRight={10} marginTop={5} >Login</Button>
                                        </Popover>
                                    </div>
                                    <div style={ctx.value.auth !== 'login' ? {} : { display: "none" }}>
                                        <Popover
                                            position={Position.BOTTOM_LEFT}
                                            content={
                                                <Menu>
                                                    <Menu.Group>
                                                        <Menu.Item ><Link to="/registeruser">Register student</Link></Menu.Item>
                                                        <Menu.Item ><Link to="/registertecher">Register Instructor</Link></Menu.Item>
                                                    </Menu.Group>
                                                </Menu>
                                            }
                                        >
                                            <Button marginRight={10} marginTop={5} appearance="primary" intent="danger">Sign Up</Button>
                                        </Popover>
                                    </div>
                                </Nav>
                            </Navbar.Collapse >
                        </Navbar>
                        <div>

                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
        );
    }
}

export default NavbarAllPage;





