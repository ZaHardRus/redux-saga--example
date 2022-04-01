import {all, call, spawn} from 'redux-saga/effects'
import {todoSagaWatcher} from "./post-saga";
import {userSagaWatcher} from "./user-saga";
import {userDetailsSagaWatcher} from "./userDetails-saga";

export function* rootSaga() {
    const sagas = [todoSagaWatcher, userSagaWatcher, userDetailsSagaWatcher]
    const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(`error >> ${e}`)
                }
            }
        })
    })
    yield all(retrySagas)
}

//take - (action.type) => указывает саге ждать dispatch указанного acton -- блокирующий
//takeEvery - (action.type, workerSaga) => Создает и запускает указаный воркер на каждый dispatch данного action
//takeLatest - (action.type, workerSaga) => Автоматически отменяет предыдущую задачу саги, запущеную ранее, если еще выполняется
//takeLeading - (action.type, workerSaga) => Автоматически отменяет любую следущую задачу саги, запущеную позднее, если первая еще не выполнена
//fork (func,...args) => выполняет НЕБЛОКИРУЮЩИЙ вызов переданной функции. Прикрепляется к родительской саге (если ошибка, то вся родительская сага с ошибкой)
//spawn (func,...args) => выполняет НЕБЛОКИРУЮЩИЙ вызов переданной функции. Создает независимую сагу (если ошибка, то ошибка только в самой саге)

//call (func,...args) => вызывает функцию с задаными аргументами. Если функция вернет Promise, то БЛОКИРУЕТ сагу до тех пор, пока промис не зарезолвится
//put ({action:action.type,payload?:some}) => вызывает dispatch с заданым action

//join <const data = yield join(task:(const task = fork/spawn(fn)))> - блокирует неблокирующую таску и возвращает ее результат
//select <const store = yield select (s=>s)> - предоставляет доступ к стору