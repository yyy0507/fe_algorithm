import React, {Component} from 'react';

import {Button} from 'antd';

import {Layout, Table, Divider, Popconfirm} from 'antd';

const {Content} = Layout;

import {handleAddProject} from '../../actions'
import {connect} from "react-redux";

import ModalProject from './modalProject'


const dataProject = [{
    key: '1',
    name: 'f_algo_captcha',
    desc: '验证码破解'
}, {
    key: '2',
    name: 'test2',
    desc: '机票价格数据导入HDFS'

}, {
    key: '3',
    name: 'test3',
    desc: '机票价格数据导入HDFS'
}];


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProject: dataProject
        }
        this.columns = [{
            title: '项目名称',
            dataIndex: 'name',  //这里要和data数据中定义的属性一样才会显示相关的数据
            key: 'name',  //？？？
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '项目说明',
            dataIndex: 'desc',
            key: 'desc',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelProject(record.key)}>
                        <a href="javascript:;">删除</a>
                    </Popconfirm>
                    <Divider type="vertical"/>
                    <span>修改</span>
                </div>
            ),
        }];
    }

        handleDelProject = (i) => {
            let newProject = [];
            this.state.dataProject.forEach((item) => {
                if (item.key !== i) {
                    newProject.push(item)
                }
            })
            this.setState({
                dataProject: newProject
            })
        }


    render() {
        const { handleAddProject } = this.props
        return (
            <div>
                <Layout>
                    <Content style={{padding: '0 50px'}}>
                        <div className='taskWrapper'>
                            <Button type="primary" onClick={() => handleAddProject()}>添加工程</Button>
                        </div>
                        <Table columns={this.columns} dataSource={this.state.dataProject}/>
                    </Content>
                </Layout>
                <ModalProject/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {
    handleAddProject
};


Project = connect(mapStateToProps, mapDispatchToProps)(Project)

export default Project