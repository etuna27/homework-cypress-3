describe('Register User Test', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('user');
  });

  it('should register successfully', function () {
    cy.visit(this.user.baseUrl);
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="signup-email"]').type(this.user.email); 
    cy.get('[data-qa="signup-name"]').type(this.user.name);
    cy.get('[data-qa="signup-button"]').click();
    cy.fillRegistrationForm(this.user);
    cy.get('[data-qa="account-created"]').should('be.visible');
  });
});