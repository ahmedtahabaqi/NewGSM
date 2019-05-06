import React from 'react';
import { Pane, Dialog, Icon, Menu, Button, TextInput, FilePicker, Textarea, toaster } from 'evergreen-ui';
import { Image,Overlay} from 'react-bootstrap';
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
            description: '',
            Country:'',
            file: [],
            auth:'',
            show: false,
            session:[]

        }
    }
    componentDidMount() {
        if (cookies.get("token")) {
          var headers = { "Content-Type": "application/json", token: cookies.get("token") };
          axios.get(host+ `api/user/checklogin`, 
          { headers: headers })
              .then(response =>  { 
                  this.setState({ 
                    auth: response.data[0].auth,
                    session: response.data[1].sesson,
    
                  }) 
                  
                })
              .catch((error) => { 
                this.setState({ 
                  auth:"notLogin",
    
                }) 
                console.log(error) 
              }) 
        }
      
    }
    EditProfile() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        formData.append("name", this.state.name);
        formData.append("body", this.state.description);
        formData.append("Country", this.state.Country);
        formData.append("file", this.state.file[0]);


        axios({ url: host + "api/user/update", method: "POST", data: formData, headers: headers })
            .then(response => { if (response.status === 200) { window.location.reload(); } })
            .catch(function (error) { if (error.request.response) { toaster.danger(error.request.response); } });
    }

    render() {
        const { show, target } = this.state;
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='avatar'>
          {/* <Button
          variant="danger"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Click me to see
        </Button> */}
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
                backgroundColor: '#f8f9fa',
                padding: '2px 10px',
                color: 'black',
                borderRadius: 3,
                ...props.style,
              }}
            >
                                             <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                {ctx.value.session.email}
                                             </Menu.Item>
                                        </Menu.Group>
                                        <Menu.Divider />
                                        <Menu.Group >
                                            <div style={ctx.value.session.role === 1 ? {} : { display: "none" }}>
                                                <Menu.Item style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }} >
                                                    <Link to='/dashboard1' style={{ display: 'flex', justifyContent: 'center' }} >

                                                        < Button marginTop={20} marginBottom={20} width={100} appearance="primary" intent="none">Dashboard</Button>
                                                    </Link>
                                                </Menu.Item>
                                            </div>
                                            <Menu.Item style={{ marginTop: '10px' }} >
                                                <Link to='/Addcourses' style={{ display: 'flex', justifyContent: 'center' }} >
                                                    < Button marginTop={20} marginBottom={20} width={100} appearance="primary" intent="none">My Courses</Button>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item style={{ marginTop: '10px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    < Button marginTop={20} marginBottom={20} width={100}
                                                        onClick={() => {
                                                            cookies.remove("token");
                                                            window.location.href = "/"
                                                        }}
                                                        appearance="primary" intent="danger">Logout</Button>
                                                </div>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>

            </div>
          )}
        </Overlay>



                                <Image style={{cursor:"pointer"}}    ref={this.attachRef}  onClick={() => this.setState({ show: !show })}  width="45" height="45" src={host+this.state.session.img} roundedCircle />
                              


                     
                            <Component initialState={{ isShown: false }}>
                                {({ state, setState }) => (
                                    <Pane>
                                        <Dialog
                                            isShown={state.isShown}
                                            title="Edit Profile"
                                            onCloseComplete={() => setState({ isShown: false })}
                                            confirmLabel="Save"
                                            onConfirm={() => {
                                                this.EditProfile()
                                                setState({ isShown: false })
                                            }}
                                        >
                                            <p>Full Name</p>
                                            <TextInput id='inputnamecourse'
                                                name="text-input-name"
                                                placeholder="input full name..."
                                                onChange={(event) => this.setState({ name: event.target.value })}
                                            />
                                             <p style={{ marginTop: 20 }}>Country</p>
                                            <TextInput id='inputnamecourse'
                                                name="text-input-name"
                                                placeholder="input your Country ..."
                                                onChange={(event) => this.setState({ Country: event.target.value })}
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
                                                onChange={(event) => this.setState({ description: event.target.value })} />
                                        </Dialog>
                                        <Icon id='editAvatar' size={35} icon="edit" color="muted" marginLeft={10} paddingTop={10} onClick={() => setState({ isShown: true })} />
                                    </Pane>
                                )
                                }
                            </Component>
                        </div>)
                }
                }
            </Context.Consumer>
        )
    }
}
export default AvataeAndEdit;
