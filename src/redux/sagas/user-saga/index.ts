import {call, fork, put} from 'redux-saga/effects'
import {setUsersAC} from "./actionCreators";
import {UserService} from "../../../API/UserService";

function* fetchAllUsersRequest(): Generator {
    try {
        const data = yield call(UserService.getAll)
        yield put(setUsersAC(data))
    } catch (e) {
        console.log(`error >>> ${e}`)
    }
}

export function* userSagaWatcher() {
    yield fork(fetchAllUsersRequest)
}

