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
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/project">工程管理</Link></li>
                    </ul>
                </Header>
            </Layout>
        );
    }
}

