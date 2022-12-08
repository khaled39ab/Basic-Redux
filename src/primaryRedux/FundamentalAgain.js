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
    
    // initial state--
    const initialCounterState = {
        count: 0
    }

    // dispatch action -- action have 2 things. 1-type 2-payload
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

    return (
        <div>

        </div>
    );
};

export default FundamentalAgain;