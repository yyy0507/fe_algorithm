import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation'

import Task from './components/task'
import Home from './components/home'
import AddTask from './components/addTask'
import Project from './components/project'

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import {Layout, Menu} from 'antd';

const {Header} = Layout;

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import activeReducer from '../reducer'
import thunk from 'redux-thunk'

const store = createStore(activeReducer, applyMiddleware(thunk))

class App extends React.Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div>
                        <Navigation/>
                        <hr/>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/project" component={Project}>
                        </Route>
                    </div>
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App name="Ykit-Starter-Antd"/>, document.getElementById('app')
);

