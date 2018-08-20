//reducer.js

import type from '../constant/type.js';

const { ADD_TASK, HANDLE_STATUS, HANDLE_DEL_TASK, HANDLE_CANCEL, HANDLE_OK,ADD_PROJECT } = type;

import {dataTask, dataFeature} from '../constant'

const initialState = {
    taskModalShow: false,
    dataTask,
    taskKey: '',
    dataFeature,
    projectModalShow: false
}

const activeReducer = (state = initialState, action) => {
    const {type, payload} = action;
    const { addShow, taskKey, addProject } = payload || {};
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                taskModalShow: !state.taskModalShow
            };
        case HANDLE_STATUS:
            return {
                ...state
            };
        case HANDLE_DEL_TASK:
            return {
                ...state,
                dataTask: dataTask.filter(item => item.key !== taskKey),
                taskKey: taskKey
            }
        case HANDLE_CANCEL:
            return {
                ...state,
                taskModalShow: false,
                projectModalShow: false
            }
        case HANDLE_OK:
            return {
                ...state,
                taskModalShow: false,
                projectModalShow: false
            }
        case ADD_PROJECT:
            return {
                ...state,
                projectModalShow: !state.projectModalShow
            }
        default :
            return state;
    }

}
export default activeReducer







