import {IPost} from "../../API/PostService";
import {PostActionType} from "../sagas/post-saga/actionType";

interface IPostsReducer {
    posts: Array<IPost>
}

const initialState: IPostsReducer = {
    posts: []
}
export const postsReducer = (state = initialState, action: any): IPostsReducer => {
    switch (action.type) {
        case PostActionType.SET_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        }
        default: {
            return state
        }
    }
}