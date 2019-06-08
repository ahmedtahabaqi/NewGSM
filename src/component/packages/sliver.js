import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Context from '../Context';
import FooterAllPage from '../common/footerAllPage';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from '../Host';
import NavbarAllPage from '../common/navbarAllPage'



class Silver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: [],

        };
    }


    componentDidMount() {


        axios.get(host + `api/packege/`, { headers: {} })
            .then(response => {
                this.setState({ packages: response.data })
                // console.log(response.data);
            })
            .catch((error) => { console.log('error ' + error) })
    }
    filterPackage() {
        var arr = []
        var packages =this.state.packages
        for (let i = 0; i < packages.length; i++) {
            if (packages[i].tire === 'sliver') {
                arr.push(
                    <Col key={packages[i]._id} id="col1" style={{ margin: 0, marginTop: 50, padding: 0 }} xs={12} sm={6} md={4} lg={3} xl={3} >
                    <Link to={'/Showsilver/' + packages[i]._id} >
                        <div id='allcardContiner'>
                            <div id='allcardpackage'>
                                <div id='imagecardpackageS'>
                                <p>Silver</p>
                                </div>
                                <div id='allcardcontentpackage'>
                                    <div>
                                        <h2>{packages[i].Title}</h2>
                                        <p>{packages[i].body} </p>
                                    </div>
                                    <div id='pricepackage' >{packages[i].Price + ' $'}</div>
                                </div>

                            </div>
                        </div>
                    </Link>
                </Col>
                )
            }
        }
        if(arr.length>0)
        {
            return(arr)
        }
    }


    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div >
                            <div id='contentUpFooter'>
                                <NavbarAllPage />
                                <div id='hederSilver'>
                                    <h1>Silver Package</h1>
                                </div>
                                <Row style={{ margin: 0, padding: 0 }}>
                          {this.filterPackage()}
                          </Row>
                            </div>
                            <FooterAllPage />
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Silver;