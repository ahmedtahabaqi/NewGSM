import React, { Component } from 'react';
import Context from '../Context';
import { Navbar, Nav, ProgressBar} from 'react-bootstrap';
import { Button, Icon, TextInput, FilePicker, Heading, Switch ,IconButton} from 'evergreen-ui';
import AvatarAndEdit from '../common/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import host from '../Host';

const cookies = new Cookies();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();


class Upload extends Component {
    constructor(props) {
        super(props);
        this.displayDataAdt = [];
        this.state = {
           
            free: "false",
            percent:0,
            files:[],
            addLecture:'',
            stats:'info',
            message:''
        }
    }
    chengeCheked = () => {
        if (this.state.free === "false") {
            this.setState({ free: 'true' })
        }
        else {
            this.setState({ free: 'false' })
        }
    }

    addVideo(value){

        if (value==='stop') {
            return -1
        }
        const urlParams = new URLSearchParams(window.location.search);
        const chapter = urlParams.get('chapter');
        const course = urlParams.get('course');
      document.getElementById('progeDiv').style.display='flex';
            this.setState({ percent: 0 });
            
            let data = new FormData();
               
            data.append('file', this.state.files[0]);
            data.append('name', this.state.addLecture);
            data.append('free', this.state.free);
            data.append('chapter', chapter);
            data.append('course', course);
            data.append('token', cookies.get("token"));
            
        
            const url =  host+`api/course/Videoadd`;
        
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: progressEvent => {
                  var percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                  if (percent >= 100) {
                    this.setState({ 
                        percent: 100 ,
                        stats:'success'});
                    
                  } else {
                    this.setState({ percent,  stats:'info',message:"Uploding "+this.state.percent+" %" });
                  }
                }
              };
          
              const that = this;
              axios.post(url, data, config,{ cancelToken: source.token})
                .then(function(response) {
                  that.setState({
                    message:'Video has been uploaded '
                  })
                  document.getElementById('message').style.color="#28a745"
                  document.getElementById('doneBtn').style.display="inline-block"
                  document.getElementById('doneBtn2').style.display=" inline-block";

                  
                })
                .catch(function(error) {
                  console.log(error);
                  that.setState({ percent: 0 ,stats:'danger'});
                  that.setState({
                    message:'Oops Something Wrong',
                    
                  })
                  document.getElementById('message').style.color="#ef4a2d"
                  document.getElementById('uplodeBtn').style.display="block"
                });
          
        }

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const course = urlParams.get('course');
             return (
            <Context.Consumer>
                {ctx => {

                    return (
                        <div >
                              <Navbar id='collapsAddCourse' collapseOnSelect expand="lg" variant="light" >
                                    <Navbar.Brand href="/">
                                        <img style={{ width: '70px' }} src={require('../../assets/logo.png')} alt="img" />
                                    </Navbar.Brand>
                                    <Nav className="mr-auto">
                                    </Nav>
                                    <AvatarAndEdit />
                                </Navbar>
                                <Link 

                                to={'/addlecture/'+course} >
                                <div id='iconBack'>
                                        <Icon icon='arrow-left' size={30} color="white" />
                                    </div>
                                    </Link>
                                <div id='uploadContiner1'>
                            <div id='uploadContiner'>
                                <div id='labelOfInputAddLecture'>
                                    <p id='titlevideoupload'>Name of video</p>
                                </div >
                                <TextInput id='videouploadiname'  name="text-input-name"
                                    placeholder="input name of video..."
                                    onChange={(event) =>
                                        this.setState({ addLecture: event.target.value, courseId: this.props.match.params.id })}
                                />
                                <p id='titlevideoupload1'>Upload video</p>
                                <FilePicker id='videouploadfile'
                                    width={250}
                                    marginBottom={32}
                                    onChange={files => { 
                                        this.setState({ files: files }) 
                                        document.getElementById('uplodeBtn').style.display="block";
                                        document.getElementById('doneBtn').style.display="none";
                                        document.getElementById('doneBtn2').style.display="none";
                                        
                                        
                                    }}

                                />
                                <Heading size={400} marginLeft={30} marginBottom={10} >
                                     Free ?
                                </Heading>
                                <Switch marginLeft={30} marginBottom={10}
                                    onChange={() => this.chengeCheked()} 
                                />
                                
                                <div>
                                <center> <h6 id="message">{this.state.message}</h6></center> 

                                </div>
                                    <div id="progeDiv">
                                    <ProgressBar variant={this.state.stats} animated  id='progressbarUpload' now={this.state.percent} label={`${this.state.percent}%`} />
                                    
                                    <IconButton intent="danger" icon="cross" height={30} onClick={()=>{
                              window.location.reload(1);


                           }}/>

                                    </div>
                                
                             <center> <Button marginBottom={20} id="uplodeBtn"  appearance="primary" iconAfter="cloud-upload"  onClick={()=>{
                                  this.addVideo()
                                  document.getElementById('uplodeBtn').style.display="none"
                             }}>Upload</Button></center>  
                             <center> 

                                 <Button marginBottom={20}  id="doneBtn" style={{display:'none'}} appearance="primary"   intent="success" iconAfter="cloud-upload"  onClick={()=>{
                                   window.location.href = '/addlecture/'+course;
                             }}>DONE</Button> 
                             <Button marginLeft={10} marginBottom={20} id="doneBtn2" style={{display:'none'}}  appearance="primary" iconAfter="cloud-upload"  onClick={()=>{
                              window.location.reload(1);


                                document.getElementById('uplodeBtn').style.display="none"
                           }}>Upload Other Vider</Button></center> 

                            </div>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default Upload;
