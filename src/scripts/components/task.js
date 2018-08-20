import React, {Component} from 'react';

import {Button} from 'antd';

import {Layout, Breadcrumb, Table, Divider, Tag} from 'antd';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import AddTask from './addTask'

const {Content} = Layout;


const columns = [{
    title: '任务名称',
    dataIndex: 'name',  //这里要和data数据中定义的属性一样才会显示相关的数据
    key: 'name',  //？？？
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '任务说明',
    dataIndex: 'desc',
    key: 'desc',
}, {
    title: '任务类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: 'watcher链接',
    dataIndex: 'link',
    key: 'link',
    render: text => <a href={text}>跳转</a>,
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'

}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <div>
            <span>删除</span>
            <Divider type="vertical"/>
            <span>停止</span>
        </div>
    ),
}];

const data = [{
    key: '1',
    name: '国际券购买',
    desc: '监控每天国际券的购买率',
    type: '特征监控',
    link: 'http://www.baidu.com',
    status: '成功'
}, {
    key: '2',
    name: '机票价格导入',
    desc: '机票价格数据导入HDFS',
    type: 'Flume监控',
    link: 'http://www.baidu.com',
    status: '停止'

}, {
    key: '3',
    name: '机票价格导入',
    desc: '机票价格数据导入HDFS',
    type: 'Flume监控',
    link: 'http://www.baidu.com',
    status: '停止'

}];


export default class Task extends Component {
    render() {
        return (
            <Router>
            <div>
                <Layout>
                    <Content style={{padding: '0 50px'}}>
                        <div className='taskWrapper'>
                            <div className='taskName'><Link to="/task/addTask">f_algo_captcha</Link></div>
                            <Button type="primary">增加任务</Button>
                        </div>
                        <Table columns={columns} dataSource={data}/>
                    </Content>
                </Layout>
                <Route path="/addTask" component={AddTask}/>
            </div>
            </Router>
        );
    }
}