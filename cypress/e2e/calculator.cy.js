describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // Do the number buttons update the display of the running total?
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })




//Do the arithmetical operations update the display with the result of the operation?
it('should do numerical operations', () => {
  cy.get('#number2').click();
  cy.get("#operator_add").click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '4')
  
})

// Can multiple operations be chained together?
it('should chain operations', () => {
  cy.get('#number4').click();
  cy.get("#operator_add").click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('#operator-multiply').click();
  cy.get('#number1').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '8')
})

// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('positive, negative, decimals and very large numbers', () => {
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '2.5')


// Divide by 0
  cy.get('#number8').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click()
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Infinity')

})

})



