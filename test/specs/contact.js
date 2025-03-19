describe('Contact Menu', () => {
    beforeEach(async () => {
        await browser.url('/');
    })
    it('Fill all the inputs fields, subiit and assert success message', async () => {
        //SetValue = apaga o valor e depois preenche
        //addValue - apenas escreeve o texto

        await $('#menu-item-493').click();
        await $('.contact-name input').setValue('Tatiana')
        await $('.contact-email input').setValue('Tatiana@teste.com')
        await $('.contact-phone input').setValue('111111111111')
        await $('button[type=submit]').click()
        expect($('.everest-forms-notice--success')).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        //expect($('.everest-forms-notice--success')).toHaveText(expect.stringContaining('Thanks for contacting us! We will be in touch with you shortly'))

    })
})