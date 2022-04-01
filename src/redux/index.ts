import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas/rootSaga";
import {rootReducer} from "./reduser/rootReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

sagaMiddleware.run(rootSaga)
export default store
