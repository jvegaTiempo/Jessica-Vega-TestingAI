import React, { useState } from 'react';
import './QuizApp.css'; // Importa los estilos de QuizApp

// Exporta el array de preguntas
export const questions = [
  {
    id: 1,
    question: "¿Cuál de las siguientes NO es una técnica de prueba de caja negra según ISTQB?",
    options: [
      "Partición de equivalencia",
      "Análisis de valor límite",
      "Prueba de cobertura de decisión",
      "Prueba de tabla de decisión"],
    correctAnswer: 2, // Índice de la respuesta correcta
  },
  {
    id: 2,
    question: 'Las Pruebas Regresivas deben de realizarse:',
    options: [
      "Despues de cada cambio",
      "Solo cuando un defecto es encontrado",
      "Solo para nuevas funcionalidades",
      "Solo para defectos criticos"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: '¿Cual de las siguentes opciones NO PERTENECE a los Niveles de Pruebas?',
    options: [
      "Pruebas Unitarias",
      "Pruebas de Integracion",
      "Pruebas de Sistema",
      "Pruebas de Performance"
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: '¿Cual es el principal objetivo de un Caso de Prueba?',
    options: [
      "Encontrar defectos",
      "Verificar requerimientos",
      "Documentar resultados de pruebas",
      "Asegurar calidad del codigo"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: 'El Testing debe de finalizarse cuando: ',
    options: [
      "Todos los casos de prueba han sido ejecutados",
      "todos los defectos han sido solucionados",
      "La fecha limite ha sido alcanzada",
      "El precupuesto se ha terminado"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: '¿Cual de las siguientes es una Tecnica de Pruebas Estatica?',
    options: [
      "Pruebas Unitarias",
      "Pruebas de Integration",
      "Code Review",
      "Pruebas de Sistema"
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: '¿Cual es el principal objetivo de las Pruebas de Performance?',
    options: [
      "Encontrar defectos",
      "Verificar requerimientos",
      "Asegurar la estabilidad del sistema",
      "Medir la velocidad y escalabilidad del sistema"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: 'Las Pruebas Regresivas deben de realizarse:',
    options: [
      "Despues de cada cambio",
      "Solo cuando un defecto es encontrado",
      "Solo para nuevas funcionalidades",
      "Solo para defectos criticos"],
    correctAnswer: 0
    },
  {
    id: 9,
    question: '¿Cual es el principal objetivo de las Pruebas de Performance?',
    options: [
      "Encontrar defectos",
      "Verificar requerimientos",
      "Asegurar la estabilidad del sistema",
      "Medir la velocidad y escalabilidad del sistema"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "¿Cuál de los siguientes es un tipo de prueba funcional?",
    options: [
      "Prueba de rendimiento",
      "Prueba de usabilidad",
      "Prueba de caja negra",
      "Prueba de seguridad",
    ],
    correctAnswer: 2,
  },
  // Agrega más preguntas según sea necesario
];

const QuizApp = ({ currentQuestion, questions, handleAnswerOptionClick, showScore, score, restartQuiz }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index); // Actualiza la opción seleccionada
  };

  const handleNextQuestion = () => {
    handleAnswerOptionClick(selectedOption); // Llama a la función para manejar la respuesta
    setSelectedOption(null); // Reinicia la opción seleccionada al avanzar a la siguiente pregunta
  };

  if (showScore) {
    return (
      <div className="quiz-completed">
        <h2>¡Quiz completado!</h2>
        <p>
          Respuestas correctas: {score} de {questions.length}
        </p>
        <button className="restart-button" onClick={restartQuiz}>
          Reiniciar Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Modo Estudio - Pregunta {currentQuestion + 1}/{questions.length}</h2>
      </div>
      <div className="question-container">
        <p>{questions[currentQuestion].question}</p>
      </div>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            {String.fromCharCode(65 + index)}) {option}
          </button>
        ))}
      </div>
      <div className="controls">
        <button
          className="control-button"
          onClick={handleNextQuestion}
          disabled={selectedOption === null} // Deshabilita el botón si no hay una opción seleccionada
        >
          Siguiente
        </button>
        <button
          className="control-button"
          onClick={restartQuiz}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
