import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import ResultsCSS from "./Results.module.css";
import { scoreLevel } from "../../utils/Enum/enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Funzione per ottenere il messaggio di punteggio in base al risultato
const getScoreMessage = (score: number): JSX.Element | undefined => {
  const starClass = "text-yellow-600 animate-pulse";

  if (score <= 3)
    return (
      <span className="text-5xl md:text-7xl">
        {scoreLevel.Basic}
        <br />
        <span className={`text-6xl md:text-8xl ${starClass}`}>
          <FontAwesomeIcon icon={faStar} size="1x"/>
        </span>
      </span>
    );
  if (score <= 7)
    return (
      <span className="text-5xl md:text-7xl">
        {scoreLevel.Intermediate}
        <br />
        <span className={`text-6xl md:text-8xl ${starClass}`}>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
        </span>
      </span>
    );
  if (score <= 9)
    return (
      <span className="text-5xl md:text-7xl">
        {scoreLevel.Expert}
        <br />
        <span className={`text-6xl md:text-8xl ${starClass}`}>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
        </span>
      </span>
    );
  if (score === 10)
    return (
      <span className="text-5xl md:text-7xl">
        {scoreLevel.Master}
        <br />
        <span className={`text-6xl md:text-8xl ${starClass}`}>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
          <FontAwesomeIcon icon={faStar} size="1x"/>
        </span>
      </span>
    );
};

const Results: React.FC = (): JSX.Element => {
  // Ottieni lo stato del punteggio dallo store Redux
  const { score } = useSelector((state: RootState) => state.quiz);
  // Ottieni il messaggio di punteggio corrispondente
  const scoreMessage = getScoreMessage(score);

  return (
    <>
      <div className={classNames(ResultsCSS.container, "relative overflow-hidden min-h-screen w-full")}>
        {/* Messaggio di punteggio */}
        <div className="flex flex-col items-center space-y-4 text-center text-[30px] md:text-[60px] font-['Kanit']">
          {scoreMessage}
          <h2 className="mt-2 mx-5 text-[30px] md:text-[40px]">
            Il tuo punteggio è: {score}/10
          </h2>
          <button className="px-2 py-0.5 bg-gradient-to-r from-blue-300 via-green-600 to-blue-900 rounded-lg hover:opacity-90">
            <Link to="/" className="block px-4 py-2 md:px-8 md:py-4 md:text-[40px]">
              Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Results;


