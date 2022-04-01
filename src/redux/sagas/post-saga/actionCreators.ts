import {PostActionType} from "./actionType";
import {IPost} from "../../../API/PostService";

export const fetchPostsAC = (payload:any) => ({type:PostActionType.FETCH_POSTS,payload})

export const setPostsAC = (payload:Array<IPost>) => ({type:PostActionType.SET_POSTS,payload})
export type PostActions = typeof fetchPostsAC | typeof setPostsAC
