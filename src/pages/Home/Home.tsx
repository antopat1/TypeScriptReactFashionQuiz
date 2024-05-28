import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setNumber } from "../../states/quizSlice";
import classNames from "classnames";
import HomeCSS from "./Home.module.css"; // Importa il file CSS

const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const startGame = (): void => {
    dispatch(setNumber(0));
    dispatch(setLoading(false));
  };

  return (
    <div
      className={classNames(
        HomeCSS.container,
        "min-h-screen flex items-center justify-center"
      )}
    >
      <div className="bg-gray-100 bg-opacity-50 p-8 rounded-lg shadow-lg text-center w-full max-w-md md:max-w-xl mx-auto">
        <h1 className="font-semibold text-6xl md:text-7xl italic">
          Quiz Moda Sostenibile
        </h1>
        <p className="mt-8 text-xl md:text-2xl italic">
          Mettiti alla prova con un quiz composto da 10 domande riguardanti il
          tema della moda sostenibile e dell'economia circolare. Alla fine del
          quiz otterrai un punteggio, che potrà essere di livello Base,
          Intermedio, Esperto o Maestro. Quanto ti senti preparato?
        </p>
        <button
          onClick={startGame}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-300 via-green-600 to-blue-900 rounded-lg hover:opacity-90"
        >
          <Link to="/quiz">Play</Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
