import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from 'Utils/asyncComponent';
import PrivateRoute from 'Components/PrivateRoute';

const Login = asyncComponent(() => import('Pages/Login'));
const Home = asyncComponent(() => import('Pages/Home'));

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        );
    }
    // <PrivateRoute path="/home" redirectPath="/" component={Home} />
}
  
export default App;