import {TodoActionType} from "./actionType";

export const fetchTodosAC = (payload:any) => ({type:TodoActionType.FETCH_TODOS,payload})

export const setTodosAC = (payload:any) => ({type:TodoActionType.SET_TODOS,payload})
