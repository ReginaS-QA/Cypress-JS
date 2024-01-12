describe('Тестирование формы авторизации', function () {

  it('Верный логин, верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru').type('{enter}');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('exist');
   })

  it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
  })

  it('Верный логин, неверный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru').type('{enter}');
    cy.get('#loginButton').isdisabled;
    cy.get('#pass').type('iLoveqastudio5');
    cy.get('#loginButton').isenabled;
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('exist');
  })

  it('Неверный логин, верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru').type('{enter}');
    cy.get('#loginButton').isdisabled;
    cy.get('#pass').type('iLoveqastudio5');
    cy.get('#loginButton').isenabled;
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('exist');
  })

  it('Проверка с некорректной валидацией', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru').type('{enter}');
    cy.get('#loginButton').isdisabled;
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').isenabled;
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('exist');
  })

  it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru').type('{enter}');
    cy.get('#loginButton').isdisabled;
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').isenabled;
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('exist');
  })

})