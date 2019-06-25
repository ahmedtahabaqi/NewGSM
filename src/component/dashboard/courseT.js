import React from 'react';
import { Row, Col, Navbar, Nav} from 'react-bootstrap';
import { Pane, Spinner} from 'evergreen-ui';
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

class CourseT extends React.Component {
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

        axios.get(host + `api/user/course/${this.props.match.params.id}`, { headers: { token: cookies.get('token') } })
            .then(response => { this.setState({ course: response.data  }) 
            console.log(response.data)
        })
            .catch((error) => { console.log('error ' + error); })
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
<Link to={`/AllCourseAdmin/${course._id}?userId=${this.props.match.params.id}`}>
                                                                            <div id='continerNewCard1'>

                                                                                <div id='continerNewCard2' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                                    <div id='headerNewCard'>
                                                                                        
                                                                                            <img alt="img" height="150" width="250" src={host + course.img} />
                                                                                       
                                                                                    </div>
                                                                                    <div id='divReduisCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}></div>
                                                                                </div>
                                                                                <div id='TitleNewCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                                   
                                                                                        <div  >{course.title}</div>
                                                                                    
                                                                                </div>
                                                                                <div id='BodyNewCard'>
                                                                                    <div id='BodyNewCardImg'>
                                                                                     
                                                                                            <div>
                                                                                                <pre id="CorsSubT" data-tip={course.sub_title}>{course.sub_title}</pre>
                                                                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy' />
                                                                                            </div>
                                                                                        
                                                                                    </div>
                                                                                    <div id='BodyNewCardAut' style={{ marginTop: '25px' }}>
                                                                                      
                                                                                    </div>
                                                                                    <div id='btnBuyNewCard'>

                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                            </Link>
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
export default CourseT;