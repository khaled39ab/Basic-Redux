import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../todos_constants/todosConstants";

const initialValue = {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer = (state = initialValue, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case TODOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}