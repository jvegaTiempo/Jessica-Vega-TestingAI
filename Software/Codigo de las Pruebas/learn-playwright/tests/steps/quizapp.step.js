const { Given, When, Then, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser, page;

setDefaultTimeout(60 * 1000);

Given('que estoy en la página de la aplicación QuizApp', async () => {
  browser = await chromium.launch({ headless: false }); // Cambiar a false para ver la ejecución
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('http://localhost:3000/');
});

When('hago clic en el botón {string}', async (buttonText) => {
  // Esperar a que el botón esté visible antes de hacer clic
  await page.waitForSelector(`text=${buttonText}`);
  await page.click(`text=${buttonText}`);
});

Then('debería ver el texto {string} como encabezado de la pagina principal de Preguntas', async (findText) => {
  // Esperar a que el encabezado esté visible
  await page.waitForSelector('h2');
  const headerText = await page.locator('h2').innerText();
  expect(headerText).toContain(findText);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});