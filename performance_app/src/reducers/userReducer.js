import * as type from '../types';

const defaultState = {
    isLoading: false,
    name: '',
    id: 0,
    token: '',
}

const userReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.LOGIN:
            return state = {
                isLoading: true,
                name: '',
                id: 0,
                token: '',
            }
        case type.LOGIN_SUCCESSFUL:
            return state = {
                isLoading: false,
                name: action.payload.name,
                id: action.payload.id,
                token: action.payload.token,
            };
        case type.LOGIN_FAIL:
            return state = {
                isLoading: false,
                name: '',
                id: 0,
                token: '',
            }

        case type.LOGOUT:
            return state = {
                isLoading: true,
                name: state.name,
                id: state.id,
                token: state.token,
            }
        case type.LOGOUT_SUCCESSFUL:
            return state = {
                isLoading: false,
                name: '',
                id: 0,
                token: '',
            };
        default:
            return state;
    }
};

export default userReducer;