import {call, put, StrictEffect, takeLatest} from 'redux-saga/effects'
import {createUserAC, removeUserAC, setErrorAC, setUsersAC} from "./actionCreators";
import {IUser, UserService} from "../../../API/UserService";
import {UserActionType} from "./actionType";
import {AnyAction} from "redux";

function* fetchAllUsersRequest(): Generator<StrictEffect, any, Array<IUser>> {
    try {
        const data = yield call(UserService.getAll)
        yield put(setUsersAC(data))
    } catch (e: any) {
        yield put(setErrorAC(e.message))
    }
}

function* fetchCreateUser({payload}: AnyAction): Generator<StrictEffect, any, IUser> {
    try {
        const data = yield call(UserService.createUser, payload)
        yield put(createUserAC(data))
    } catch (e: any) {
        yield put(setErrorAC(e.message))
    }
}

function* fetchRemoveUser({payload}: AnyAction): Generator {
    try {
        yield call(UserService.removeUser, payload)
        yield put(removeUserAC(payload))
    } catch (e: any) {
        yield put(setErrorAC(e.message))
    }
}

export function* userSagaWatcher() {
    yield takeLatest(UserActionType.FETCH_USERS, fetchAllUsersRequest)
    yield takeLatest(UserActionType.FETCH_CREATE_USER, fetchCreateUser)
    yield takeLatest(UserActionType.FETCH_REMOVE_USER, fetchRemoveUser)
}

