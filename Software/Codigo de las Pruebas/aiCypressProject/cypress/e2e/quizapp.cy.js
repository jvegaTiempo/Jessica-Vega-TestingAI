describe('End-to-End Tests for Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should load the homepage', () => {
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('img[alt="Modo Estudio"]').should('be.visible'); // Verifica que la imagen principal sea visible
    });

    it('should display an Modo Studio image', () => {
        cy.get('img[alt="Modo Estudio"]').should('be.visible'); // Verifica que la imagen del Modo Estudio esté presente
    });

    it('should display Modo Estudio header', () => {
        cy.contains('h1', 'Modo Estudio').should('be.visible'); // Verifica que la barra de navegación esté presente
    });

    it('should display Subheader', () => {
        cy.contains('p', 'Bienvenido al Modo Estudio! Aqui podras revisar preguntas y respuestas a tu propio ritmo.')
            .should('be.visible'); // Verifica que el subencabezado esté presente
    });

    it('should display Empezar Estudio button', () => {
        cy.contains('button', 'Empezar Estudio!!').should('be.visible'); // Verifica que el botón "Empezar Estudio" esté presente
        cy.contains('button', 'Empezar Estudio!!').should('have.text', 'Empezar Estudio!!'); // Verifica que el botón tenga el texto correcto
    });

    it('Empezar Estudio button should redirect to Question 1', () => {
        cy.contains('button', 'Empezar Estudio!!').click();
        cy.contains('h2', 'Modo Estudio - Pregunta 1/10').should('be.visible'); // Verifica que la página de la pregunta 1 esté visible
    });

    it('Reiniciar button should return to Modo Estudio main page', () => {
        cy.contains('button', 'Empezar Estudio!!').click();
        cy.contains('h2', 'Modo Estudio - Pregunta 1/10').should('be.visible'); // Verifica que la página de la pregunta 1 esté visible
        cy.contains('button', 'Reiniciar').click();
        cy.wait(4000); // Espera un segundo para que la navegación ocurra
        cy.contains('h1', 'Modo Estudio').should('be.visible'); // Verifica que la barra de navegación esté presente
        cy.contains('p', 'Bienvenido al Modo Estudio! Aqui podras revisar preguntas y respuestas a tu propio ritmo.')
            .should('be.visible'); // Verifica que el subencabezado esté presente
    });

    // Agrega más pruebas según las funcionalidades de tu aplicación
});