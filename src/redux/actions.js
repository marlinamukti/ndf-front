import { STORECONST, USERCONST } from './actionTypes';

export function addStore(payload) {
    return { type: STORECONST.ADD_STORE, payload };
}

export function getUser(payload) {
    return { type: USERCONST.GET_USER, payload};
}