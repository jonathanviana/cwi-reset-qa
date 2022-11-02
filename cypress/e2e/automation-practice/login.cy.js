/// <reference types="cypress" />

describe("login successfully and alert message password is required", () => {
  beforeEach(() => {
    cy.visit(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  });

  //cenario 2:
  it("login successfully", () => {
    //Pré condição:
    cy.get("#email").type("register-new-email@gmail.com");
    //Ação:
    cy.get("#passwd").type("12345");
    cy.get("#SubmitLogin").click();
    //Asserção:
    cy.get(".info-account").contains(
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  });

  //cenario 3:
  it("alert message password is required", () => {
    //Pré condição:
    cy.get("#email").type("register-new-email@gmail.com");
    //Ação:
    cy.get("#SubmitLogin").click();
    //Asserção:
    cy.get(".alert.alert-danger").contains("Password is required.");
  });
});
