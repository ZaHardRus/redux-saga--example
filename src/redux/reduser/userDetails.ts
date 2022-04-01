import {UserDetailsActionType} from "../sagas/userDetails-saga/actionType";

const initialState = {
    user: {
        id: '',
        name: '',
        username: '',
        email: ''
    },
    error: ''
}
export const userDetailsReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case UserDetailsActionType.SET_USER_DETAILS: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case UserDetailsActionType.UPDATE_USER_DETAILS: {
            return {
                ...state,
                user:{...action.payload}
            }
        }
        case UserDetailsActionType.SET_USER_DETAILS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}