import { takeEvery, call, put } from 'redux-saga/effects';
import { USERCONST } from './actionTypes';
import Axios from 'axios';

export default function* watcherLoginSaga() {
    yield takeEvery(USERCONST.REQ_USER_LOGIN, workerLoginSaga)
}

function* workerLoginSaga(action) {
    try {
        const response = yield call(tryLogin, action);
        console.log(`worker response ${JSON.stringify(response)}`);
        console.log(`action var ${JSON.stringify(action)}`);
        const payload = {
            token: response.token,
            username: response.username,
            password: 'response.password',
            isAuthenticated: true
        }
        yield put({ type: USERCONST.USER_LOGIN, payload });
    } catch (e) {
        yield put({ type: 'ERROR_FETCH', message: e.message });
    }
}

function tryLogin(action) {
    return Axios.post('http://localhost:4000/auth/login', {
        username: action.payload.username,
        password: action.payload.password
    })
    .then(response => {
        console.log(response);
        if (response.data.message === 'user not found!' || response.data.message === 'Missing credentials') {
            throw new Error(response.data.message);
        } else {
            return response.data;
        }
    })
    .catch(error => {
        throw error;
    });
}