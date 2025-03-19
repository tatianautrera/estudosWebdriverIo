describe('Blog Menu', () => {
    beforeEach(async () => {
        await browser.url('/blog');
    })
    it('Get the list of all recent posts & assert the length of each list item > 1', async () => {
        const recentPostsList = await $$('#recent-posts-3 li')

        for( const item of recentPostsList){
            const text = await item.getText();
            expect(text.length).toBeGreaterThan(1) 
        }  
    })

    it('Acces Blog page and assert the title de post must more than 10 caracteres', async () => {
        const recentPostsList = await $$('#recent-posts-3 li')
        //expect(recentPostsList.length).toEqual(5)
        expect(recentPostsList).toHaveLength(5)
    })
})