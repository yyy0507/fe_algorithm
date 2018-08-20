import type from '../constant/type.js';

const { ADD_TASK, HANDLE_STATUS, HANDLE_DEL_TASK, ADD_PROJECT } = type;


const handleAddProject = () => ({
    type: 'ADD_PROJECT',
    payload: {
        addProject: true
    }
})
//增加任务
const handleAddTask = () => ({
    type: 'ADD_TASK',
    payload: {
        addShow: true
    }
})


//改变状态
const handleStatus = () => ({
    type: 'HANDLE_STATUS',
    payload: {

    }
})


//删除任务

const handleDelTask = (key) => ({
    type: 'HANDLE_DEL_TASK',
    payload: {
        taskKey: key
    }
})

const handleCancel = () => ({
    type: 'HANDLE_CANCEL',
    payload: {

    }
})

const handleOk = () => ({
    type: 'HANDLE_OK',
    payload: {

    }
})
export { handleAddTask, handleStatus, handleDelTask, handleCancel, handleOk, handleAddProject }