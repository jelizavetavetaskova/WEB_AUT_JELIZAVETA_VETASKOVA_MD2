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

            AppointmentPage.facility().select("Seoul CURA Healthcare Center");
            AppointmentPage.checkbox().click();
            AppointmentPage.medicaid().click();
            AppointmentPage.calendar().click();
            AppointmentPage.days().contains("30").click();
            AppointmentPage.background().click();
            AppointmentPage.comment().type("CURA Healthcare Service");
            AppointmentPage.bookAppointment().click();
        })
    })
})