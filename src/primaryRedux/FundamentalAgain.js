import React from 'react';

const FundamentalAgain = () => {
    /* 
    1- initial state
    2- dispatch action
    3- reducer 
    4- store
    */

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const ADD_USER = 'ADD_USER';

    // initial state--
    const initialCounterState = {
        count: 0,
    }

    const initialUser = {
        User: ['Khaled'],
        NumberOfUser: 1
    }

    // dispatch action -- action is an object. It have 2 things. 1-type 2-payload
    const addUser = (user) => {
        return {
            type: ADD_USER,
            payload: user
        }
    }

    const incrementCounter = () => {
        return {
            type: INCREMENT,
        }
    }

    const decrementCounter = () => {
        return {
            type: DECREMENT,
        }
    }

    const counterReducer = (state = initialUser, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + 1
                }
            case DECREMENT:
                return {
                    count: state.count - 1
                }
            default:
                return state
        }
    }

    const userReducer = (state = initialCounterState, action) => {
        switch (action.type) {
            case ADD_USER:
                return {
                    User: [...state.user, action.payload],
                    NumberOfUser: state.NumberOfUser + 1
                }

            default:
                return state;
        }
    }

    return (
        <div>

        </div>
    );
};

export default FundamentalAgain;