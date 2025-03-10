import { expect } from '@wdio/globals'
describe('Home', ()=>{
    it('Open URL & ssert title', async()=>{
        await browser.url('/');

        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })
})