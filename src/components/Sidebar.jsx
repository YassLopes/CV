import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setQuote(data.slip.advice);
      } catch (error) {
        console.error("Error fetching the quote:", error);
        setQuote(null);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="sidebar">
      <h1>YASMIN DO ÉDEM SANTANA LOPES</h1>
      <nav>
        <a href="/">Currículo</a>
        <a href="/jogo">Jogo da Senha</a>
      </nav>
      <div className="bottom">
        {quote && (
          <div className="quote-section">
            <h3>Conselho:</h3>
            <p className="quote">{quote}</p>
          </div>
        )}
        <div className="contact">
          <p>Telefone: (81) 9.8245-2163</p>
          <p>Email: yasslopes2001@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yasmin-s-lopes"
              target="_blank"
              rel="noopener noreferrer"
            >
              yasmin-s-lopes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
