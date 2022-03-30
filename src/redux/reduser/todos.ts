const initialState = {
    todos:[]
}
export const todosReducer = (state = initialState, action:any):any => {
    switch (action.type){
        case 'SET_TODOS':{
            return {
                ...state,
                todos:[...state.todos,...action.payload]
            }
        }
        default:{
            return state
        }
    }
}