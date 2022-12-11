import React from 'react';

const MultipleReducerAgain = () => {
    /* 
   1- initial state
   2- dispatch action
   3- reducer 
   4- store
   */
    const { createStore } = require('redux');

    const GET_PRODUCTS = 'GET_PRODUCTS';
    const ADD_PRODUCT = 'ADD_PRODUCT';


    const initialProducts = {
        products: ['eraser', 'pencil'],
        numberOfProducts: 2
    }

    const getProducts = () => {
        return {
            type: GET_PRODUCTS
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
            case GET_PRODUCTS:
                return state;

            case ADD_PRODUCT:
                return {
                    products: [...state.products, action.payload],
                    numberOfProducts: state.numberOfProducts + 1
                }

            default:
                return state
        }
    }

    const productStore = createStore(productsReducer);

    productStore.subscribe(() => {
        console.log(productStore.getState());
    })

    productStore.dispatch(getProducts())
    productStore.dispatch(addProduct('pen'))

    return (
        <div>
            <h1>Multiple Reducer... </h1>
        </div>
    );
};

export default MultipleReducerAgain;