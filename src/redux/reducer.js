import {Actions} from './actions';

const initialState = {
    todos: [ ],
}
//
export default (state = initialState, {type, payload}) => {
    let newState = {...state};
    switch (type) {
        case Actions.GET_TODO:
            newState.todos = payload;
            return newState;
        case Actions.UPDATE_TODO:
            console.log('hello?')
            //newState.todos
            return newState;
        default:
            return {...state}
    }
}

