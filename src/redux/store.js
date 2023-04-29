import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './contacts/sliceFilter';
import { authReducer } from './auth/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
