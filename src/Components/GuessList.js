import React from "react";
import "./GuessList.css";

const GuessList = ({ guesses }) => {
  return (
    <div className="guessList">
      {guesses.map((guess, idx) => (
        <div key={idx} className="guessItem">
          <span>{guess.guess}</span>
          <span className="[guess.proximity]">{guess.proximity}</span>
        </div>
      ))}
    </div>
  );
};

export default GuessList;
