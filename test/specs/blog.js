import { $, expect, browser } from "@wdio/globals"
import blogPage from "../pageobjects/blog-page";
describe('Blog Menu', () => {
    beforeEach(async () => {
        await blogPage.open();
    })
    it('Get the list of all recent posts & assert the length of each list item > 1', async () => {
        const recentPostsList = await blogPage.listRecentPosts

        for( const item of recentPostsList){
            const text = await item.getText();
            expect(text.length).toBeGreaterThan(1) 
        }  
    })

    it('Acces Blog page and assert the title de post must more than 10 caracteres', async () => {
        const recentPostsList = await blogPage.listRecentPosts
        //expect(recentPostsList.length).toEqual(5)
        expect(recentPostsList).toHaveLength(5)
    })
})