import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    employee: {}
}

const taskReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.FETCH_TASKS:
            return state = {
                isLoading: true,
                data: [],
                employee: {}
            }
        case type.FETCH_TASKS_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: action.payload.tasks,
                employee: action.payload.employee,
            };
        case type.FETCH_TASKS_FAIL:
            return state = {
                isLoading: false,
                data: [],
                employee: {}
            }
        default:
            return state;
    }
}

export default taskReducer;