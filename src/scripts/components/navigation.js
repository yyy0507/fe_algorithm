import React, {Component} from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/task">Task</Link></li>
                    </ul>
                </Header>
            </Layout>
        );
    }
}

