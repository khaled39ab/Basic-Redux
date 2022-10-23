// state initialize/declare 
const initialCounterState = {
    count: 0
};

const initialUserSate = {
    user: [
        { name: 'Ahmadullah' }
    ]
}


// Action - is an object. It have 2 elements type and payload

//increment action
const incrementCounter = () => {
    return {
        type: 'INCREMENT'
    }
}