import React from 'react';
import {  Icon, Pane, Dialog, TextInput, toaster, Spinner, Heading,  Switch } from 'evergreen-ui';
import { Collapse } from 'react-bootstrap';
import Component from "@reactions/component";
import FooterAllPage from '../common/footerAllPage';
// import Vimeo from '@u-wave/react-vimeo';
import Context from '../Context';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import NavbarAllPage from '../common/navbarAllPage'
import host from '../Host';
import Iframe from 'react-iframe'
import natsort from 'natsort'

const cookies = new Cookies();

class AllCourseAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.displayDataAdt = [];
        this.state = {
            course: [],
            lectures: [],
            Adtdata: this.displayDataAdt,
            videos: [],
            videos2: [],
            open: false,
            addLecture: '',
            editChapter: '',
            courseId: '',
            nameVideo: '',
            chapter: '',
            free: "false",
            video: [],
            chapterId: '',
            editVideo: '',
            rating: 3.5,
            courseDetels: [],
            nameFile: '',
            Uploadfile: [],
            getFile: [],
            spinner: true,

        };
    }

    componentDidMount() {
        
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');

            let formData = new FormData();
            var headers = { "Content-Type": "application/json", token: cookies.get("token") };
            formData.append("user_id",userId );

            axios({ url: host + `api/course/admin/course/`+ this.props.match.params.id, method: "POST", data: formData, headers: headers })
               
            .then(response => {
                let chapters=response.data.chapters;
                var sorter = natsort();
                chapters.sort(function(a, b) {
                 return sorter(a.chapter_title, b.chapter_title);
                 });
                   console.log(response.data);
                   this.setState({
                    lectures: chapters,
                    spinner: false,
                    courseDetels: response.data.course,
                })
                if (response.data.chapters) {
                this.Html(response.data.chapters.length)
                    
                }
                   
                })
                .catch(function (error) {
                    console.log(error)
                     toaster.danger(error.message) 
                    });

    }
    deleteLecture(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deletechapter/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    this.componentDidMount();
                }
            })
            .catch(function (error) { toaster.danger(error.message) });

    }

    DeleteVideo(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deleteVideo/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    // this.componentDidMount();

                }
            })
            .catch(function (error) { toaster.danger(error.message) });

    }
    DeleteFile(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deleteFile/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    window.location.reload(1);


                }
            })
            .catch(function (error) { toaster.danger(error.message) });

    }

    chengeCheked = () => {
        if (this.state.free === "false") {
            this.setState({ free: 'true' })
        }
        else {
            this.setState({ free: 'false' })
        }
    }
    renderIcon = (_id, stat) => {
        if (stat) { return <Icon id='menuicon' icon="minus" color="danger" size={30} /> }
        else { return <Icon id='menuicon' icon="menu" color="info" size={30} /> }
    }

    Html(value) {
        var html = []
        for (let index = 0; index < value; index++) {
            html.push(
                <div key={this.state.lectures[index].chapter_id} id='AddLectureContiner'>
                    <Component initialState={{
                        ['open' + index]: false, videos: [], getFile: []
                    }}>
                        {({ state, setState }) => (
                            <div id='plusContinerAdd'>
                                <div id='plusContiner1Add' >

                                    <div id='menuAndTitle'>
                                        <div onClick={() => {
                                            setState({
                                                ['open' + index]: !state['open' + index]
                                            })
                                        }
                                        } aria-controls="example-collapse-text" >
                                            {this.renderIcon(this.state.lectures[index].chapter_id, state['open' + index])} {}
                                        </div>
                                        <span >{this.state.lectures[index].chapter_title}</span>
                                    </div>
                                    <div id="uploadAnddeletContiner">
                       
                                    
                                    
                                    </div>
                                </div>
                                <Collapse in={state['open' + index]}>
                                    <div id="example-collapse-text">
                                        {this.state.lectures[index].Data.map((video) =>
                                            <div key={video._id}>
                                                <div id='showVideoContiner' style={video.type === "video"

                                                    ? {}
                                                    : { display: "none" }} >
                                                    <div id='iconVideoAndName' >

                                                        <Component initialState={{ isShown: false }}>
                                                            {({ state, setState }) => (
                                                                <Pane>
                                                                    <Dialog
                                                                        isShown={state.isShown}
                                                                        title="No footer"
                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                        hasFooter={false}
                                                                        hasHeader={false}
                                                                    >
                                                                        <Iframe url={`https://player.vimeo.com/video/${video.VideoId}?loop=1`}
                                                                            width="525px"
                                                                            height="293px"
                                                                            id="myId"
                                                                            allowFullScreen
                                                                            className="myClassname"
                                                                            display="initial"
                                                                            position="relative" />
                                                                    </Dialog>
                                                                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { setState({ isShown: true }) }}>
                                                                        <Icon icon="video" size={20} color="success" marginRight={16} marginLeft={16} />
                                                                        <p id='NameofVideoInLecture'>{video.name}</p>
                                                                    </div>
                                                                </Pane>
                                                            )}
                                                        </Component>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <Component initialState={{ isShown: false }}>
                                                            {({ state, setState }) => (
                                                                <Pane style={{ display: 'inline' }}>
                                                                    <Dialog onConfirm={() => {
                                                                        {
                                                                            let formData = new FormData();
                                                                            var headers = { "Content-Type": "application/json", token: cookies.get("token") };

                                                                            formData.append("name", this.state.editVideo);
                                                                            formData.append("free", this.state.free);

                                                                            axios({ url: host + "api/course/editVideo/" + video._id, method: "POST", data: formData, headers: headers })
                                                                                .then(response => {
                                                                                    if (response.status === 200) {
                                                                                        window.location.reload(1);
                                                                                    }
                                                                                })
                                                                                .catch(function (error) { toaster.danger(error.message) });
                                                                        }
                                                                       

                                                                        setState({ isShown: false })
                                                                    }}
                                                                        isShown={state.isShown}
                                                                        title="Edit Name Of Video"
                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                        confirmLabel="Add"

                                                                    >
                                                                        <div id='inputofAddlecture'>
                                                                            <div id='labelOfInputAddLecture'>
                                                                                <p>Video Name</p>
                                                                            </div >
                                                                            <TextInput width='75%' name="text-input-name"
                                                                                placeholder="input Video name..."
                                                                                onChange={(event) => this.setState({ editVideo: event.target.value })}
                                                                            />

                                                                        </div>
                                                                        <Heading size={400} marginLeft={32} marginBottom={10} marginTop="default">
                                                                            Free ?
                                                                         </Heading>
                                                                        <Switch marginLeft={32} marginBottom={10}
                                                                            onChange={() => this.chengeCheked()} />
                                                                    </Dialog>
                                                                    <Icon icon="edit" size={20} color="muted" marginRight={16}
                                                                        onClick={() => { setState({ isShown: true }) }}
                                                                        style={{ cursor: 'pointer' }}
                                                                    />

                                                                </Pane>
                                                            )}
                                                        </Component>
                                                        <Component initialState={{ isShown: false }}>
                                                            {({ state, setState }) => (
                                                                <Pane>
                                                                    <Dialog
                                                                        isShown={state.isShown}
                                                                        intent="danger"
                                                                        title="Delete Video"
                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                        confirmLabel="Delete"
                                                                        onConfirm={() => {
                                                                            var headers = { "Content-Type": "application/json", token: cookies.get("token") };

                                                                            axios({ url: host + "api/course/deleteVideo/" + video._id, method: "POST", headers: headers })
                                                                                .then(response => {
                                                                                    if (response.status === 200) {

                                                                                        window.location.reload(1);
                                                                                    }
                                                                                })
                                                                                .catch(function (error) { toaster.danger(error.message) });

                                                                            setState({ isShown: false })
                                                                        }}
                                                                    >
                                                                        <center> <h4>Are You Sure You Want To Delete this Video</h4></center>

                                                                    </Dialog>
                                                                    <Icon icon="trash" size={20} color="muted" marginRight={16}
                                                                        onClick={() => {
                                                                            setState({ isShown: true })

                                                                        }} />
                                                                </Pane>
                                                            )}
                                                        </Component>

                                                    </div>
                                                </div>
                                                <div style={video.type === "file"

                                                    ? {}
                                                    : { display: "none" }} id='showVideoContiner'>
                                                    <div id='iconVideoAndName' style={{ cursor: 'pointer' }}
                                                        onClick={() => {
                                                            window.open(host + video.url, '_blank');
                                                        }}>
                                                        <Icon icon="document" size={20} color="info" marginRight={16} marginLeft={16}
                                                            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} />
                                                        <p id='NameofVideoInLecture'>{video.name}</p>
                                                    </div>
                                                    <div>
                                                        <Component initialState={{ isShown: false }}>
                                                            {({ state, setState }) => (
                                                                <Pane>
                                                                    <Dialog
                                                                        isShown={state.isShown}
                                                                        intent="danger"
                                                                        title="Delete File"
                                                                        onCloseComplete={() => setState({ isShown: false })}
                                                                        confirmLabel="Delete"
                                                                        onConfirm={() => {
                                                                            this.DeleteFile(video._id)

                                                                            setState({
                                                                                isShown: false,

                                                                            })
                                                                        }}
                                                                    >
                                                                        <center> <h4>Are You Sure You Want To Delete this File</h4></center>

                                                                    </Dialog>
                                                                    <Icon icon="trash" size={20} color="muted" marginRight={16}
                                                                        onClick={() => {
                                                                            setState({ isShown: true })

                                                                        }} />
                                                                </Pane>
                                                            )}
                                                        </Component>

                                                    </div>
                                                </div>

                                            </div>
                                        )}

                                    </div>
                                </Collapse>
                            </div>

                        )
                        }
                    </Component>

                </div>

            )

        }

        this.displayDataAdt = html;
        this.setState({
            Adtdata: this.displayDataAdt,
        });
    }

    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    if (ctx.value.auth === "login" && !this.state.spinner) {
                        return (
                            <React.Fragment>
                                <div id='contentUpFooter'>
                                    <NavbarAllPage />

                                    <div id='titleCourseContiner'>
                                        <div id='titleCourseContiner1'>
                                            <h2 id='titleCourse'>
                                                {this.state.courseDetels.title}
                                            </h2>
                                            <p id='descripCourse'> {this.state.courseDetels.body} </p>
                                        </div>
                                        <div id='imgCardCourseContiner' > <img id='imgCardCourse' src={host + this.state.courseDetels.img} alt="img" /></div>

                                    </div>
                                    {/* )} */}
                                    {/* <NavLink exact to='/dashboard1/table1'>
                                        <div id='iconBack'>
                                            <Icon icon='arrow-left' size={30} color="white" />
                                        </div>
                                    </NavLink> */}
                                   
                                    {this.displayDataAdt}
                                </div>
                                <FooterAllPage />
                            </React.Fragment>
                        )
                    }
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

export default AllCourseAdmin;