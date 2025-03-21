import { $, expect, browser } from "@wdio/globals"
import contactPage from "../pageobjects/contact-page";
describe('Contact Menu', () => {
    beforeEach(async () => {
        await contactPage.open()
    })
    it('Fill all the inputs fields, subimit and assert success message', async () => {
        await contactPage.submitForm('Tatiana', 'Tatiana@teste.com', '111111111111')

        expect(contactPage.txtMessageSuccess).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        //expect($('.everest-forms-notice--success')).toHaveText(expect.stringContaining('Thanks for contacting us! We will be in touch with you shortly'))
    })
})