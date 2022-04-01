import {UserDetailsActionType} from "./actionType";
import {IUser} from "../../../API/UserService";

export const fetchUserDetailsAC = (payload:string|undefined) => ({type: UserDetailsActionType.FETCH_USER_DETAILS,payload})
export const fetchUpdateUserDetailsAC = (payload:IUser) => ({type: UserDetailsActionType.FETCH_UPDATE_USER_DETAILS,payload})

export const setUserDetailsAC = (payload: IUser) => ({type: UserDetailsActionType.SET_USER_DETAILS, payload})
export const updateUserDetailsAC = (payload: IUser) => ({type: UserDetailsActionType.SET_USER_DETAILS, payload})
export const setErrorUserDetailsAC = (payload: string) => ({type: UserDetailsActionType.SET_USER_DETAILS_ERROR, payload})