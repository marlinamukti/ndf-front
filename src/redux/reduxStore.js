import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// development
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(persistedReducer, storeEnhancers());
export let persistor = persistStore(store);

