/// <reference types="cypress" />

describe("creating an account successfully", () => {
  beforeEach(() => {
    cy.visit(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  });

  //cenario 1:
  it("create an account", () => {
    //Pré condição:
    cy.get("#email_create").type("register-new-email@gmail.com");
    cy.get("#SubmitCreate").click();

    //Ação:
    cy.get("#id_gender2").type(2);
    cy.get("#customer_firstname").type("first name");
    cy.get("#customer_lastname").type("last name");
    cy.get("#passwd").type("12345");
    cy.get("#days").select(11);
    cy.get("#months").select(2);
    cy.get("#years").select("1992");
    cy.get("#company").type("company name");
    cy.get("#address1").type("avenica carlos gomes");
    cy.get("#address2").type("258");
    cy.get("#city").type("porto alegre");
    cy.get("#id_state").select(2);
    cy.get("#postcode").type("00000");
    cy.get("#other").type("notes");
    cy.get("#phone").type("5551999999999");
    cy.get("#phone_mobile").type("5551999999999");
    cy.get("#alias").type("alias@gmail.com");
    cy.get("#submitAccount").click();

    //Asserção:
    cy.get(".info-account").contains(
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  });
});
