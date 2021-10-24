const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

describe('test', () => {
    let driver
    beforeAll((done) => {
        new Builder().forBrowser('chrome').build().then((d) => {
            driver = d 
            done()
        });
    })
   
    it('Confirms the Provi Website is up', async() => {
    try {
        await driver.get('https://www.provi.com/'); 
        const title = await driver.getTitle()
        
        expect(title).toContain('Provi')              
    }   finally {
        await driver.quit();
    }
    })

    test('the User can navigate to the sign in page', async() => {
        // try {
        // await driver.getCurrentUrl()
        // } finally {
        // await driver.quit();
        // }      
    })

    test.todo('user can fill out the work email form and the contact form')
})
