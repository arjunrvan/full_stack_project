import * as type from '../types';

const defaultState = {
    isLoading: false,
    name: '',
    id: 0,
    token: '',
    is_admin: false,
    error: ''
}

const userReducer = (state = defaultState, action) => {

    switch(action.type) {
        case type.LOGIN:
            return state = {
                isLoading: true,
                name: '',
                id: 0,
                token: '',
                is_admin: false,
                error: ''
            }
        case type.LOGIN_SUCCESSFUL:
            return state = {
                isLoading: false,
                name: action.payload.name,
                id: action.payload.id,
                token: action.payload.token,
                is_admin: action.payload.is_admin,
                error: ''
            };
        case type.LOGIN_FAIL:
            return state = {
                isLoading: false,
                name: '',
                id: 0,
                token: '',
                is_admin: false,
                error: action.payload,
            }

        case type.LOGOUT:
            return state = {
                isLoading: true,
                name: state.name,
                id: state.id,
                token: state.token,
                is_admin: state.is_admin,
                error: ''
            }
        case type.LOGOUT_SUCCESSFUL:
            return state = {
                isLoading: false,
                name: '',
                id: 0,
                token: '',
                is_admin: false,
                error: ''
            };
        case type.CLEAR_LOGIN_ERROR:
            return state = {
                isLoading: false,
                name: state.name,
                id: state.id,
                token: state.token,
                is_admin: state.is_admin,
                error: ''
            };
        default:
            return state;
    }
};

export default userReducer;