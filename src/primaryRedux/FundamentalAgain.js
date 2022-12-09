import React from 'react';
import { useState } from 'react';
import './Fundamental.css'

const FundamentalAgain = () => {
    /* 
    1- initial state
    2- dispatch action
    3- reducer 
    4- store
    */
   const {createStore} = require ('redux');

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const ADD_USER = 'ADD_USER';

    // initial state--
    const initialCounterState = {
        count: 0
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

    const counterReducer = (state = initialCounterState, action) => {
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

    const userReducer = (state = initialUser, action) => {
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

    const store = createStore(counterReducer);

    store.subscribe(()=>{
        console.log(store.getState().count);
    });
    
    const handleIncrement = () =>{
        store.dispatch(incrementCounter())
    }
   
    const handleDecrement = () =>{
        store.dispatch(decrementCounter())
    }

    return (
        <div className="counter center">
            <h1 className="counter__title">Counter App with Redux</h1>
            <div className="card center">
                <h2 className="card__title">Count :</h2>
                <div className="card__btn">
                    <button className="btn card__btn" onClick={handleDecrement}>-</button>
                    <button className="btn card__btn" onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    );
};

export default FundamentalAgain;