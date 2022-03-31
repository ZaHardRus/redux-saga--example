import {call, put, takeLatest} from 'redux-saga/effects'
import {TodoService} from "../../../API/TodoService";
import {setTodosAC} from "./actionCreators";
import {TodoActionType} from "./actionType";

function* fetchAllTodosRequest({payload}: any): Generator {
    try {
        const data = yield call(TodoService.getAll, payload)
        yield put(setTodosAC(data))
    } catch (e) {
        console.log(`error >>> ${e}`)
    }
}

export function* todoSagaWatcher() {
    yield takeLatest(TodoActionType.FETCH_TODOS, fetchAllTodosRequest)
}

