import { STORECONST } from './actionTypes.js';

export function addStore(payload) {
    return { type: STORECONST.ADD_STORE, payload }
}