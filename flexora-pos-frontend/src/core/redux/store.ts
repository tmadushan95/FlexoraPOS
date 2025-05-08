import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./reducer/root.reducer";
import { authReducerActions } from "./reducer/authReducer/auth.reducer";
import rootSaga from "./saga/root.saga";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

// ================================================================================================================================================ //
// ==========================================================|| REDUX - STORE ||==================================================== //
// ================================================================================================================================================ //

const sagaMiddleware = createSagaMiddleware();

const config = { whitelist: [authReducerActions.setAuth.type] };

const persistConfig = {
  key: "root",
  whitelist: ["authReducer"], // only navigation will be persisted for this reducer
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      //.concat(createStateSyncMiddleware(config))
      .concat(sagaMiddleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
initMessageListener(store);

export default store;
