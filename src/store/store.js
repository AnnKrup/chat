import {applyMiddleware, createStore} from "redux";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducerUsers from "./reducerUsers";
import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducers = persistCombineReducers(persistConfig,{
  reducerUsers: reducerUsers,
});

export const store = createStore(persistedReducers, applyMiddleware(thunk));
