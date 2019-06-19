import React from 'react';
import { Button, Icon, Pane, Dialog, TextInput, toaster, Spinner, Heading, FilePicker, Switch } from 'evergreen-ui';
import { Collapse } from 'react-bootstrap';
import Component from "@reactions/component";
import FooterAllPage from '../common/footerAllPage';
// import Vimeo from '@u-wave/react-vimeo';
import Context from '../Context';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import NavbarAllPage from '../common/navbarAllPage'
import host from '../Host'
import Iframe from 'react-iframe'

const cookies = new Cookies();

class AddLecture extends React.Component {
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
            spinner: false,

        };
    }

    componentDidMount() {
        axios.get(host + `api/course/teacher/` + this.props.match.params.id, { headers: { token: cookies.get("token") } })
            .then(response => {
                console.log(response.data)
                this.setState({
                    lectures: response.data.chapters,
                    spinner: false,
                    courseDetels: response.data.course,
                })
                this.Html(response.data.chapters.length)
            })
            .catch((error) => { console.log('error ' + error); })

    }
    deleteLecture(id) {
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        axios({ url: host + "api/course/deletechapter/" + id, method: "POST", headers: headers })
            .then(response => {
                if (response.status === 200) {
                    toaster.success("Successful");
                    window.location.reload(1);
                    this.componentDidMount();
                }
            })
            .catch(function (error) { toaster.danger(error.message) });

    }

    addLecture() {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };
        formData.append("courseId", this.state.courseId);
        formData.append("title", this.state.addLecture);
        axios({ url: host + "api/course/addchapter", method: "POST", data: formData, headers: headers })
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
    uploadFile(id) {
        let formData = new FormData();
        var headers = { "Content-Type": "application/json", token: cookies.get("token") };

        formData.append("name", this.state.nameFile);
        formData.append("course", id);
        formData.append("chapter", this.state.chapterId);
        formData.append("file", this.state.Uploadfile[0]);

        axios({ url: host + "api/course/addFile", method: "POST", data: formData, headers: headers })
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


    customFormRenderer(onSubmit) {
        return (
            <form id="customForm" method="post" action={host + `api/course/Videoadd`}>
                <input type="hidden" name="token" value={cookies.get("token")} />
                <input type="hidden" name="chapter" value={this.state.chapterId} />
                <input type="hidden" name="free" value={this.state.free} />

                <div id='inputofuploadVideo'>
                    <div id='labelOfInputuploadVideo'>
                        <p>Name of Video</p>
                    </div>

                    <TextInput width='75%'
                        name="name"
                        placeholder="input name of video..."

                        onChange={(event) =>
                            this.setState({ addLecture: event.target.value })} />
                </div>

                <Heading size={400} marginLeft={32} width="90%" marginBottom={10} marginTop="default">
                    Choose File
            </Heading>

                <FilePicker marginLeft={32} width="90%" marginBottom={10} id="FilePicker"
                    onChange={files => console.log(files)}
                    display="none;" name="file" />
                <Heading size={400} marginLeft={32} marginBottom={10} marginTop="default">
                    Free ?
            </Heading>
                <Switch marginLeft={32} marginBottom={10}
                    onChange={() => this.chengeCheked()} />
                <Button appearance="primary" marginLeft={210} onClick={onSubmit}>
                    Upload File
            </Button>
            </form>
        );
    }

    formGetter() {
        return new FormData(document.getElementById("customForm"));
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
                                        <Component initialState={{ isShown: false }}>
                                            {({ state, setState }) => (
                                                <Pane>
                                                    <Dialog
                                                        isShown={state.isShown}
                                                        title="Dialog title"
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Edit Lecture"
                                                        onConfirm={() => {



                                                            let formData = new FormData();
                                                            var headers = { "Content-Type": "application/json", token: cookies.get("token") };
                                                            formData.append("title", this.state.editChapter);

                                                            axios({ url: host + "api/course/editchapter/" + this.state.lectures[index].chapter_id, method: "POST", data: formData, headers: headers })
                                                                .then(response => {
                                                                    if (response.status === 200) {
                                                                        window.location.reload();
                                                                        this.componentDidMount();
                                                                    }
                                                                })
                                                                .catch(function (error) { toaster.danger(error.message) });

                                                            setState({ isShown: false })
                                                        }}
                                                    >
                                                        <p>Chapter Name</p>
                                                        <TextInput width='100%' name="text-input-name"
                                                            placeholder="input chapter name..."
                                                            onChange={(event) => this.setState({ editChapter: event.target.value })}
                                                        />
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
                                                        title={'Upload File to ' + this.state.lectures[index].title}
                                                        onCloseComplete={() => setState({ isShown: false })}
                                                        confirmLabel="Upload"
                                                        onConfirm={() => {
                                                            this.uploadFile(this.props.match.params.id)
                                                            setState({ isShown: false })
                                                        }}
                                                    >
                                                        <p>File Name</p>
                                                        <TextInput width='100%' name="text-input-name"
                                                            placeholder="input name of file..."
                                                            onChange={(event) => this.setState({ nameFile: event.target.value })}
                                                        />
                                                        <p style={{ marginTop: 30 }}>Upload File</p>
                                                        <FilePicker
                                                            width='100%'
                                                            marginBottom={32}
                                                            onChange={files => { this.setState({ Uploadfile: files }) }}

                                                        />
                                                    </Dialog>

                                                    <Icon icon="folder-new" onClick={() => {
                                                        setState({ isShown: true })
                                                        this.setState({ chapterId: this.state.lectures[index].chapter_id })
                                                    }}
                                                        size={20} color="selected" marginRight={16} id='iconTrushAddlecture' />
                                                </Pane>
                                            )}
                                        </Component>

                                        <Link to={`/uploadvideo?chapter=${this.state.lectures[index].chapter_id}&course=${this.props.match.params.id}`}>
                                            <Icon icon="upload" onClick={() => {
                                                this.setState({
                                                    chapterId: this.state.lectures[index].chapter_id
                                                })

                                            }}
                                                size={20} color="selected" marginRight={16} id='iconTrushAddlecture' />
                                        </Link>
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
                                                            this.deleteLecture(this.state.lectures[index].chapter_id)
                                                            setState({  isShown: false})
                                                        }}
                                                    >
                                                        <center> <h4>Are You Sure You Want To Delete this Chapter</h4></center>

                                                    </Dialog>
                                                    <Icon icon="trash" onClick={() => { setState({ isShown: true }) }}
                                                        size={20} color="danger" marginRight={16} id='iconTrushAddlecture' />
                                                </Pane>
                                            )}
                                        </Component>


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
                                    <NavLink exact to='/Addcourses'>
                                        <div id='iconBack'>
                                            <Icon icon='arrow-left' size={30} color="white" />
                                        </div>
                                    </NavLink>
                                    <Component initialState={{ isShown: false }}>
                                        {({ state, setState }) => (
                                            <Pane>
                                                <Dialog onConfirm={() => {
                                                    this.addLecture()
                                                    setState({ isShown: false })
                                                }}
                                                    isShown={state.isShown}
                                                    title="Create Lecture"
                                                    onCloseComplete={() => setState({ isShown: false })}
                                                    confirmLabel="Add"

                                                >
                                                    <div id='inputofAddlecture'>
                                                        <div id='labelOfInputAddLecture'>
                                                            <p>Name of Lecture</p>
                                                        </div >
                                                        <TextInput width='75%' name="text-input-name"
                                                            placeholder="input name of leacture..."
                                                            onChange={(event) =>
                                                                this.setState({ addLecture: event.target.value, courseId: this.props.match.params.id })}
                                                        />
                                                    </div>
                                                </Dialog>

                                                <div id='AddLectureButtom'>
                                                    <Button onClick={() => setState({ isShown: true })}
                                                        appearance="primary" marginLeft={20} intent="danger">Add Lecture</Button>
                                                </div>
                                            </Pane>
                                        )}
                                    </Component>
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

export default AddLecture;