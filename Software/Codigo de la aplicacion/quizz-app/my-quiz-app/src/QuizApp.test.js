import { render, screen, fireEvent } from '@testing-library/react';
import QuizApp from './QuizApp';

const mockQuestions = [
  {
    id: 1,
    question: "¿Cuál de las siguientes NO es una técnica de prueba de caja negra según ISTQB?",
    options: [
      "Partición de equivalencia",
      "Análisis de valor límite",
      "Prueba de cobertura de decisión",
      "Prueba de tabla de decisión",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "¿Cuál de los siguientes es un tipo de prueba funcional?",
    options: [
      "Prueba de rendimiento",
      "Prueba de usabilidad",
      "Prueba de caja negra",
      "Prueba de seguridad",
    ],
    correctAnswer: 2,
  },
];

const mockHandleAnswerOptionClick = jest.fn();
const mockRestartQuiz = jest.fn();

describe('QuizApp Component', () => {
  test('renders the first question and options', () => {
    render(
      <QuizApp
        currentQuestion={0}
        questions={mockQuestions}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
        showScore={false}
        score={0}
        restartQuiz={mockRestartQuiz}
      />
    );

    // Verifica que la pregunta se renderice
    expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();

    // Verifica que las opciones se rendericen
    mockQuestions[0].options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });

    // Verifica que el botón "Siguiente" esté habilitado inicialmente
    expect(screen.getByText('Siguiente')).toBeEnabled();
  });

  test('enables the "Siguiente" button after selecting an option', () => {
    render(
      <QuizApp
        currentQuestion={0}
        questions={mockQuestions}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
        showScore={false}
        score={0}
        restartQuiz={mockRestartQuiz}
      />
    );

    // Selecciona una opción
    const optionButton = screen.getByText('C) Prueba de cobertura de decisión');
    fireEvent.click(optionButton);

    // Verifica que el botón "Siguiente" esté deshabilitado
    expect(screen.getByText('Siguiente')).toBeDisabled();
  });

  test('calls handleAnswerOptionClick when "Siguiente" is clicked', () => {
    render(
      <QuizApp
        currentQuestion={0}
        questions={mockQuestions}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
        showScore={false}
        score={0}
        restartQuiz={mockRestartQuiz}
      />
    );

    // Selecciona una opción
    const optionButton = screen.getByText('C) Prueba de cobertura de decisión');
    fireEvent.click(optionButton);

    // Haz clic en el botón "Siguiente"
    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);

    // Verifica que handleAnswerOptionClick haya sido llamado
    expect(mockHandleAnswerOptionClick).toHaveBeenCalledWith(2);
  });

  test('renders the score screen when showScore is true', () => {
    render(
      <QuizApp
        currentQuestion={0}
        questions={mockQuestions}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
        showScore={true}
        score={1}
        restartQuiz={mockRestartQuiz}
      />
    );

    // Verifica que se muestre la pantalla de resultados
    expect(screen.getByText('Terminaste!!')).toBeInTheDocument();
    expect(screen.getByText('Respuestas correctas: 1 de 2')).toBeInTheDocument();

    // Verifica que el botón "Reiniciar Quiz" se renderice
    expect(screen.getByText('Reiniciar Quiz')).toBeInTheDocument();
  });

  test('calls restartQuiz when "Reiniciar Quiz" is clicked', () => {
    render(
      <QuizApp
        currentQuestion={0}
        questions={mockQuestions}
        handleAnswerOptionClick={mockHandleAnswerOptionClick}
        showScore={true}
        score={1}
        restartQuiz={mockRestartQuiz}
      />
    );

    // Haz clic en el botón "Reiniciar Quiz"
    const restartButton = screen.getByText('Reiniciar Quiz');
    fireEvent.click(restartButton);

    // Verifica que restartQuiz haya sido llamado
    expect(mockRestartQuiz).toHaveBeenCalled();
  });
});