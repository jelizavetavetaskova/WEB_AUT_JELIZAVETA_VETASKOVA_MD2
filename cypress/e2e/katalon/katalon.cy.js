import { AppointmentPage } from "../../pageObjects/appointmentPage";

describe("Katalon", () => {
    context("Make an Appointment tests", () => {
        beforeEach(() => {
            AppointmentPage.visit();
        });

        it("Make an Appointment", () => {
            AppointmentPage.makeAppointmentBtn().click();
            AppointmentPage.userNameField().type("John Doe");
            AppointmentPage.passwordField().type("ThisIsNotAPassword");
            AppointmentPage.loginBtn().click();
        })
    })
})