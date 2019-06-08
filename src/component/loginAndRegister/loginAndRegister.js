import React, { Component } from 'react';
import Context from '../Context';
import LoginTecher from './loginTecher';
import Login from  './loginUser';
import RegisterUser from './registerUser';
import { Route } from 'react-router-dom';

class RegisterAndLogin extends Component {
    render() {
        return (<Context.Consumer>
            {ctx => {
                return (
                    <div>
                        
                        <Route path='/logintecher' component={LoginTecher}/>
                        <Route path='/loginuser' component={Login}/>
                        <Route path='/registeruser' component={RegisterUser}/>

                    </div>
                )
            }}
        </Context.Consumer>
        )
    }
}
export default RegisterAndLogin;