import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../states/store";
import {
  setNumber,
  setScore,
  setQuestions,
  setUserAnswers,
  setPreviousScore,
  clearUserAnswer,
} from "../../states/quizSlice";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import QuizCSS from "./Quiz.module.css";
import { mixArray } from "../../utils/Functions/utils";
import { circularEconomyQuiz } from "../../utils/Questions/question";
import { IAnswerObject } from "../../utils/Interface/interface";
import classNames from "classnames";

// Ottieni lo stato del quiz dallo store Redux
const Quiz: React.FC = (): JSX.Element => {
  const { loading, number, score, questions, userAnswers, previousScore } =
    useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

// Calcola il numero della domanda corrente e il totale delle domande
  const questionNumber = number + 1;
  const totalQuestion = 10;

  // Verifica se la domanda corrente è l'ultima
  const isLastQuestion = questionNumber === totalQuestion;
  
  // Inizializza lo stato del quiz quando il componente viene montato
  useEffect(() => {
    if (!loading) {
      // Mischia le domande e imposta lo stato del quiz
      dispatch(setQuestions(mixArray(circularEconomyQuiz)));
      // Inizializza le risposte dell'utente, il punteggio locale e il punteggio
      dispatch(setUserAnswers([]));
      dispatch(setPreviousScore(previousScore)); // Usa il punteggio precedente dallo stato
      dispatch(setScore(0));
    }
  }, [dispatch, loading, previousScore]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;

    if (userAnswers[number] && userAnswers[number].answer === answer) {
      dispatch(clearUserAnswer(number));
      return;
    }
    
    const correct = questions[number].correct_answer === answer;
    // Incrementa il punteggio se la risposta è corretta
    if (correct) {
      dispatch(setScore(score + 1));
    }

    const answerObject: IAnswerObject = {
      question: questions[number].question,
      answer: answer,
      isCorrect: correct,
      correct_answer: questions[number].correct_answer,
    };

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[number] = answerObject;
    dispatch(setUserAnswers(updatedUserAnswers));
  };
  
  // Passa alla domanda successiva
  const nextQuestion = (): void => {
    if (number < 9) {
      dispatch(setNumber(number + 1));
    }
  };
  
  // Torna alla domanda precedente
  const previousQuestion = (): void => {
    if (number + 1 > 1) {
      dispatch(setNumber(number - 1));
    }
  };
  
  // Ricomincia il gioco: Reimposta lo stato del quiz
  const restartGame = (): void => {
    // dispatch(setPreviousScore(score.toString())); // Se decido di considerare il restart QUIZ con punteggio precedentenullo
    dispatch(setScore(0));
    dispatch(setNumber(0));
    dispatch(setQuestions(mixArray(circularEconomyQuiz)));
    dispatch(setUserAnswers([]));
  };

  return (
    <>
      {!loading && questions.length > 1 && (
        <div>
          <Navbar
            preaviusQuestion={previousQuestion}
            restartGame={restartGame}
          />
          <div className="min-h-screen flex items-center justify-center">
            <div
              className={classNames(
                QuizCSS.container,
                "flex flex-col justify-between items-center"
              )}
            >
              <div className="w-full max-w-4xl px-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="mb-2 md:mb-0 -ml-5 md: text-lg md:text-3xl lg:-ml-8 xl:-ml-32">
                    Risultato ultimo Test: {previousScore === "0" ? "0/10" : `${previousScore}/10`}
                  </p>
                  <p className="text-lg md:text-3xl -mr-5 lg:-mr-8 xl:-mr-32">
                    Domanda: {questionNumber}/{totalQuestion}
                  </p>
                </div>
                <p className="mt-10 mb-7 text-3xl md:text-5xl font-extrabold text-center bg-clip-text bg-gradient-to-r drop-shadow-[0_4px_6px_rgba(155,255,133,5)]">
                  {questions[number].question}
                </p>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {questions[number].answers.map((answer) => (
                      <button
                        key={answer}
                        value={answer}
                        onClick={checkAnswer}
                        className={classNames(
                          "w-full h-16 text-lg px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition transform hover:scale-105 text-center",
                          {
                            [QuizCSS.selected]:
                              userAnswers[number]?.answer === answer,
                          }
                        )}
                      >
                        <span
                          className={classNames(
                            "block",
                            QuizCSS.textResponsive
                          )}
                        >
                          {answer}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-14 mb-8">
                  {isLastQuestion ? (
                    <button
                      disabled={!userAnswers[number]}
                      className="px-8 py-4 bg-gradient-to-r from-blue-300 via-green-600 to-blue-900 rounded-lg hover:opacity-90"
                    >
                      {userAnswers[number] ? (
                        <Link to="/results">Risultati Test</Link>
                      ) : (
                        <span>Vai all'ultima risposta</span>
                      )}
                    </button>
                  ) : (
                    <button
                      disabled={!userAnswers[number]}
                      onClick={nextQuestion}
                      className="px-8 py-4 bg-gradient-to-r from-blue-300 via-green-600 to-blue-900 rounded-lg hover:opacity-90"
                    >
                      Prossima domanda
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
