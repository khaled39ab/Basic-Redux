import React from 'react';

const Todos = () => {

    //constants
    const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
    const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
    const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

    //state
    const initialTodos = {
        todos: [],
        isLoading: false,
        error: null
    }

    // action
    const getTodosRequest = () => {
        return {
            type: GET_TODOS_REQUEST
        }
    }

    const getTodosSuccess = (todos) => {
        return {
            type: GET_TODOS_SUCCESS,
            payload: todos
        }
    }

    const getTodosFailed = (error) => {
        return {
            type: GET_TODOS_FAILED,
            payload: error
        }
    }

    //reducer
    const todosReducer = (state = initialTodos, action) => {
        switch (action.type) {
            case GET_TODOS_REQUEST:
                return {
                    ...state,
                    isLoading: true
                }

            case GET_TODOS_SUCCESS:
                return {
                    ...state,
                    todos: action.payload,
                    isLoading: false
                }

            case GET_TODOS_FAILED:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }

            default:
                return state;
        }
    }

    return (
        <div>
            <h1>Fetch Api with thunk</h1>
        </div>
    );
};

export default Todos;