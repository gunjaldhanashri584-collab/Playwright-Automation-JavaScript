import { HomePage } from "./HomePage"
import { RegistrationPage } from "./RegistrationPage"
 import { LoginPage } from "./LoginPage"

   export  class POManager
     {
         constructor(page)
         {
             this.page=page
             this.homepage=new HomePage(this.page)
             this.registerpage=new RegistrationPage(this.page)
            this.loginpage=new LoginPage(this.page)
         }

          getHomePage()
          {
             return this.homepage
          }

          getRegistrationPage()
          {
             return this.registerpage
          }

          getLoginPage()
          {
            return this.loginpage
          }
     }
