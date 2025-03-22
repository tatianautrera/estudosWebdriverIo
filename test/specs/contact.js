import { $, expect, browser } from "@wdio/globals"
import contactPage from "../pageobjects/contact-page";
import { faker } from '@faker-js/faker';
import AllureReporter from "@wdio/allure-reporter";
describe('Contact Menu', () => {
    beforeEach(async () => {
        await contactPage.open()
    })
    it('Fill all the inputs fields, subimit and assert success message', async () => {
        AllureReporter.addFeature("Contact");
        AllureReporter.addSeverity("Critical")
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number())

        expect(contactPage.txtMessageSuccess).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        //expect($('.everest-forms-notice--success')).toHaveText(expect.stringContaining('Thanks for contacting us! We will be in touch with you shortly'))
    })
})