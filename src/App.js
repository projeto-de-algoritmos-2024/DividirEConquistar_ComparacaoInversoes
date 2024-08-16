import "./App.css";
import React, { useState } from "react";
import InputField from "./Components/InputField";
import GuessList from "./Components/GuessList";

const App = () => {
  const [wordToGuess] = useState("DICIONARIO"); // Palavra que o usuário precisa adivinhar
  const [inputs, setInputs] = useState(Array(wordToGuess.length).fill(""));
  const [guesses, setGuesses] = useState([]);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase();
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const guess = inputs.join("");
    if (guess.length === wordToGuess.length) {
      // Simulação de chamada para o backend
      const proximity = checkProximity(guess, wordToGuess);
      setGuesses([...guesses, { guess, proximity }]);
      setInputs(Array(wordToGuess.length).fill(""));
    }
  };

  const checkProximity = (guess, wordToGuess) => {
    const inversions = countInversions(guess, wordToGuess);
    if (inversions === 0) return "Parabéns Você acertou!";
    else return inversions + " pontos";
  };

  const countInversions = (guess, wordToGuess) => {
    // Lógica de contagem de inversões
    const inversions = 3;
    return inversions;
  };

  const getUniqueLetters = (word) => {
    const uniqueLetters = Array.from(new Set(word.split("")));
    return uniqueLetters.sort().join(", ");
  };

  const isInputComplete = () => {
    return inputs.every((input) => input.length === 1);
  };

  return (
    <div className="container">
      <h1>Word Guesser</h1>
      <p>
        Cada tentativa recebe uma pontuação, quanto menor a pontuação mais perto
        você está da palavra final! <br />A palavra é composta apenas pelas
        letras: {getUniqueLetters(wordToGuess)}
      </p>
      <div className="inputContainer">
        {inputs.map((input, idx) => (
          <InputField
            key={idx}
            value={input}
            onChange={(value) => handleInputChange(idx, value)}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="submitButton"
        disabled={!isInputComplete()}
      >
        Submit
      </button>
      <GuessList guesses={guesses} />
    </div>
  );
};

export default App;
