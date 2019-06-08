import React from 'react';
import { Icon, Pane, Dialog,Spinner } from 'evergreen-ui';
import { Collapse } from 'react-bootstrap';
import Component from "@reactions/component";
import Vimeo from '@u-wave/react-vimeo';
import Context from '../Context';
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();

class ContentCoursesPkg extends React.Component {
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
            spinner:true,
            price:[]
        };
    }
    changeRating(newRating, name) { this.setState({ rating: newRating }); }

    componentDidMount() {
        axios.get(host + `api/course/Course/` + this.props.match.params.id, { headers: {} })
            .then(response => {
                this.setState({ lectures: response.data })
                this.Html(response.data.length)
            })
            .catch((error) => { console.log('error ' + error); })

        axios.get(host + `api/course/CourseDetails/` + this.props.match.params.id, { headers: { token: cookies.get('token') } })
            .then(response => {
                this.setState({spinner:false})
                this.setState({ courseDetels: response.data[0],price: response.data[0].price[response.data[0].__v]})
                // console.log(response.data[0].price[response.data[0].__v]);
            })
            .catch((error) => { console.log('error ' + error); })
    }
    
    network(id) {
        axios.get(host + `api/course/Chapters/` + id,
            { headers: { token: cookies.get('token') } })
            .then(response => {
                let data = { [id]: response.data }
                let videos = [...this.state.videos2, data]
                this.setState({ videos: response.data, videos2: videos })
            })
            .catch((error) => { console.log('error ' + error); })
    }

    renderIcon = (_id, stat) => {
        if (stat) { return <Icon id='menuiconCourse' icon="minus" color="danger" size={30} /> }
        else { return <Icon id='menuiconCourse' icon="menu" color="info" size={30} /> }
    }

    Html(value) {
        let html = []
        for (let index = 0; index < value; index++) {
            html.push(
                <div key={this.state.lectures[index]._id} id='AddLectureContinerCourse'>
                    <Component initialState={{
                        ['open' + index]: false, videos: [],getFile:[]
                    }}>
                        {({ state, setState }) => (
                            <div id='plusContinerAddCourse'>
                                <div id='plusContiner1AddCourse' >

                                    <div id='menuAndTitleCourse'>
                                        <div onClick={() => {
                                                      axios.get(host + `api/course/ChaptersFiles/` + this.state.lectures[index]._id,
                                                      { headers: { token: cookies.get('token') } })
                                                      .then(response => {                                                                                                   
                                                          setState({
                                                              getFile: response.data,
                                                              ['open' + index]: !state['open' + index]
      
                                                          })
                                                      })
                                                      .catch((error) => {
                                                          console.log('error ' + error);
                                                      })

                                            axios.get(host + `api/course/Chapters/` + this.state.lectures[index]._id,
                                                { headers: { token: cookies.get('token') } })
                                                .then(response => {
                                                    setState({
                                                        videos: response.data,
                                                        ['open' + index]: !state['open' + index]
                                                    })
                                                })
                                                .catch((error) => {
                                                    console.log('error ' + error);
                                                })
                                        }
                                        } aria-controls="example-collapse-text" >
                                            {this.renderIcon(this.state.lectures[index]._id, state['open' + index])} {}
                                        </div>
                                        <span >{this.state.lectures[index].title}</span>
                                    </div>

                                </div>
                                <Collapse in={state['open' + index]}>
                                    <div id="example-collapse-text">
                                        {state.videos.map((video) =>
                                            <div key={video._id} id='showVideoContinerCourse'>
                                                <div id='iconVideoAndNameCourse'>
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
                                                                    <Vimeo
                                                                        video={video.VideoId}
                                                                        frameborder="0"
                                                                        width={525}
                                                                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                                                                        autoplay
                                                                    />

                                                                </Dialog>
                                                                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { setState({ isShown: true }) }}>
                                                                    <Icon icon="video" size={20} color="success" marginLeft={16} marginRight={16} />
                                                                    <p id='NameofVideoInLectureCourse'>{video.name}</p>
                                                                </div>
                                                            </Pane>
                                                        )}
                                                    </Component>

                                                </div>

                                            </div>
                                        )}
                                                      {state.getFile.map(filess=>
                                        <div key={filess._id} id='showVideoContiner'>
                                            <div id='iconVideoAndName' style={{ cursor: 'pointer' }}
                                            onClick={()=>{
                                                window.open(host+filess.url, '_blank');
                                            }}>
                                                <Icon icon="document"  size={20} color="info" marginRight={16} marginLeft={16}
                                                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} />
                                                <p id='NameofVideoInLecture'>{filess.name}</p>
                                            </div>
                                            <div>
                                        
                                               
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
                    if (!this.state.spinner){
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
                                          
                                            <span>{'Author: ' + this.state.courseDetels.userName}</span>
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
                else{
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

export default ContentCoursesPkg;