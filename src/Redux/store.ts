import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameSlice } from './slices/gameSlice';

const rootReducer = combineReducers({
  game: gameSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
