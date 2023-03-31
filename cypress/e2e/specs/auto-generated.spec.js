describe('with items automatically generated from vue-router routes', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000');
  });

  it('renders all menu items with a correct targets', () => {
    cy.contains('Home').should('have.attr', 'href', '#/');
    cy.contains('Running').should('have.attr', 'href', '#/running');
    cy.contains('Barefoot').should('have.attr', 'href', '#/running/barefoot');
    cy.contains('Yoga').should('have.attr', 'href', '#/yoga');
    cy.contains('Mats').should('have.attr', 'href', '#/yoga/mats');
    cy.contains('Tops').should('have.attr', 'href', '#/yoga/tops');
    cy.contains('About').should('have.attr', 'href', '#/about');
    cy.contains('Career').should('have.attr', 'href', '#/about/career');
    cy.contains('Design').should('have.attr', 'href', '#/about/career/design');
  });
});
