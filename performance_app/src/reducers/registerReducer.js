import * as type from '../types';

const defaultState = {
    isLoading: false,
}

const registerReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.REGISTER:
            return state = {
                isLoading: true,
            }
        case type.REGISTER_SUCCESSFUL:
            return state = {
                isLoading: false,
            };
        case type.REGISTER_FAIL:
            return state = {
                isLoading: false,
            }
        default:
            return state;
    }
};

export default registerReducer;