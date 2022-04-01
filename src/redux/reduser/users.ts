import {UserActionType} from "../sagas/user-saga/actionType";
import {IUser} from "../../API/UserService";

const initialState = {
    users: [],
    error: null
}
export const usersReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case UserActionType.SET_USERS: {
            return {
                ...state,
                users: [...action.payload],
            }
        }
        case UserActionType.CREATE_USER: {
            return {
                ...state,
                users: [...state.users, ...action.payload],
            }
        }
        case UserActionType.REMOVE_USER: {
            return {
                ...state,
                users: [...state.users.filter((el: IUser) => el.id !== action.payload)],
            }
        }
        case UserActionType.SET_USER_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        default: {
            return state
        }
    }
}