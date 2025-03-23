import { BasePage } from "../../../WEB_AUT_JELIZAVETA_VETASKOVA_MD1/cypress/pageObjects/basePage";

export class AppointmentPage extends BasePage {
    static get url() {
        return "";
    }

    static makeAppointmentBtn() {
        return cy.get("#btn-make-appointment")
    }

    static userNameField() {
        return cy.get("#txt-username");
    }

    static passwordField() {
        return cy.get("#txt-password");
    }

    static loginBtn() {
        return cy.get("#btn-login");
    }
}