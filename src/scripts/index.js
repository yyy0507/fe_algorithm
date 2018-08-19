import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation'

import Task from './components/task'
import Home from './components/home'

// import {Router, Route } from 'react-router'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import {Layout, Menu} from 'antd';

const {Header} = Layout;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/task" component={Task}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App name="Ykit-Starter-Antd"/>, document.getElementById('app')
);

