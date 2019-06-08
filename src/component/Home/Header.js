import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import Context from '../Context';
import axios from 'axios';
import host from '../Host';
import ContentHome from './content';
import FooterHome from './Footer';
import NavbarAllPage from '../common/navbarAllPage';

class HeaderHome extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 3.5,
            category: [],
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })
    }
    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div >
                            <NavbarAllPage />
                            <div id='continer_header'>
                                <img id='homeImage' src={require('../../assets/homeimage.jpg')} alt="img" />
                                <div id='searchHome'>
                                    <InputGroup id="SearchInputGroup">
                                       <FormControl id='searchHome1' placeholder='Search' aria-describedby="basic-addon1" />
                                       <img height="25" style={{marginLeft:-30,zIndex:99,marginTop:3}} src={require('../../assets/search.png')} alt="img" />
                                    </InputGroup>

                                </div>
                                <div id='gifHomePageCOntiner'>
                                <img id='gifhomeImage' src={require('../../assets/gif done.gif')} alt="img" />
                                </div>

                            </div>


                            <ContentHome />
                            <FooterHome />

                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default HeaderHome;
