import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './reducers/login.reducer'; 
import  getProfilDataR  from './reducers/getProfilData.reducer';
import  getOfferEmployeR  from './reducers/getOfferEmployer.reducer';
import  loginEntrepriseReducer  from './reducers/loginEntreprise.reducer';


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    login: loginReducer,
    profilData: getProfilDataR ,
    offersEmployer:getOfferEmployeR,
    loginEntreprise:loginEntrepriseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
