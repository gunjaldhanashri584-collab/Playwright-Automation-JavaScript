// import { expect } from '../fixtures/testfixture'
import { POManager } from '../pageObjects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'
test('tcregister', async ({ page, testdataForregistration }) => {


  
      const pomanger = new POManager(page)
      const homepage = pomanger.getHomePage()
  
      await homepage.goTo()
      await homepage.clickRegisterLink()
  
      const registerpage = pomanger.getRegistrationPage()
      
      await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )

  
      await registerpage.clickOnRegisterButton()
  
      await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
      await page.waitForTimeout(2000)
  })