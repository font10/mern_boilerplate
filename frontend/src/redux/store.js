import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import palasSlice from "./slices/palasSlice";
import authSlice from "./slices/authSlice";
import modalSlice from "./slices/modalSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducers = combineReducers({
    auth: authSlice,
    palas: palasSlice,
    modal: modalSlice
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);