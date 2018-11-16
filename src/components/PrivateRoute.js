import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

//私有路由，只有登录的用户才能访问
class PrivateRoute extends Component{

    componentWillMount(){
        // let isAuthenticated = localStorage.getItem('token') ? true :false;
        let isAuthenticated = false;
        this.setState({ isAuthenticated: isAuthenticated });

        if(!isAuthenticated){
            let { history } = this.props;
            setTimeout(() => { history.replace('/') }, 1000);
        }

    }

    render(){
        let { component: Component, path="/", exact = false, strict = false, redirectPath } = this.props;
        return this.state.isAuthenticated ?
            <Route path={path} exact={exact} strict={strict} render={(props)=>( <Component {...props} /> )} /> :
            <Redirect to={{ pathname: redirectPath }}/>
    }

}

PrivateRoute.propTypes  ={
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
    component: PropTypes.func.isRequired
}

export default withRouter(PrivateRoute);