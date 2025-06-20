import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ideasReducer from './slices/ideasSlice';
import calendarReducer from './slices/calendarSlice';
import trendsReducer from './slices/trendsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ideas: ideasReducer,
    calendar: calendarReducer,
    trends: trendsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
