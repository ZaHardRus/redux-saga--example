import {combineReducers} from "redux";
import {todosReducer} from "./todos";
import {usersReducer} from "./users";

export const rootReducer = combineReducers({
    todo: todosReducer,
    user: usersReducer
})