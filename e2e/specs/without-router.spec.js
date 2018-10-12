describe('without router', () => {
  describe('when loaded first time', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000');
    });

    it('renders all menu items with a correct targets', () => {
      cy.contains('Home').should('have.attr', 'href', '');
      cy.contains('Products').should('have.attr', 'href', '/#products');
      cy.contains('Running').should('have.attr', 'href', '/running');
      cy.contains('Shoes').should('have.attr', 'href', '/running#shoes');
      cy.contains('Barefoot').should('have.attr', 'href', '/running/barefoot');
      cy.contains('Minimal').should('have.attr', 'href', '/running#minimal');
      cy.contains('Yoga').should('have.attr', 'href', '/yoga');
      cy.contains('Mats').should('have.attr', 'href', '/yoga/mats');
      cy.contains('Clothing').should(
        'have.attr',
        'href',
        'https://www.yogarebel.com'
      );
      cy.contains('Tops').should('have.attr', 'href', '/yoga/tops');
      cy.contains('About').should('have.attr', 'href', '/about');
      cy.contains('Company').should('have.attr', 'href', '/about#company');
      cy.contains('Career').should('have.attr', 'href', '/about/career');
      cy.contains('Design').should('have.attr', 'href', '/about/career/design');
      cy.contains('Development').should(
        'have.attr',
        'href',
        '/about/career#development'
      );
      cy.contains('Github').should('have.attr', 'href', 'https://github.com');
      cy.contains('Press').should('have.attr', 'href', '/#press');
    });

    it('all root items are visible', () => {
      cy.contains('Home').should('be.visible');
      cy.contains('Products').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Github').should('be.visible');
      cy.contains('Press').should('be.visible');
    });

    it('first level is open', () => {
      // "Products" is open
      cy.contains('Running').should('be.visible');
      cy.contains('Yoga').should('be.visible');

      // "About" is open
      cy.contains('Company').should('be.visible');
      cy.contains('Career').should('be.visible');
    });

    it('second level is open', () => {
      // "Running" is open
      cy.contains('Shoes').should('be.visible');

      // "Yoga" is open
      cy.contains('Mats').should('be.visible');
      cy.contains('Clothing').should('be.visible');

      // "Career" is open
      cy.contains('Design').should('be.visible');
      cy.contains('Development').should('be.visible');
    });

    it('third level is closed', () => {
      // "Shoes" is closed
      cy.contains('Barefoot').should('not.be.visible');
      cy.contains('Minimal').should('not.be.visible');

      // "Clothing" is closed
      cy.contains('Tops').should('not.be.visible');
    });
  });

  describe('when a target URL of menu item visited', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/running/barefoot');
    });

    it('opens a corresponding level so the item is visible in menu', () => {
      cy.contains('Barefoot').should('be.visible');
    });

    it('assigns active class to an item which target URL is visited', () => {
      cy.contains('Barefoot')
        .parent()
        .should('have.class', 'NavigationItem--active');
    });
  });
});
