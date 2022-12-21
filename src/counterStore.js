import { createStore } from "redux";
import counterReducer from "./page/counter_app/reducer/counterReducer";

const counterStore = createStore(counterReducer);
export default counterStore;