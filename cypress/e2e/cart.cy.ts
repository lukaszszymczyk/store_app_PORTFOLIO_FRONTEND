/// <reference types="Cypress"/>

import { APP_URL } from "../../src/config/constants";

const TIMEOUT = 10000;

describe("Cart", () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  })

  it("add item to cart", () => {
    //Arrange
    cy.contains('Add to cart',{timeout: TIMEOUT}).should('be.visible');

    //Act
    cy.contains('Add to cart').click();

    //Assert
    cy.contains('Cart').click();
    cy.get('#cart-item-row').first().should('be.visible');
  })

  it("remove item from cart", () => {
    //Arrange
    cy.contains('Add to cart',{timeout: TIMEOUT}).should('be.visible');
    cy.contains('Add to cart').click();
    cy.contains('Cart').click();

    //Act
    cy.contains('Remove from cart').click();

    //Assert
    cy.contains('Home').click();
    cy.contains('Cart').click();
    cy.get('#cart-item-row').should('not.exist');
  })

  it("change quantity of item", () => {
    //Arrange
    cy.contains('Add to cart',{timeout: TIMEOUT}).should('be.visible');
    cy.contains('Add to cart').click();
    cy.contains('Cart').click();

    //Act
    cy.get('#cart-item-row').get('input').type('{uparrow}').trigger('change');

    //Assert
    cy.contains('Home').click();
    cy.contains('Cart').click();
    cy.get('#cart-item-row').get('input').should('have.value', 2);
  })

})
