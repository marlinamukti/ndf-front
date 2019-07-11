import { takeEvery, call, put } from 'redux-saga/effects';
import { USERCONST } from './actionTypes';
import Axios from 'axios';

export default function* watcherLoginSaga() {
    yield takeEvery(USERCONST.REQ_USER_LOGIN, workerLoginSaga)
}

function* workerLoginSaga(action) {
    try {
        const reqip = yield call (getClientIP);
        action.payload.ip = reqip.ip;
        const response = yield call(tryLogin, action);
        // console.log(`tryLogin response `, response);
        // console.log(`action var `, action);
        if (response.token !== '') {
            const payload = {
                token: response.token,
                username: response.user.username,
                id: response.user.id,
                email: response.user.email,
                isAuthenticated: true
            }
            yield put({ 
                type: USERCONST.USER_LOGIN, 
                payload 
            });
        } else {
            throw new Error(response.message);
        }
        
    } catch (e) {
        yield put({ type: 'ERROR_FETCH', message: e.message });
    }
}

function tryLogin(action) {
    return Axios.post('http://localhost:4000/auth/login', {
        username: action.payload.username,
        password: action.payload.password,
        ip: action.payload.ip
    })
    .then(response => {
        // console.log(response.data);
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

function getClientIP() {
    return Axios.get('https://api.ipify.org/?format=json')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return {
            ip: null
        }
    });
}