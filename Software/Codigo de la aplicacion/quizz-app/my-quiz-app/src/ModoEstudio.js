import React from 'react';
import './ModoEstudio.css';
import modoEstudioImage from './ModoEstudio.png';

function ModoEstudio({ onStartQuiz }) {
  return (
    <div className="modo-estudio-container">
      <img src={modoEstudioImage} alt="Modo Estudio" className="modo-estudio-image" />
      <div className="modo-estudio-content">
        <h1>Modo Estudio</h1>
        <p>Bienvenido al Modo Estudio! Aqui podras revisar preguntas y respuestas a tu propio ritmo.</p>
        <button onClick={onStartQuiz} className="modo-estudio-button">Empezar Estudio!!</button>
      </div>
    </div>
  );
}

export default ModoEstudio;