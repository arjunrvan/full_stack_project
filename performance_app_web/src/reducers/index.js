import userReducer from './userReducer';
import { combineReducers } from "redux";
import employeeReducer from './employeeReducer';
import taskReducer from './taskReducer';
import everythingReducer from './everythingReducer';

const rootReducer = combineReducers ({
    user: userReducer,
    employees: employeeReducer,
    tasks: taskReducer,
    everything: everythingReducer,
})

export default rootReducer;

