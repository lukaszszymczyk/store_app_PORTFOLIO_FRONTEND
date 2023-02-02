/// <reference types="Cypress"/>

describe("Cart", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it("add item to cart", () => {
    cy.contains('Add to cart',{timeout: 10000}).should('be.visible').click();
    cy.contains('Cart').click();
    cy.get('#cart-item-row').first().should('be.visible');
  })

})

//remove item
//change quantity
// test 2 itemy. jeden zwiekszam quantity, drugi usuwanie
