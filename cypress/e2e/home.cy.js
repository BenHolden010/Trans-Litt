describe('Home Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
    .intercept('POST', 'https://libretranslate.com/translate', {
      statusCode: 200,
      fixture: 'hello'
    })
  })
  
  it('Should have a Form with an input field on the home page', () => {
    cy.get('.App').contains('h1','Translitt')
    .url().should('include', '/')
    .get('form').should("be.visible")
    .get('input').should("be.visible")
    .get('form').contains('h2','Your translation will be displayed below and saved automatically')
    .get('form').contains('label','Choose a Target Language:')
    .get('label').contains('select','Spanish')
    .get('button').contains('SUBMIT')
    .get('button').contains('Saved Translations')
  });
  
  it('user sees the input, types hello, and sees the page render hola, then views the result and deletes it', () => {
    cy.get('input').type('hello')
    .get('select').select('Spanish')
    .get('.focus-page').click()
    .get('form').contains('h3','hola')
    .get('.saved-button').click()
    .url().should('include','/saved-translations')
    .get('.card').should('be.visible')
    .get('.card').contains('h3','hello')
    .get('.card').contains('p','hola')
    .get('.card').contains('button','🗑')
    .get('button').click()
    .get('.card').should('not.exist')
    .get('.translations-container').contains('h2','No saved translations yet! Go back to the home page to add translations.')
    .get('.card').should('have.length', 0)
  });
  it('should not be able to add two of the same Translation cards', () => {
    cy.get('input').type('hello')
    .get('select').select('Spanish')
    .get('.focus-page').click()
    .get('.focus-page').click()
    .get('.focus-page').click()
    .get('.focus-page').click()
    .get('form').contains('h3','hola')
    .get('.saved-button').click()
    .url().should('include','/saved-translations')
    .get('.card').should('have.length', 1)
  });
  it('Should be able to catch server errors and display a message to the user.', () => {
    cy.intercept('POST', 'https://libretranslate.com/translate', {
      statusCode: 404,
      fixture: 'hello'
    })
    cy.get('input').type('hello')
    .get('select').select('Spanish')
    .get('.focus-page').click()
    .get('.serverError').contains('p','Server is down for repair, try again later.')
  })
});  