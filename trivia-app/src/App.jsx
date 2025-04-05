import { useState } from "react";
import "./App.css";
import GenerateButton from "../components/GenerateButton";
import { useEffect } from "react";
import AnswerButton from "../components/AnswerButton";

function App() {
  const API_URL = `https://the-trivia-api.com/v2/questions`;
  const [questions, setQuestions] = useState([]);

  const randomize = (correct, incorrect) => {
    incorrect.push(correct);
    return incorrect
      .map((q) => q.toUpperCase())
      .sort(() => Math.random() - 0.5);
  };

  const fetchData = async () => {
    setQuestions([]);
    const response = await fetch(API_URL);
    const data = await response.json();

    const randomizedData = data.map((q) => ({
      ...q,
      allAnswers: randomize(q.correctAnswer, q.incorrectAnswers),
    }));

    setQuestions(randomizedData);
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <h1>Trivia Game</h1>
      <GenerateButton onClick={fetchData}></GenerateButton>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>
            <h2>{q.question.text}</h2>
            <ul>
              {q.allAnswers.map((ans, i) => (
                <li key={i}>
                  <AnswerButton
                    key={i}
                    label={ans}
                    answer={q.correctAnswer}
                  ></AnswerButton>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
