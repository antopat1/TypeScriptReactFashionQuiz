import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../states/store';
import { IGetQuestions, IAnswerObject } from "../utils/Interface/interface";

interface QuizState {
  loading: boolean;
  number: number;
  score: number;
  previousScore: string;
  questions: IGetQuestions[];
  userAnswers: IAnswerObject[];
}

const initialState: QuizState = {
  loading: true,
  number: 0,
  score: 0,
  previousScore: "0",
  questions: [],
  userAnswers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setPreviousScore: (state, action: PayloadAction<string>) => {
      state.previousScore = action.payload;
    },
    setQuestions: (state, action: PayloadAction<IGetQuestions[]>) => {
      state.questions = [...action.payload];
    },
    setUserAnswers: (state, action: PayloadAction<IAnswerObject[]>) => {
      state.userAnswers = action.payload;
    },
    resetQuiz: (state) => {
      state.previousScore = state.score.toString();  // Salva il punteggio prima di resettare
      state.number = 0;
      state.score = 0;
      state.questions = [];
      state.userAnswers = [];
    },
    clearUserAnswer: (state, action: PayloadAction<number>) => {
      state.userAnswers[action.payload] = undefined!;
    },
  },
});

export const { setLoading, setNumber, setScore, setPreviousScore, setQuestions, setUserAnswers, resetQuiz, clearUserAnswer } = quizSlice.actions;

export const selectQuiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;


