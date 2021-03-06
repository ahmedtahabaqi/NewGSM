import React from 'react';
import { Icon, Dialog, Button, Spinner, Pane } from 'evergreen-ui';
import { Collapse } from 'react-bootstrap';
import Component from "@reactions/component";
import Vimeo from '@u-wave/react-vimeo';
import Context from '../Context';
// import { Link } from 'react-router-dom'
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';
import axios from 'axios';
import host from '../Host';
import natsort from 'natsort'

class ContentCourses extends React.Component {
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
            courseId: '',
            nameVideo: '',
            chapter: '',
            video: [],
            chapterId: '',
            rating: 3.5,
            courseDetels: {},
            spinner: true,
            price: [],
            vidosSorted:[]
        };
    }
    componentDidMount() {

        axios.get(host + `api/course/Course/` + this.props.match.params.id, { headers: {} })
            .then(response => {
                let chapters=response.data.chapters;
               var sorter = natsort();
               chapters.sort(function(a, b) {
                return sorter(a.chapter_title, b.chapter_title);
                });
                // console.log(response.data)
                this.setState({
                    lectures: chapters,
                    spinner: false,
                    courseDetels: response.data.course,
                })
                this.Html(response.data.chapters.length)
            })
            .catch((error) => { console.log('error ' + error); })

    }


    sortVideo(index) {
        let videos = this.state.lectures[index].Data;
        var sorter = natsort();
        videos.sort(function (a, b) {
            return sorter(a.name, b.name);
        });
        this.setState({vidosSorted:videos})
    }
    renderIcon = (_id, stat) => {
        if (stat) { return <Icon id='menuiconCourse' icon="minus" color="danger" size={30} /> }
        else { return <Icon id='menuiconCourse' icon="menu" color="info" size={30} /> }
    }

    Html(value) {
        let html = []
        for (let index = 0; index < value; index++) {
            html.push(
                <div key={index} id='AddLectureContinerCourse'>
                    <Component initialState={{
                        ['open' + index]: false, videos: [], getFile: []
                    }}>
                        {({ state, setState }) => (
                            <div id='plusContinerAddCourse'>
                                <div id='plusContiner1AddCourse' >

                                    <div id='menuAndTitleCourse'>
                                        <div onClick={() => {
                                            this.sortVideo(index)
                                            setState({
                                                ['open' + index]: !state['open' + index]
                                            })
                                        }
                                        } aria-controls="example-collapse-text" >
                                            {this.renderIcon(this.state.lectures[index]._id, state['open' + index])} {}
                                        </div>
                                        <span >{this.state.lectures[index].chapter_title}</span>
                                    </div>

                                </div>
                                <Collapse in={state['open' + index]}>
                                    <div id="example-collapse-text">
                                        {this.state.vidosSorted.map((video) =>
                                            <div key={video._id}>
                                                <div id='showVideoContinerCourse' style={video.type === "video" ? {} : { display: "none" }} >

                                                    <div id='iconVideoAndNameCourse' >
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
                                                                        <div  >
                                                                            <Vimeo
                                                                                video={video.VideoId}
                                                                                frameborder="0"
                                                                                width={525}
                                                                                webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                                                autoplay
                                                                            />
                                                                        </div>


                                                                    </Dialog>
                                                                    {video.free ? (
                                                                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { setState({ isShown: true }) }}>
                                                                            <Icon icon="video" size={20} color="success" marginLeft={16} marginRight={16} />
                                                                            <p id='NameofVideoInLectureCourse'>{video.name}</p>
                                                                        </div>
                                                                    ) : (
                                                                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} >
                                                                                <Icon icon="video" size={20} color="muted" marginLeft={16} marginRight={16} />
                                                                                <p id='NameofVideoInLectureCourse'>{video.name}</p>
                                                                            </div>
                                                                        )}

                                                                </Pane>
                                                            )}
                                                        </Component>

                                                    </div>

                                                </div>
                                                <div style={video.type === "file"

                                                    ? {}
                                                    : { display: "none" }} id='showVideoContiner'>
                                                    {video.free ? (
                                                        <div id='iconVideoAndName' style={{ cursor: 'pointer' }}
                                                            onClick={() => {
                                                                window.open(host + video.url, '_blank');
                                                            }}>
                                                            <Icon icon="document" size={20} color="info" marginRight={16} marginLeft={16}
                                                                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} />
                                                            <p id='NameofVideoInLecture'>{video.name}</p>
                                                        </div>
                                                    ) : (
                                                            <div id='iconVideoAndName' style={{ cursor: 'pointer' }}>
                                                                <Icon icon="document" size={20} color="muted" marginRight={16} marginLeft={16}
                                                                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} />
                                                                <p id='NameofVideoInLecture'>{video.name}</p>
                                                            </div>
                                                        )}
                                                </div>

                                            </div>
                                        )}

                                    </div>
                                </Collapse>
                            </div>
                        )}
                    </Component>

                </div>

            )

        }

        this.displayDataAdt = html;
        this.setState({ Adtdata: this.displayDataAdt });


    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    if (!this.state.spinner) {
                        return (
                            <React.Fragment>
                                <div id='contentUpFooter'>
                                    <NavbarAllPage />
                                    <div id='titleCourseContiner'>
                                        <div id='titleCourseContiner1'>
                                            <h2 id='titleCourse'>
                                                {this.state.courseDetels.title}
                                            </h2>
                                            <p id='descripCourse'>{this.state.courseDetels.body} </p>
                                            <div className='rating'>

                                                <span>{'Author: ' + this.state.courseDetels.user.name}</span>
                                            </div>
                                            <div id='byNowContiner'>
                                                <Component initialState={{ isShown: false }}>
                                                    {({ state, setState }) => (
                                                        <Pane>
                                                            <Dialog
                                                                isShown={state.isShown}
                                                                title="Buy Now"
                                                                onCloseComplete={() => setState({ isShown: false })}
                                                                hasFooter={false}
                                                            >
                                                                <div id='dialogBayNow'>
                                                                    <p>To purchase this course and for more informations please, contact us on</p>
                                                                    <p>What'sapp +964 0773 504 4810 </p>
                                                                    <p>Or email us at <span style={{ color: '#32dbc6' }}>gsm.med.edu@gmail.com</span></p>
                                                                </div>
                                                                <div id='LineDialog' />
                                                                <div id='dialogBayNow'>
                                                                    <p>لشراء هذه الدوره التدريبيه ولمعلومات اخرى يرجى التواصل على</p>
                                                                    <p>+964 0773 504 4810 <span>الواتساب</span></p>
                                                                    <p><span style={{ color: '#32dbc6' }}>gsm.med.edu@gmail.com</span> او التواصل على الايميل التالي</p>
                                                                </div>
                                                            </Dialog>
                                                            <Button size={400} appearance="primary" intent="danger"
                                                                onClick={() => setState({ isShown: true })} > Buy Now</Button>

                                                        </Pane>
                                                    )}
                                                </Component>
                                                {/* <div id='orginalPrice'>{this.state.courseDetels.__v + ' $'}</div> */}
                                                <div id='priceNow'>{this.state.courseDetels.price[this.state.courseDetels.__v] + ' $'}</div>
                                            </div>

                                        </div>
                                        <div id='imgCardCourseContiner' > <img id='imgCardCourse' src={host + this.state.courseDetels.img} alt="img" /></div>

                                    </div>
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
                }

                }
            </Context.Consumer>

        )
    }
}

export default ContentCourses;