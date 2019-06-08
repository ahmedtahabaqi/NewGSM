import React from 'react';
import Component from "@reactions/component";
import { Button } from 'evergreen-ui';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import ReactTooltip from 'react-tooltip';
class ContentAllCourses extends React.Component {
  constructor() {
    super()
    this.state = {
      rating: 3.5,
      course: [],
      category: [],
      colors: [' #bce9aa, #20b2aa', '#6e99d6, #b22222', '#ffeb78, #4edeff', '#ea92e0, #ff892a']
    }




  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category === 'all') {
      axios.get(host + `api/course`, { headers: {} })
        .then(response => {

          this.setState({
            course: response.data
          })


        })
        .catch((error) => { console.log('error ' + error) })
    } else {
      axios.get(host + `api/course`, { headers: {} })
        .then(response => {
          const course = response.data.filter(sort => sort.category === category);
          // console.log(course)
          this.setState({
            course: course
          })


        })
        .catch((error) => { console.log('error ' + error) })

    }

  }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
  }
  render() {
    return (
      <div>

        <Row style={{ margin: 0, padding: 0 }}>
          {this.state.course.map(cors =>
            <Col key={cors._id} id="col1" style={{ margin: 0, marginTop: 50,marginBottom:50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
              <div id='continerNewCard'>
                <Component initialState={{ color1: Math.floor(Math.random() * 3) }}>
                  {({ state, setState }) => (
                    <div id='MaincontinerNewCard'>
                      <Link to={`/courses/${cors._id}`}>
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

                            <div id='btnBuyNewCard'>

                              <Button marginRight={16} intent="danger"> Buy Now</Button>
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
    )
  }
}
export default ContentAllCourses;