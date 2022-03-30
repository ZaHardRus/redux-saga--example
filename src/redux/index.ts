import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todosReducer} from "./reduser/todos";
import { usersReducer } from "./reduser/users";
import rootSaga from "./sagas";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const rootReducer = combineReducers({
    todos:todosReducer,
    users:usersReducer
})
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
export default store
