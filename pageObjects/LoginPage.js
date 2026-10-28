 export class LoginPage
  {
     constructor(page)
     {
         this.page=page 
         this.username=page.locator("//input[@name='username']")
         this.password=page.locator("//input[@name='password']")
         this.loginbutton=page.locator("//input[@value='Log In']")
     }

     async clickToApplication(username,password)
     {
        await this.username.fill(username)
        await this.password.fill(password)
     }

     async clickOnloginButton()
     {
           await this.loginbutton.click()
     }
  }
