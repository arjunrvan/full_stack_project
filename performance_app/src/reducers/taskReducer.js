import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: []
}

const taskReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.ADD_TASK:
            return state = {
                isLoading: true,
                data: [...state.data],
            }
        case type.ADD_TASK_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: [...state.data],
            };
        case type.ADD_TASK_FAIL:
            return state = {
                isLoading: false,
                data: [...state.data],
            }
        case type.FETCH_TASKS:
            return state = {
                isLoading: true,
                data: [],
            }
        case type.FETCH_TASKS_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: action.payload,
            };
        case type.FETCH_TASKS_FAIL:
            return state = {
                isLoading: false,
                data: [],
            }
        case type.DELETE_TASK:
            return state = {
                isLoading: true,
                data: [...state.data],
            }
        case type.DELETE_TASK_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: [...state.data],
            };
        case type.DELETE_TASK_FAIL:
            return state = {
                isLoading: false,
                data: [...state.data],
            }

        case type.UPDATE_TASK:
            return state = {
                isLoading: true,
                data: [...state.data],
            }
        case type.UPDATE_TASK_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: [...state.data],
            };
        case type.UPDATE_TASK_FAIL:
            return state = {
                isLoading: false,
                data: [...state.data],
            }
        default:
            return state;
    }
}

export default taskReducer;