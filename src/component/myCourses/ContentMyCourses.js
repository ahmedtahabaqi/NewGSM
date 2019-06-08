import React from 'react';
import NavbarAllPage from '../common/navbarAllPage';
import FooterAllPage from '../common/footerAllPage';
// import Component from "@reactions/component";
// import { Button } from 'evergreen-ui';
// import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import ReactTooltip from 'react-tooltip';
import Cookies from "universal-cookie";
import host from '../Host';
const cookies = new Cookies();
const headers = { "Content-Type": "application/json", token: cookies.get("tokenUser") };
class ContentMyCourses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myCourse:[],
      colors: [' #bce9aa, #20b2aa', '#6e99d6, #b22222', '#ffeb78, #4edeff', '#ea92e0, #ff892a']
    }
  }
  componentDidMount(){

    axios.get(host + `api/Buyed/mycourses/?`, { headers: headers })
      .then(response => {
        console.log(response.data);
        this.setState({ myCourse: response.data })
      })
      .catch((error) => { console.log('error ' + error) })
  }
  render() {
    return (
      <div>
        <div id='contentUpFooter'>
          <NavbarAllPage />
{/* 
          <Row style={{ margin: 0, padding: 0 }}>
          {this.state.myCourse.map(cors =>
            <Col key={cors._id} id="col1" style={{ margin: 0, marginTop: 50,marginBottom:50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
              <div id='continerNewCard'>
                <Component initialState={{ color1: Math.floor(Math.random() * 3) }}>
                  {({ state, setState }) => (
                    <div id='MaincontinerNewCard'>
                      <Link to={`/mycoursesChapter/${cors._id}`}>
                        <div id='continerNewCard1'>

                          <div id='continerNewCard2' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>
                            <div id='headerNewCard'>
                              <img alt="img" height="150" width="250" src={host + cors.img} />
                            </div>
                            <div id='divReduisCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}></div>
                          </div>
                          <div id='TitleNewCard' style={{ background: `linear-gradient(to right , ${this.state.colors[state.color1]})` }}>{cors.title}</div>
                          <div id='BodyNewCard'>
                            <div id='BodyNewCardImg'>
                              <div>
                                <pre id="CorsSubT" data-tip={cors.sub_title}>{cors.sub_title}</pre>
                                <ReactTooltip place={'bottom'} type={'info'} border={true} className='yyy' />
                              </div>
                            </div>
                            <div id='BodyNewCardAut'>
                              <img id='authCardImg' src={host + cors.userImg} alt='img'></img>
                              <div id='authCardTitle'>
                                <p>Author :<br />
                                  {cors.userName}</p>
                              </div>
                            </div>

                            <div id='btnBuyNewCardPrice'>{cors.price[cors.__v]} $</div>

                            

                          </div>

                        </div>

                      </Link>
                    </div>
                  )}
                </Component>
              </div>
              
            </Col>
          )}
        </Row> */}

        </div>
        <FooterAllPage />

      </div>
    )
  }
}
export default ContentMyCourses;