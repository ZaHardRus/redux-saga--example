import {UserActionType} from "./actionType";

export const fetchUsersAC = (payload:any) => ({type:UserActionType.FETCH_USERS,payload})
export const setUsersAC = (payload:any) => ({type:UserActionType.SET_USERS,payload})
