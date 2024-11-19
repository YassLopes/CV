import { useState } from "react";
import "./JogoDaSenha.css";

const generateCombination = () =>
  Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");

const JogoDaSenha = () => {
  const [combination, setCombination] = useState(generateCombination());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);

  const checkGuess = () => {
    if (guess.length !== 4) return;

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === combination[i]) bulls++;
      else if (combination.includes(guess[i])) cows++;
    }

    setAttempts([
      { guess, result: `${bulls} Bulls, ${cows} Cows` },
      ...attempts,
    ]);
    setGuess("");
  };

  const resetGame = () => {
    setCombination(generateCombination());
    setAttempts([]);
    setGuess("");
    alert("Nova senha gerada!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkGuess();
    }
  };

  return (
    <div className="jogo-da-senha">
      <h2>Jogo da Senha (Bulls and Cows)</h2>
      <div className="input-row">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength="4"
          placeholder="Digite seu chute (4 dígitos)"
        />
        <button onClick={checkGuess}>Testar</button>
        <button onClick={() => alert(`Senha: ${combination}`)}>
          Mostrar
        </button>
        <button className="new-password-button" onClick={resetGame}>
          Nova senha
        </button>
      </div>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            <span>Guess:</span> {attempt.guess} <span>Result:</span>{" "}
            {attempt.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JogoDaSenha;
