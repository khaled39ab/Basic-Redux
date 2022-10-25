/* 
1- initial state
2- dispatch action
3- reducer 
4- store
*/

/****************************/
// state initialize/declare 
/****************************/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
const RESET = 'RESET';

const { createStore } = require('redux');

const initialCounterState = {
    count: 0
};

const initialUserSate = {
    user: [
        { name: 'Ahmadullah' }
    ]
}

/***************************************************************/
// Action - is an object. It have 2 elements, type and payload
/***************************************************************/

//increment action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

//decrement action
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

//reset counter action
const resetCounter = () => {
    return {
        type: RESET
    }
}

//Add user with passing data via payload
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Mahmud' }
    }
}


/***************************************************************/
// Reducer - is a function. Just pure function which is change state by action type
/***************************************************************/

//create reducer for counter
/* 
const counterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return {
                state
            }
    }
}
 */

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, //for multiple value
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state, //for multiple value
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;

    }
}


/***************************************************************/
//store-is holding the state. It's has 3 methods. getState(), getDispatch(), subscribe() 
/***************************************************************/

//create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch an action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter())

