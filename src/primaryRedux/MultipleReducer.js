import React from 'react';

const MultipleReducer = () => {
    const ADD_PRODUCT = 'ADD_PRODUCT';
    const GET_PRODUCT = 'GET_PRODUCT';

    const { createStore } = require('redux');

    const initialProducts = {
        products: ['Rice', 'Sugar'],
        items: 2
    }

    const getProduct = () => {
        return {
            type: GET_PRODUCT
        }
    }

    const addProduct = (product) => {
        return {
            type: ADD_PRODUCT,
            payload: product
        }
    }

    const productsReducer = (state = initialProducts, action) => {
        switch (action.type) {
            case ADD_PRODUCT:
                return {
                    products: [...state.products, action.payload],
                    items: state.items + 1
                }
            case GET_PRODUCT:
                return { ...state }

            default:
                return state;
        }
    }

    const store = createStore(productsReducer);

    store.subscribe(() => {
        console.log(store.getState());
    })

    store.dispatch(getProduct())
    store.dispatch(addProduct('Salt'))

    return (
        <div>

        </div>
    );
};

export default MultipleReducer;