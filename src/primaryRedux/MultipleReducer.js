import React from 'react';

const MultipleReducer = () => {
    const ADD_PRODUCT = 'ADD_PRODUCT';
    const GET_PRODUCT = 'GET_PRODUCT';
    const GET_CART = 'GET_CART';
    const ADD_CART = 'ADD_CART';

    const { createStore } = require('redux');

    // initialize state
    const initialProducts = {
        products: ['Rice', 'Sugar'],
        items: 2
    }

    const initialCart = {
        cart: ['Biscuits'],
        numberOfCart: 1
    }

    // action
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

    const getCart = () => {
        return {
            type: GET_CART
        }
    }

    const addCart = (cart) => {
        return {
            type: ADD_CART,
            payload: cart
        }
    }


    // Reducer 
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

    const cartReducer = (state = initialCart, action) => {
        switch (action.type) {
            case GET_CART:
                return {
                    ...state
                }

            case ADD_CART:
                return {
                    cart: [...state.cart, action.payload],
                    numberOfCart: state.numberOfCart + 1
                }

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
            <h1>Multiple Reducer</h1>
        </div>
    );
};

export default MultipleReducer;