const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ForgetPassword } = require('../pageObjects/ForgetPassword');

test('Client app login', async ({page})=>
{
    const username = "nikhil@2stallions.com";
    const loginpage = new LoginPage(page);
    const forgetpassword = new ForgetPassword(page);
    loginpage.goTo();
    forgetpassword.NavaigateonForgetpasswordpage(username);
    await page.waitForLoadState('networkidle');
});
