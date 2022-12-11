import React from 'react';

const MultipleReducerAgain = () => {
    /* 
   1- initial state
   2- dispatch action
   3- reducer 
   4- store
   */
    const { createStore, combineReducers } = require('redux');

    /* 
    #############################################################
    *******************      constants      *********************
    #############################################################
    */
    const GET_PRODUCTS = 'GET_PRODUCTS';
    const ADD_PRODUCT = 'ADD_PRODUCT';
    const GET_CART = 'GET_CART';
    const ADD_CART = 'ADD_CART';

    /* 
    #############################################################
    ******************      initial state      ******************
    #############################################################
    */
    const initialProducts = {
        products: ['eraser', 'pencil'],
        numberOfProducts: 2
    }

    const initialCart = {
        cart: ['pen', 'paper'],
        numberOfCart: 2
    }

    /* 
    #############################################################
    *******************      action type      *******************
    #############################################################
    */
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

    const getCart = () => {
        return {
            type: GET_CART
        }
    }

    const addCart = (product) => {
        return {
            type: ADD_CART,
            payload: product
        }
    }

    /* 
    #############################################################
    *********************      reducer      *********************
    #############################################################
    */
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

    const cartReducer = (state = initialCart, action) => {
        switch (action.type) {
            case GET_CART:
                return state

            case ADD_CART:
                return {
                    cart: [...state.cart, action.payload],
                    numberOfCart: state.numberOfCart + 1
                }

            default:
                return state;
        }
    }

    /* 
    #############################################################
    *****************      combine reducer      *****************
    #############################################################
    */
    const rootReducer = combineReducers({
        productR: productsReducer,
        cartR: cartReducer
    });

    const store = createStore(rootReducer)


    /* 
    #############################################################
    **********************      store      **********************
    #############################################################
    */
    // const productStore = createStore(productsReducer);

    // productStore.subscribe(() => {
    //     console.log(store.getState());
    // });

    store.subscribe(() => {
        console.log(store.getState());
    });

    //============   cart store   =============
    // const cartStore = createStore(cartReducer);

    // cartStore.subscribe(() => {
    //     console.log(store.getState());
    // });

    store.subscribe(() => {
        console.log(store.getState());
    });



    /* 
    #############################################################
    *****************      dispatch action      *****************
    #############################################################
    */
    // productStore.dispatch(getProducts());
    // productStore.dispatch(addProduct('pen'));

    // cartStore.dispatch(getCart());
    // cartStore.dispatch(addCart('cutter'))
    store.dispatch(getProducts());
    store.dispatch(addProduct('pen'));

    store.dispatch(getCart());
    store.dispatch(addCart('cutter'))

    return (
        <div>
            <h1>Multiple Reducer... </h1>
        </div>
    );
};

export default MultipleReducerAgain;