import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from './components/login'
import Register from './components/register'
import Home from './components/home'

type Props = {};
export default class Routes extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={Login} initial={true}/>
                    <Scene key='home' component={Home}/>
                    <Scene key='register' component={Register}/>
                </Scene>
            </Router>
        );
    }
}
