import React, {Component} from 'react';


import { Modal,Layout,Tabs, Input } from 'antd';
const { Content } = Layout;
const TabPane = Tabs.TabPane;

import {connect} from "react-redux";

import {handleCancel,handleOk} from "../../actions";

class ModalProject extends Component {

    render() {
        const {projectModalShow, handleCancel,handleOk} = this.props;
        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Modal
                        title="工程信息"
                        visible={projectModalShow}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <div>工程名称<Input placeholder="工程名称" /></div>
                        <div>watcher路径<Input placeholder="watcher路径" /></div>
                    </Modal>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projectModalShow: state.projectModalShow,
    }
}
const mapDispatchToProps = {
    handleCancel,
    handleOk
};


ModalProject = connect(mapStateToProps, mapDispatchToProps)(ModalProject)

export default ModalProject