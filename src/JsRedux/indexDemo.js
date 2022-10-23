/* 
1- initial state
2- dispatch action
3- reducer 
4- store
*/

/****************************/
// state initialize/declare 
/****************************/
const initialCounterState = {
    count: 0
};

const initialUserSate = {
    user: [
        { name: 'Ahmadullah' }
    ]
}

/***************************************************************/
// Action - is an object. It have 2 elements, type and payload
/***************************************************************/

//increment action
const incrementCounter = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrementCounter = () => {
    return {
        type: 'DECREMENT'
    }
}

//Add user with passing data via payload
const addUser = () => {
    return {
        type: 'ADD_USER',
        payload: { name: 'Mahmud' }
    }
}


/***************************************************************/
// Reducer
/***************************************************************/