import {UserActionType} from "./actionType";
import {IUser} from "../../../API/UserService";

export const fetchUsersAC = () => ({type:UserActionType.FETCH_USERS})
export const fetchCrateUserAC = (payload:IUser) => ({type:UserActionType.FETCH_CREATE_USER,payload})
export const fetchRemoveUserAC = (id:string) => ({type:UserActionType.FETCH_REMOVE_USER,payload:id})

export const removeUserAC = (payload:string) => ({type:UserActionType.REMOVE_USER,payload})
export const createUserAC = (payload:IUser) => ({type:UserActionType.CREATE_USER,payload})
export const setUsersAC = (payload:Array<IUser>) => ({type:UserActionType.SET_USERS,payload})
export const setErrorAC = (payload:any) => ({type:UserActionType.SET_USER_ERROR,payload})