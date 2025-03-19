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

    it.only('Get the text of all menu items & assert then', async () => {
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
})