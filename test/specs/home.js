import { expect } from '@wdio/globals'
describe('Home', () => {
    beforeEach(async () => {
        await browser.url('/');
    })
    it('Open URL & assert title', async () => {

        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })
    it('Open about page & assert utl', async () => {
        await $('#menu-item-491').click()
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
    })

    it('Click get started btn & assert url constains get-started text', async () => {
        await $('#get-started').click()
        await expect(browser).toHaveUrl(expect.stringContaining('get-started'))
    })
    it('Open get started and retur to home page & assert url return to home page', async () => {
        await $('#get-started').click()
        await $('img[alt="Practice E-Commerce Site"]').click()
        await expect(browser).toHaveUrl(expect.not.stringContaining('get-started'))
    })

    it.only('Find heading element & assert the text', async () => {
        const headingEl = await $('.elementor-widget-container h1')

        //Extrainfo o texto e comparando atraves do to Equal 
        // const headingText = await headingEl.getText()
        // await expect(headingText).toEqual('Think different. Make different.')

        //Comparando diretamente utilizando o toHaveText
        await expect(headingEl).toHaveText('Think different. Make different.')
    })
})