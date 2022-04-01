import {call, put, StrictEffect, takeLatest} from 'redux-saga/effects'
import {IUser, UserService} from "../../../API/UserService";
import {UserDetailsActionType} from "./actionType";
import {setErrorUserDetailsAC, setUserDetailsAC, updateUserDetailsAC} from "./actionCreators";
import {AnyAction} from "redux";

function* fetchOneUserRequest({payload}: AnyAction): Generator<StrictEffect, any, IUser> {
    try {
        const data = yield call(UserService.getOneById, payload)
        yield put(setUserDetailsAC(data))
    } catch (e: any) {
        yield put(setErrorUserDetailsAC(e.message))
    }
}

function* updateOneUserRequest({payload}: AnyAction): Generator<StrictEffect, any, IUser> {
    try {
        const data = yield call(UserService.updateUser, payload.id, payload)
        yield put(updateUserDetailsAC(data))
    } catch (e: any) {
        yield put(setErrorUserDetailsAC(e.message))
    }
}


export function* userDetailsSagaWatcher() {
    yield takeLatest(UserDetailsActionType.FETCH_USER_DETAILS, fetchOneUserRequest)
    yield takeLatest(UserDetailsActionType.FETCH_UPDATE_USER_DETAILS, updateOneUserRequest)
}

