import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import sessionReducer from './session/sessionReducer';

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['list'],
};

const initialState = {session:{
  token: null,
  user: null,
  authenticated: false,
  list: []

}}

const persistedSession = persistReducer(persistConfig, sessionReducer);

const rootReducer = combineReducers({ session: persistedSession });

const middleware = [thunk];

export const store = createStore(
  rootReducer,initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);




