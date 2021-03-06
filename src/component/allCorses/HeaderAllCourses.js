import React, { Component } from 'react';
import Context from '../Context';
import axios from 'axios';
import NavbarAllPage from '../common/navbarAllPage'
import host from '../Host';
import ContentAllCourses from './ContentAllCourses'
import FooterAllPage from '../common/footerAllPage';

class HeaderAllCourses extends Component {
    constructor() {
        super()
        this.state = {
            category: [],
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { this.setState({ category: response.data }) })
            .catch((error) => { console.log('error ' + error) })
    }

    render() {
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div>
                        <div id='contentUpFooter'>
                            <NavbarAllPage />
                            <ContentAllCourses />
                        </div>
                        <FooterAllPage />
                    </div>
                )
            }}
        </Context.Consumer>
        )
    }
}
export default HeaderAllCourses;