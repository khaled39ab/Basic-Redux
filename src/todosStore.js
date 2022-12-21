import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./page/todos_App/todos_reducer/todosReducer";

const todosStore = createStore(todosReducer, applyMiddleware(thunk));

export default todosStore;