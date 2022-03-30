const initialState = {
    users:[]
}
export const usersReducer = (state = initialState, action:any):any => {
    switch (action.type){
        case 'SET_USERS':{
            return {
                ...state,
                users:[...state.users,...action.payload]
            }
        }
        default:{
            return state
        }
    }
}