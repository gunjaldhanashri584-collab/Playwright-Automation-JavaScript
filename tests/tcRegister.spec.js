import { test, expect } from '@playwright/test'
import { POManager } from '../pageObjects/POManager'
test('tcregister', async ({ page }) => {

    const pomanger = new POManager(page)
    const homepage = pomanger.getHomePage()

    await homepage.goTo()
    await homepage.clickRegisterLink()

    const registerpage = pomanger.getRegistrationPage()
    
    await registerpage.registerUser('jhon', 'saw', 'texas', 'canada',
        'usa', '1232434', '44123068', '111111', 'js14', 'asdf')

    await registerpage.clickOnRegisterButton()

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})


