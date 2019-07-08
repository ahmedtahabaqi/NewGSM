import React from 'react';
import { Pane, Dialog, Icon, Menu, Button, TextInput, FilePicker, Textarea, toaster } from 'evergreen-ui';
import { Image, Overlay } from 'react-bootstrap';
import Component from "@reactions/component";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Context from '../Context';
import axios from 'axios';
import host from '../Host';
const cookies = new Cookies();


class AvataeAndEdit extends React.Component {
    constructor(...args) {
        super(...args);
        this.attachRef = target => this.setState({ target });
        this.state = {
            name: '',
            body: '',
            field: '',
            file: [],
            show: false,
        }
    }

    EditUserProfile() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        formData.append("name", this.state.name);
        formData.append("body", this.state.body);
        formData.append("field", this.state.Country);
        formData.append("file", this.state.file[0]);


        axios({ url: host + "api/user/update", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) { window.location.reload(); }
            })
            .catch(function (error) { toaster.danger(error.request.response) }
            )
    }
    EditStudentProfile() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("tokenUser") };
        formData.append("name", this.state.name);
        formData.append("body", this.state.body);
        formData.append("field", this.state.Country);
        formData.append("file", this.state.file[0]);


        axios({ url: host + "api/student/update", method: "POST", data: formData, headers: headers })
            .then(response => {
                if (response.status === 200) { window.location.reload(); }
            })
            .catch(function (error) { toaster.danger(error.request.response) }
            )
    }
    render() {
        const { show, target } = this.state;
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='avatar'>

                            <Overlay target={target} show={show} placement="bottom">
                                {({
                                    placement,
                                    scheduleUpdate,
                                    arrowProps,
                                    outOfBoundaries,
                                    show: _show,
                                    ...props
                                }) => (
                                        <div
                                            {...props}
                                            style={{
                                                backgroundColor: '#eeeeee',
                                                padding: '2px 10px',
                                                color: 'black',
                                                borderRadius: 3,
                                                zIndex: 111,
                                                ...props.style,
                                            }}
                                        >
                                            <Menu >
                                                <Menu.Group>
                                                    <Menu.Item>
                                                        {ctx.value.session.email}
                                                    </Menu.Item>
                                                </Menu.Group>
                                                <Menu.Divider />
                                                <Menu.Group >
                                                    <div style={ctx.value.session.role === 1 ? {} : { display: "none" }}>
                                                        <Menu.Item style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }} >
                                                            <Link to='/dashboard1/table1' style={{ display: 'flex', justifyContent: 'center' }} >

                                                                < Button marginTop={20} marginBottom={20} width={100} appearance="primary" intent="none">Dashboard</Button>
                                                            </Link>
                                                        </Menu.Item>
                                                    </div>
                                                    <div style={ctx.value.session.role === 1 || ctx.value.session.role === 0 ? {} : { display: "none" }}>
                                                        <Menu.Item style={{ marginTop: '10px' }} >
                                                            <Link to='/Addcourses' style={{ display: 'flex', justifyContent: 'center' }} >
                                                                < Button marginTop={20} marginBottom={20} width={100} appearance="primary" intent="none">My Courses</Button>
                                                            </Link>
                                                        </Menu.Item>

                                                    </div>
                                                    <div style={ctx.value.session.role === 1 || ctx.value.session.role === 0 ? { display: "none" } : {}}>
                                                        <Menu.Item style={{ marginTop: '10px' }} >
                                                            <Link to='/profile' style={{ display: 'flex', justifyContent: 'center' }} >
                                                                < Button marginTop={20} marginBottom={20} width={100} appearance="primary" intent="none">Profile</Button>
                                                            </Link>
                                                        </Menu.Item>
                                                    </div>
                                                    <Menu.Item style={{ marginTop: '10px' }}>

                                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                            < Button marginTop={20} marginBottom={20} width={100}
                                                                onClick={() => {
                                                                    cookies.remove("token");
                                                                    cookies.remove("tokenUser");
                                                                    window.location.href = "/"
                                                                }}
                                                                appearance="primary" intent="danger">Logout</Button>
                                                        </div>
                                                    </Menu.Item>
                                                    <Menu.Item id='changePswContiner' style={{ marginTop: '10px' }} >
                                                        <Component initialState={{ isShown: false }}>
                                                            {({ state, setState }) => (
                                                                <Pane>
                                                                    <Dialog
                                                                        isShown={state.isShown}
                                                                        title="Change Password"
                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                        confirmLabel="Change"
                                                                        onConfirm={() => {
                                                                           
                                                                            setState({ isShown: false })
                                                                        }}
                                                                    >
                                                                        <p>Old password</p>
                                                                        <TextInput id='inputnamecourse'
                                                                            name="text-input-name"
                                                                            placeholder="old password..."
                                                                            type='password'
                                                                            onChange={(event) => this.setState({ oldPassword: event.target.value })}
                                                                        />
                                                                        <p style={{ marginTop: 20 }}>New password</p>
                                                                        <TextInput id='inputnamecourse'
                                                                            name="text-input-name"
                                                                            placeholder="new password ..."
                                                                            type='password'
                                                                            onChange={(event) => this.setState({ NewPassword: event.target.value })}
                                                                        />
                                                                          <p style={{ marginTop: 20 }}>Re-New password</p>
                                                                        <TextInput id='inputnamecourse'
                                                                            name="text-input-name"
                                                                            placeholder="Re-new password ..."
                                                                            type='password'
                                                                            onChange={(event) => this.setState({ rePassword: event.target.value })}
                                                                        />
                                                                       
                                                                    </Dialog>
                                                                    <span id='changePswContiner' onClick={() => setState({ isShown: true })}>Change Password</span>
                                                                </Pane>
                                                            )
                                                            }
                                                        </Component>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>

                                        </div>
                                    )}
                            </Overlay>
                            <Image style={{ cursor: "pointer" }} ref={this.attachRef} onClick={() => this.setState({ show: !show })} width="45" height="45" src={host + ctx.value.session.img} roundedCircle />
                            {ctx.value.session.role === 1 || ctx.value.session.role === 0 ? (
                                <Component initialState={{ isShown: false }}>
                                    {({ state, setState }) => (
                                        <Pane>
                                            <Dialog
                                                isShown={state.isShown}
                                                title="Edit Profile"
                                                onCloseComplete={() => setState({ isShown: false })}
                                                confirmLabel="Save"
                                                onConfirm={() => {
                                                    this.EditUserProfile()
                                                    setState({ isShown: false })
                                                }}
                                            >
                                                <p>Full Name</p>
                                                <TextInput id='inputnamecourse'
                                                    name="text-input-name"
                                                    placeholder="input full name..."
                                                    onChange={(event) => this.setState({ name: event.target.value })}
                                                />
                                                <p style={{ marginTop: 20 }}>field</p>
                                                <TextInput id='inputnamecourse'
                                                    name="text-input-name"
                                                    placeholder="field ..."
                                                    onChange={(event) => this.setState({ field: event.target.value })}
                                                />
                                                <p style={{ marginTop: 20 }}>Upload Image</p>
                                                <FilePicker
                                                    width={250}
                                                    marginBottom={32}
                                                    onChange={files => { this.setState({ file: files }) }} />
                                                <p>Description</p>
                                                <Textarea
                                                    id="textarea-2"
                                                    placeholder="Description..."
                                                    onChange={(event) => this.setState({ body: event.target.value })} />
                                            </Dialog>
                                            <Icon id='editAvatar' size={35} icon="edit" color="muted" marginLeft={10} paddingTop={10} onClick={() => setState({ isShown: true })} />
                                        </Pane>
                                    )
                                    }
                                </Component>
                            ) : (
                                    <Component initialState={{ isShown: false }}>
                                        {({ state, setState }) => (
                                            <Pane>
                                                <Dialog
                                                    isShown={state.isShown}
                                                    title="Edit Profile"
                                                    onCloseComplete={() => setState({ isShown: false })}
                                                    confirmLabel="Save"
                                                    onConfirm={() => {
                                                        this.EditStudentProfile()
                                                        setState({ isShown: false })
                                                    }}
                                                >
                                                    <p>Full Name</p>
                                                    <TextInput id='inputnamecourse'
                                                        name="text-input-name"
                                                        placeholder="input full name..."
                                                        onChange={(event) => this.setState({ name: event.target.value })}
                                                    />
                                                    <p style={{ marginTop: 20 }}>field</p>
                                                    <TextInput id='inputnamecourse'
                                                        name="text-input-name"
                                                        placeholder="field ..."
                                                        onChange={(event) => this.setState({ field: event.target.value })}
                                                    />
                                                    <p style={{ marginTop: 20 }}>Upload Image</p>
                                                    <FilePicker
                                                        width={250}
                                                        marginBottom={32}
                                                        onChange={files => { this.setState({ file: files }) }} />
                                                    <p>Description</p>
                                                    <Textarea
                                                        id="textarea-2"
                                                        placeholder="Description..."
                                                        onChange={(event) => this.setState({ body: event.target.value })} />
                                                </Dialog>
                                                <Icon id='editAvatar' size={35} icon="edit" color="muted" marginLeft={10} paddingTop={10} onClick={() => setState({ isShown: true })} />
                                            </Pane>
                                        )
                                        }
                                    </Component>
                                )}
                        </div>)
                }
                }
            </Context.Consumer>
        )
    }
}
export default AvataeAndEdit;
