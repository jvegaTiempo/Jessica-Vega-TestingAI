Feature: Pruebas de la interfaz de usuario de QuizApp

  Scenario: Verificar el botón de empezar estudio
    Given que estoy en la página de la aplicación QuizApp
    When busco el botón "Empezar Estudio"
    Then el botón "Empezar Estudio" debería ser visible

    
    Given que estoy en la página de la aplicación QuizApp
    When hago clic en el botón "Empezar Estudio"
    Then debería ver el texto "Modo Estudio - Pregunta 1/10" como encabezado de la pagina principal de Preguntas

  Scenario: Completar un campo de texto
    Given que estoy en la página de la aplicación QuizApp
    When ingreso "Mi respuesta" en el campo con el placeholder "Escribe tu respuesta"
    Then el campo con el placeholder "Escribe tu respuesta" debería contener "Mi respuesta"

  Scenario: Seleccionar una opción de un menú desplegable
    Given que estoy en la página de la aplicación QuizApp
    When selecciono la opción "Opción 1" del menú desplegable "Selecciona una opción"
    Then la opción seleccionada en el menú desplegable "Selecciona una opción" debería ser "Opción 1"