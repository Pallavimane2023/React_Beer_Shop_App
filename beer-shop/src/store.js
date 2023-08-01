import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartreducer from "./redux/reducer";
import {createStore } from 'redux';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartreducer);

const store = createStore(
  persistedReducer,
 
);

const persistor = persistStore(store);

export { store, persistor };