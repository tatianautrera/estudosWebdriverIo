import homePage from "../pageobjects/home-page";
describe('Navigation Menu', () => {
    beforeEach(async () => {
        await homePage.open();
    })
    it('Get the text of all menu items & assert then', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];

        const navLinks = await homePage.navComponent.linksNavMenuWith2Selectors;

        for( const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks)
    })

    it('Get the text of all menu items & assert then', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];

        const navLinks = await homePage.navComponent.linksNavMenuWith1Selectors;

        for( const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks)
    })

    it('Get the text of all menu items & assert then using waitForDisplayed', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];

        await homePage.navComponent.menu.waitForDisplayed({timeout: 2000});

        const navLinks = await homePage.navComponent.linksNavMenuWith1Selectors;

        for( const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks)

        //waitForClickable - Elemento clicavel na tela
        //waitForDisplayed - Elemento exibido na tela
        //waitForEnable - Elemento habilitado na tela
        //waitForExist - Elemento existe no DOM
        //waitUntil - utiliza uma condição particular
     })
})