import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterReset } from './action/counterAction';

const Counter = () => {
    const count = useSelector(counterStore => counterStore.count);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(counterDecrement())
    }

    const handleReset = () => {
        dispatch(counterReset())
    }

    const handleIncrement = () => {
        dispatch(counterIncrement())
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter App</h1>

            <h3>Count: {count}</h3>

            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </div >
    );
};

export default Counter;