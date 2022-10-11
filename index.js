const INCREMENT = 'INCREMENT';
const ADD_USERS = 'ADD_USERS';


// Declaration of State.
const initialCounterState = {
    count: 0,
};

const userState = {
    users: [
        { name: "Akbar", Roll: 34 },
    ]
};


// Declaration of the action.
const initialCounterAction = () => {
    return {
        type: INCREMENT,
        payload: { name: 'iqbal' }
    }
}

const addUsers = (users) => {
    return {
        type: ADD_USERS,
        payload: users 
    }
}


// 1. state,
// 2. Action
// 3. Reducers
// 4. Store / update


