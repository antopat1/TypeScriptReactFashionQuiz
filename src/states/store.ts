import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice'; // Importa lo slice del quiz

const store = configureStore({
  reducer: {
    quiz: quizReducer, // Aggiungi lo slice del quiz al reducer dello store
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
