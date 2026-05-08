describe('Login with incorrect email', () => {
  it('should show error message for incorrect credentials', () => {
    cy.visit('http://automationexercise.com');
    cy.get('body').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.get('.login-form h2').should('contain', 'Login to your account');
    cy.get('[data-qa="login-email"]').type('wrongemail@gmail.com');
    cy.get('[data-qa="login-password"]').type('WrongPassword123');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form p').should('be.visible')
      .and('contain', 'Your email or password is incorrect!');
  });
});