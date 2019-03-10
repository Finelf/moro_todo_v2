import {Actions} from './actions';

const initialState = {
    isLoading: false,
    todos: [ ],
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case Actions.GET_TODO:
            return {
                ...state,
                todos: payload
            }
        case Actions.ADD_TODO:
            return {
                ...state,
                todos: [
                    payload,
                    ...state.todos.slice(0, payload.index)
                ]
            }
        case Actions.DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((item) => item.id !== payload)
                ]
            }
        case Actions.DELETE_COMPLETE:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((item) => item.completed !== false)
                ]
            }
        case Actions.TOGGLE_DONE:
            return {
                ...state,
                todos: [
                    ...state.todos.map(item => {
                        if (item.id !== payload) {
                            return item
                        }
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    })
                ]
            }
        case Actions.TOGGLE_EDITING:
            return {
                ...state,
                todos: [
                    ...state.todos.map( item => (
                    (item.id === payload.id) ?
                        {...item, isEditing: !item.isEditing} : item )
                    )
                ]
            }
        case Actions.UPDATE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.map( item => (
                        (item.id === payload.id) ?
                            {   ...item,
                                text: payload.text,
                                isEditing: false
                            } : item )
                    )
                ]
            }
        case Actions.LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }

        default:
            return state
    }
}