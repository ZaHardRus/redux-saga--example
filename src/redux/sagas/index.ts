import {takeEvery,call,put,fork,spawn} from 'redux-saga/effects'
import axios from "axios";


async function getTodos () {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    return data
}
async function getUsers () {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/')
    return data
}

export function* loadTodos():Generator{
    const todos = yield call(getTodos)
    yield put({type:'SET_TODOS',payload:todos})
}
export function* loadUsers():Generator{
    const users = yield call(getUsers)
    yield put({type:'SET_USERS',payload:users})
}

function* workerClickSaga():Generator<any> {
    // const todos = yield call(getTodos)
    // const users = yield call(getUsers)
    // yield put({type:'SET_TODOS',payload:todos})
    // yield put({type:'SET_USERS',payload:users})
    yield spawn(loadTodos)
    yield fork(loadUsers)
}

function* watchClickSaga() {
    yield takeEvery('CLICK', workerClickSaga)
}

export default function* rootSaga() {
    yield fork(watchClickSaga)
}

//take - (action.type) => указывает саге ждать dispatch указанного acton -- блокирующий
//takeEvery - (action.type, workerSaga) => Создает и запускает указаный воркер на каждый dispatch данного action
//takeLatest - (action.type, workerSaga) => Автоматически отменяет предыдущую задачу саги, запущеную ранее, если еще выполняется
//takeLeading - (action.type, workerSaga) => Автоматически отменяет любую следущую задачу саги, запущеную позднее, если первая еще не выполнена

//call (func,...args) => вызывает функцию с задаными аргументами. Если функция вернет Promise, то БЛОКИРУЕТ сагу до тех пор, пока промис не зарезолвится
//fork (func,...args) => выполняет НЕБЛОКИРУЮЩИЙ вызов переданной функции. Прикрепляется к родительской саге (если ошибка, то вся родительская сага с ошибкой)
//spawn (func,...args) => выполняет НЕБЛОКИРУЮЩИЙ вызов переданной функции. Создает независимую сагу (если ошибка, то ошибка только в самой саге)

//join <const data = yield join(task:(const task = fork/spawn(fn)))> - блокирует неблокирующую таску и возвращает ее результат

//put ({action:action.type,payload?:some}) => вызывает dispatch с заданым action
//select <const store = yield select (s=>s)> - предоставляет доступ к стору