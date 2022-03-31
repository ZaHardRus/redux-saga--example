import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "redux";
import {fetchTodosAC} from "./redux/sagas/todo-saga/actionCreators";


function App() {
    const store = useSelector(store=>store)
    console.log(store)
    const dispatch = useDispatch()
    const onClickHandler = (action:Action) => {
        dispatch(action)
    }
    return (
        <div className="App">
            <button onClick={()=>onClickHandler(fetchTodosAC({limit:10,page:2}))}>CLICK</button>
        </div>
    );
}

export default App;
