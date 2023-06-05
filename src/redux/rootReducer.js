import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from './auth/auth-slice';
import tweetsReducer from './tweets/tweetsSlice';
// import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tweets'],
};

const persistedReducer = persistReducer(persistConfig, tweetsReducer);

const rootReducer = combineReducers({
  //   auth: persistedAuthReducer,
  tweets: persistedReducer,
  //   filter: filterReducer,
});

export default rootReducer;
