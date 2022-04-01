import {call, put, takeLatest} from 'redux-saga/effects'
import {PostService} from "../../../API/PostService";
import {PostActionType} from "./actionType";
import {setPostsAC} from "./actionCreators";

function* fetchAllTodosRequest({payload}: any): any {
    try {
        const data = yield call(PostService.getAll, payload)
        yield put(setPostsAC(data))
    } catch (e) {
        console.log(`error >>> ${e}`)
    }
}

export function* todoSagaWatcher() {
    yield takeLatest(PostActionType.FETCH_POSTS, fetchAllTodosRequest)
}

