describe('loginUser', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('uData');
  });
  it('should login and delete successfully', function () {
    cy.visit(this.uData.baseUrl);
    cy.contains('Signup / Login').click();
    cy.loginUser(this.uData.email, this.uData.password);
    cy.contains('Logged in as etuna').should('be.visible');    
    cy.deleteAccount();
  });
});