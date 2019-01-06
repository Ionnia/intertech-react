import { createStore } from 'redux'

const initialState = {
    count: 3
};

const reducer = (state = initialState, action) => {
    if (action.type == 'INCREMENT'){
        console.log('reducer running', action);
        return state;
    }
}

const store = createStore(reducer);

const incrementAction = { type: 'INCREMENT' };

store.dispatch(incrementAction);

export default store;