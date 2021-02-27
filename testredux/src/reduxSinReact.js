const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscribe]', store.getState());
});

// Dispatching action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', value: 10 });