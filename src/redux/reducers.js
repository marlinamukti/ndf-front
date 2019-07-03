import { STORECONST } from './actionTypes.js';
import { combineReducers } from 'redux';
import { initialState } from './initialState.js';

function stores(state = initialState.stores, action) {
    const stores = [...state];
    // let index; // define index here
    switch (action.type) {
        case STORECONST.ADD_STORE:
            return stores.concat(action.payload);
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    stores
});