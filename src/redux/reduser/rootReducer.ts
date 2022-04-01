import {combineReducers} from "redux";
import {postsReducer} from "./posts";
import {usersReducer} from "./users";
import {userDetailsReducer} from "./userDetails";

export const rootReducer = combineReducers({
    post: postsReducer,
    user: usersReducer,
    userDetails:userDetailsReducer
})