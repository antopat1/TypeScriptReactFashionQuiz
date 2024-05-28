import { Dispatch, SetStateAction } from "react";

export interface IGetQuestions {
  question: string;
  answers: string[];
  correct_answer: string;
}

export interface IAnswerObject {
  question: string;
  answer: string;
  isCorrect: boolean;
  correct_answer: string;
}

export interface IHomeProps {
  startGame: () => void;
}

export interface IQuizProps {
  loading: boolean;
  number: number;
  questionNumber: number;
  totalQuestion: number;
  setNumber: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  score: number;
}

export interface IResultsProps {
  score: number;
  totalQuestion: number;
}

export interface INavbarProps {
  preaviusQuestion: () => void;
  restartGame: () => void;
}
