import React from 'react';

const Fundametal = () => {
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
        user: ['Ahmadullah'],
        userCount: 1
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
    const addUser = (user) => {
        return {
            type: ADD_USER,
            payload: user
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

    const userReducer = (state = initialUserSate, action) => {
        switch (action.type) {
            case ADD_USER:
                return {
                    user: [...state.user, action.payload],
                    userCount: state.userCount + 1
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
    const store2 = createStore(userReducer);

    store.subscribe(() => {
        console.log(store.getState());
    });

    store2.subscribe(() => {
        console.log(store2.getState());
    })

    //dispatch an action
    store.dispatch(incrementCounter());
    store.dispatch(incrementCounter());
    store.dispatch(decrementCounter());
    store.dispatch(incrementCounter());
    store.dispatch(resetCounter());
    store.dispatch(incrementCounter());

    store2.dispatch(addUser('Mahmud'))
    store2.dispatch(addUser('Jaman'))

    return (
        <div>
            <h1>Redux</h1>
        </div>
    );
};

export default Fundametal;