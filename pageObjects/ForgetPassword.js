class ForgetPassword
{
    constructor(page)
    {
        this.page = page;
        this.ForgetPassword = page.locator(".text-muted.font-13");
        this.Username = page.locator("#email");
        this.resetbutton = page.locator("button[type='submit']");
    }

    async NavaigateonForgetpasswordpage(username)
    {
        await this.ForgetPassword.click();
        await this.Username.fill(username);
        await this.resetbutton.click();
    }
}


module.exports = {ForgetPassword};