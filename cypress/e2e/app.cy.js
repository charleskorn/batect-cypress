/// <reference types="Cypress" />

describe('app', () => {
  it('has a heading', () => {
      cy.visit('/index.html');
      cy.get('h1')
        .should('have.text', 'Hey');
  });
});
