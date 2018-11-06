import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from 'Utils/asyncComponent';

const Login = asyncComponent(() => import('Pages/Login'));

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Router>
        );
    }

}
  
export default App;