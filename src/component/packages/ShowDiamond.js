import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Component from "@reactions/component";
import { Button,Spinner, Pane ,Dialog } from 'evergreen-ui';
import Context from '../Context';
import FooterAllPage from '../common/footerAllPage';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage';
import ReactTooltip from 'react-tooltip';

class ShowDiamond extends React.Component {
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
                console.log(response.data)
                
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
                                <div id='titleCourseContinerShowD'>
                                    <div id='titleCourseContiner1'>
                                        <h2 id='titleCourse'>
                                            {this.state.packageContent.Title}
                                        </h2>
                                        <p id='descripCourse'> {this.state.packageContent.body} </p>

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

                                            <div id='priceNow'>{this.state.packageContent.Price + ' $'}</div>
                                        </div>

                                    </div>

                                </div>

                                <Row style={{ margin: 0, padding: 0 }}>
                                    {this.state.coursePackge.map(coursePackge =>
                                        <Col key={coursePackge.course._id} id="col1" style={{ margin: 0, marginTop: 50, marginBottom: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
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
                                                                            
                                                                            <div id='authCardTitle1'>
                                                                                <p>Author : {coursePackge.course.user.name}</p>
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
export default ShowDiamond;