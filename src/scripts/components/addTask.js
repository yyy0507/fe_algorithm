import React, {Component} from 'react';

import { Button } from 'antd';

import { Layout } from 'antd';

const { Content } = Layout;


export default class AddTask extends Component {
    render() {
        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <div className='taskWrapper'>addTask</div>
                </Content>
            </Layout>
        );
    }
}

