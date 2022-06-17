const {test, expect} = require('@playwright/test');
const {customtest} = require("../utils/testBase");
const { LoginPage } = require('../pageObjects/LoginPage');
const dataset = JSON.parse(JSON.stringify(require("../utils/LoginTestData.json")));


for(const data of dataset)
{

test(`Client app login for ${data.testcaseData}`, async ({page})=>
{
    const loginpage = new LoginPage(page);
    loginpage.goTo();
    loginpage.validLogin(data.username, data.password);
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    await expect(page).toHaveTitle("Dashboard - TMS");
});


test(`Dashboard Page test for ${data.testcaseData}`, async ({page})=>
{
    const loginpage = new LoginPage(page);
    loginpage.goTo();
    loginpage.validLogin(data.username, data.password);
    loginpage.Logoutapplication();
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    await expect(page).toHaveTitle("Login - TMS");
});
}

customtest.only("Client app login", async ({page, testDataForLogin})=>
{
    const loginpage = new LoginPage(page);
    loginpage.goTo();
    loginpage.validLogin(testDataForLogin.username, testDataForLogin.password);
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    await expect(page).toHaveTitle("Dashboard - TMS");
});