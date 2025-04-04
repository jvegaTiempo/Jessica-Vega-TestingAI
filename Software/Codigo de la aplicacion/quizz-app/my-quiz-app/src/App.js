import React, { useState } from 'react';
import ModoEstudio from './ModoEstudio';
import QuizApp from './QuizApp'; // Importa el componente QuizApp
import { questions } from './QuizApp'; // Importa el array de preguntas desde QuizApp.js
import './QuizApp.css'; // Importa los estilos de QuizApp

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [modoEstudio, setModoEstudio] = useState(true);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setModoEstudio(true);
  };

  return (
    <div className="App">
      {modoEstudio ? (
        <ModoEstudio onStartQuiz={() => setModoEstudio(false)} />
      ) : (
        <QuizApp
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
          showScore={showScore}
          score={score}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;