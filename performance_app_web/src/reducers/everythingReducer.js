import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
}

const everythingReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.FETCH_EVERYTHING:
            return state = {
                isLoading: true,
                data: [],
            }
        case type.FETCH_EVERYTHING_SUCCESSFUL:
            return state = {
                isLoading: false,
                data: action.payload,
            }
        case type.FETCH_EVERYTHING_FAIL:
            return state = {
                isLoading: false,
                data: [...state.data],
            }
        default:
            return state;
    }
};

export default everythingReducer;