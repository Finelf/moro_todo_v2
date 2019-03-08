import axios from 'axios';
const apiUrl = 'http://localhost:8080/todos';

export const Actions = {
    GET_TODO: 'GET_TODO',
    TOGGLE_DONE: 'TOGGLE_DONE',
    UPDATE_TODO: 'UPDATE_TODO',
};
export const getTodo = (todos) => ({
    type: Actions.GET_TODO,
    payload: todos
});
export const addNewTodo = (payload) => {
    return dispatch => {
        return axios.post(apiUrl, {
            text: payload.text
        }).then(() => {
            dispatch(fetchAllTodos())
        })
    }
};
export const fetchAllTodos = () => {
    return dispatch => {

        return axios.get(apiUrl)
            .then(response => {
                let newResponse = response.data.forEach(item => {
                   item['isEditing'] = false;
                })
                console.log(newResponse)
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const fetchCompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/completed`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const fetchIncompleteTodos = () => {
    return dispatch => {
        return axios.get(`${apiUrl}/incompleted`)
            .then(response => {
                dispatch(getTodo(response.data))
            }).catch(error => {
                throw(error)
            })
    }
};
export const deleteItem = (id) => {
    return dispatch => {
        return axios.delete(apiUrl + '/' + id.id)
            .then(() => {
                dispatch(fetchAllTodos())
            }).catch(error => {
                throw(error)
            })
    }
}
export const deleteComplete = () => {
    return dispatch => {
        return axios.delete(apiUrl + '/completed')
            .then(() => {
                dispatch(fetchAllTodos())
            }).catch(error => {
                throw(error)
            })
    }
}
export const updateTodo = (val) => ({
    type: 'UPDATE_TODO',
    payload: {
        id: val.id,
        text: val.text,
    }
});
export const completeTodo = (id) => {
    return dispatch => {
        return axios.post(apiUrl + '/' + id.id + '/complete', {
            id: id.id
        }).then( () => {
            dispatch(fetchAllTodos())
        }).catch(error => {
            throw(error)
        })
    }
}
export const incompleteTodo = (id) => {
    return dispatch => {
        return axios.post(apiUrl + '/' + id.id + '/incomplete', {
            id: id.id
        }).then( () => {
            dispatch(fetchAllTodos())
        }).catch(error => {
            throw(error)
        })
    }
};