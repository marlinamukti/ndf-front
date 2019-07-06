import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import apiSaga from './api-sagas';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// development
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiseSagaMiddleware = createSagaMiddleware();


export let store = createStore(
    persistedReducer, 
    storeEnhancers(
        applyMiddleware(initialiseSagaMiddleware)
    ));
export let persistor = persistStore(store);

initialiseSagaMiddleware.run(apiSaga);

