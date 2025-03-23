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

    static facility() {
        return cy.get("#combo_facility");
    }

    static checkbox() {
        return cy.get("#chk_hospotal_readmission");
    }

    static medicaid() {
        return cy.get("#radio_program_medicaid");
    }

    static calendar() {
        return cy.get(".input-group-addon");
    }

    static days() {
        return cy.get(".day");
    }

    static comment() {
        return cy.get("#txt_comment");
    }

    static background() {
        return cy.get("body"); // for clicking to the side to close the calendar widget
    }

    static bookAppointment() {
        return cy.get("#btn-book-appointment");
    }

    static facilityCheck() {
        return cy.get("#facility");
    }

    static readmissionCheck() {
        return cy.get("#hospital_readmission");
    }

    static programCheck() {
        return cy.get("#program");
    }

    static dateCheck() {
        return cy.get("#visit_date");
    }

    static commentCheck() {
        return cy.get("#comment");
    }
}