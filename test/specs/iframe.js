import { $, expect, browser } from "@wdio/globals"
describe('IFrame',()=>{
    it('Working with iframe', async ()=>{
        await browser.url('/iframe-sample/')

        const iframe = await $('#advanced_iframe')
        await browser.switchFrame(iframe)
        await expect($(".ekit-wid-con h1")).toExist();

        await browser.switchToParentFrame();
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample')  
    })
})