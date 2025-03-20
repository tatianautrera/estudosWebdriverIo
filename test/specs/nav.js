describe('Navigation Menu', () => {
    beforeEach(async () => {
        await browser.url('/');
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

        const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');

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

        const navLinks = await $$('#zak-primary-menu li[id*=menu]');

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

        await $('#zak-primary-menu').waitForDisplayed({timeout: 2000});

        const navLinks = await $$('#zak-primary-menu li[id*=menu]');

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