import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Component from "@reactions/component";
import { Button,Spinner, Pane  } from 'evergreen-ui';
import Context from '../Context';
import FooterAllPage from '../common/footerAllPage';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage';
import ReactTooltip from 'react-tooltip';

class ShowGold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coursePackge: [],
            packageContent: [],
            id: this.props.match.params.id,
            spinner:true,
            colors: [' #bce9aa, #20b2aa', '#6e99d6, #b22222', '#ffeb78, #4edeff', '#ea92e0, #ff892a']
        };
    }

    componentDidMount() {
       
        axios.get(host + `api/packege/Course/` + this.state.id, { headers: {} })
            .then(response => {
                this.setState({spinner:false,
                    packageContent: response.data[0].Package
                    , coursePackge: response.data
                })
                

            })
            .catch((error) => { console.log('error ' + error) })
    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    if (!this.state.spinner){
                    return (
                        <div >
                            <div id='contentUpFooter'>
                                <NavbarAllPage />
                                <div id='titleCourseContinerShowG'>
                                    <div id='titleCourseContiner1'>
                                        <h2 id='titleCourse'>
                                            {this.state.packageContent.Title}
                                        </h2>
                                        <p id='descripCourse'> {this.state.packageContent.body} </p>

                                        <div id='byNowContiner'>
                                            <Button size={300} appearance="primary" intent="danger" > By Now</Button>

                                            <div id='priceNow'>{this.state.packageContent.Price + ' $'}</div>
                                        </div>

                                    </div>


                                </div>

                                <Row style={{ margin: 0, padding: 0 }}>
                                    {this.state.coursePackge.map(coursePackge =>
                                        <Col key={coursePackge._id} id="col1" style={{ margin: 0, marginTop: 50, marginBottom: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
                                            <div id='continerNewCard'>
                                                <Component initialState={{ color1: Math.floor(Math.random() * 3) }}>
                                                    {({ state, setState }) => (
                                                        <div id='MaincontinerNewCard'>
                                                            <Link to={`/coursesPackeg/${coursePackge.course._id}`}>
                                                                <div id='continerNewCard1'>

                                                                    <div id='continerNewCard2' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                                                                        <div id='headerNewCard'>
                                                                            <img alt="img" height="150" width="250" src={host + coursePackge.course.img} />
                                                                        </div>
                                                                        <div id='divReduisCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}></div>
                                                                    </div>
                                                                    <div id='TitleNewCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>{coursePackge.course.title}</div>
                                                                    <div id='BodyNewCard'>
                                                                        <div id='BodyNewCardImg'>
                                                                            <div>
                                                                                <pre id="CorsSubT" data-tip={coursePackge.course.sub_title}>{coursePackge.course.sub_title}</pre>
                                                                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy' />
                                                                            </div>
                                                                        </div>
                                                                        <div id='BodyNewCardAut'>
                                                                            <img id='authCardImg' src={host + coursePackge.course.userImg} alt='img'></img>
                                                                            <div id='authCardTitle'>
                                                                                <p>Author :<br />
                                                                                    {coursePackge.course.userName}</p>
                                                                            </div>
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
                            <FooterAllPage />

                        </div>
                    )
                }
                else{
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
export default ShowGold;