import { createStore} from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1 }= {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const resetCount = ({resetTo = 0 } = {}) => ({
    type: 'RESET',
    resetTo
});
const setCount = ({count = 101} = {}) => ({
    type: 'SET',
    count
});

/**
 * Reducer
 * 1. Reducers are pure functions
 * 2. Never change state or action
 * @type {Function}
 */

const countReducer = ((state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count:  0
            };
        case 'SET':
            return{
                count: action.count
            }
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:15}));

store.dispatch(resetCount({resetTo: 0}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 202}));
store.dispatch(setCount());

// unsubscribe();
