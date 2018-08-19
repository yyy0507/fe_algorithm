import React, {Component} from 'react';

import { Button } from 'antd';

import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

import Navigation  from './navigation';


export default class Task extends Component {
    render() {
        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <div className='taskWrapper'>Content</div>
                </Content>
            </Layout>
        );
    }
}

