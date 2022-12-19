import React from 'react';

const Counter = () => {
    const handleDecrement = () => {

    }
    const handleReset = () => {

    }
    const handleIncrement = () => {

    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter App</h1>

            <h3>Count: { }</h3>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </div >
    );
};

export default Counter;