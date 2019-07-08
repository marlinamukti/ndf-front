import { STORECONST, USERCONST } from './actionTypes';
import { combineReducers } from 'redux';
import { initialState } from './initialState';

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

function user(state = initialState.user, action) {
    const user = {...state};

    switch (action.type) {
        case USERCONST.GET_USER:
            return user;
        
        case USERCONST.USER_LOGIN:
            return action.payload;

        case USERCONST.USER_LOGOUT:
            return action.payload;

        default:
            return state;
    }
}

function errors(state = initialState.error, action) {
    switch (action.type) {
        case 'ERROR_FETCH':
            let newErr = {
                message: action.message
            }
            return newErr;

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    stores,
    user,
    errors
});