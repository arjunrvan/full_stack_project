import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    count: [],
}

const employeeReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.FETCH_EMPLOYEES:
            return state = {
                isLoading: true,
                data: [],
                count: [],
            }
        case type.FETCH_EMPLOYEES_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: action.payload.employee,
                count: action.payload.count,
            }
        case type.FETCH_EMPLOYEES_FAIL:
            return state = {
                isLoading: false,
                data: [...state.data],
                count: [...state.count],
            }
        default:
            return state;
    }
};

export default employeeReducer;