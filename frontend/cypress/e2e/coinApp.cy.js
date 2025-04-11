/// <reference types="cypress" />

const USER_ACCOUNT_NUMBER = "74213041477477406320783754";

describe("Coin.Bank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");

    cy.get('[data-test-id="auth-form"]').within(() => {
      cy.get("input[name=login]").type("developer");
      cy.get("input[name=password]").type("skillbox");
      cy.root().submit();
    });
  });

  it("Авторизация проходит успешно", () => {
    cy.url().should("include", "/accounts");
    cy.get("h1").should("contain", "Ваши счета");
  });

  it("Страница содержит список счетов клиента", () => {
    cy.get('[data-test-id="accounts-list"]')
      .should("exist")
      .within(() => {
        cy.get(".card")
          .should("have.length.at.least", 1)
          .first()
          .find(".card__id")
          .should("be.visible");
      });
  });

  it("Создание нового счёта проходит успешно", () => {
    const getAccounts = () => {
      return cy.get('[data-test-id="accounts-list"]').children();
    };

    getAccounts()
      .its("length")
      .then((l) => {
        cy.contains("Создать новый счёт").click();
        cy.reload();
        getAccounts().should("have.length", l + 1);
      });
  });

  it("Перевод денежных средств проходит успешно", () => {
    const amount = "10";
    const accountNumber = "61253747452820828268825011";

    const getBalance = () => {
      return cy
        .get('[data-test-id="account-balance"]')
        .invoke("text")
        .then(parseFloat);
    };

    const transferMoney = () => {
      cy.get('[data-test-id="transaction-form"]').within(() => {
        cy.get("input[name=account]").type(accountNumber);
        cy.get("input[name=amount]").type(amount);
        cy.root().submit();
      });
    };

    cy.get(`[data-test-id="card-${USER_ACCOUNT_NUMBER}"]`).within(() => {
      cy.get('[data-test-id="open-info"]').click({ force: true });
    });

    getBalance().then((balance) => {
      transferMoney();

      cy.reload();

      getBalance().should("eq", balance - parseFloat(amount));
    });
  });
});
