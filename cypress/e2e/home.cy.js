describe('Home Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
    .intercept('POST', 'https://libretranslate.com/translate', {
      statusCode: 200,
      fixture: 'hello'
    })
  //   .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Denver&days=3&aqi=yes&alerts=no', {
  //     statusCode: 200,
  //     fixture: "Denver"
  //   })
  })
  
  it('Should have a Form with an input field on the home page', () => {
    cy.get('.App').contains('h1','Translitt')
    .url().should('include', '/')
    .get('form').should("be.visible")
    .get('input').should("be.visible")
    .get('form').contains('h2','Your translation will be displayed below and saved automatically')
    .get('form').contains('label','Choose a Language:')
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
  });
});  