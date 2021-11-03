import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/slice';
import todosReducer from "../features/todos/slice";
import pokemonReducer from "../features/pokemon/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
