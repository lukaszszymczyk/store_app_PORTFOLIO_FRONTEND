/// <reference types="Cypress"/>

import { APP_URL } from "../../src/config/constants";

const TIMEOUT = 10000;

describe("Cart", () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  })

  it("add item to cart", () => {
    //Arrange
    cy.get("#product-list-row-actions").first()
      .find('button').first({timeout: TIMEOUT}).should('be.visible');

    //Act
    cy.get("#product-list-row-actions").first()
      .find('button').first().click();

    //Assert
    cy.get('#store-app-header').find('button').click();
    cy.get('#cart-item-row').first().should('be.visible');
  })

  it("remove item from cart", () => {
    //Arrange
    cy.get("#product-list-row-actions").first()
      .find('button').first({timeout: TIMEOUT}).should('be.visible');
    cy.get("#product-list-row-actions").first()
      .find('button').first({timeout: TIMEOUT}).click();
    cy.get('#store-app-header').find('button').click();

    //Act
    cy.get("#cart-item-row-actions").find('button').last().click();

    //Assert
    cy.contains('Store App').click();
    cy.get('#store-app-header').find('button').click();
    cy.get('#cart-item-row').should('not.exist');
  })

  it("change quantity of item", () => {
    //Arrange
    cy.get("#product-list-row-actions").first()
      .find('button').first({timeout: TIMEOUT}).should('be.visible');
    cy.get("#product-list-row-actions").first()
      .find('button').first({timeout: TIMEOUT}).click();
    cy.get('#store-app-header').find('button').click();

    //Act
    cy.get("#cart-item-row-actions").find('button').first().click()

    //Assert
    cy.contains('Store App').click();
    cy.get('#store-app-header').find('button').click();
    cy.get('#cart-item-row').get('input').should('have.value', 2);
  })

})
