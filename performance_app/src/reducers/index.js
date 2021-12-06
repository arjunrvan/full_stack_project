import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers ({
    user: userReducer,
    register: registerReducer,
    task: taskReducer,
})

export default rootReducer;