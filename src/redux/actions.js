import { STORECONST } from './actionTypes';

export function addStore(payload) {
    return { type: STORECONST.ADD_STORE, payload }
}