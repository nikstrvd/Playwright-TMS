class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.loginbutton = page.locator(".btn.btn-primary.btn-round.btn-block.waves-effect.waves-light");
        this.Username = page.locator("#email");
        this.Password = page.locator("#password");
        this.userlogindropdown = page.locator(".ml-1.nav-user-name.hidden-sm");
        this.logout = page.locator(".dropdown-item[href='http://backend.tmsapp.2stallions.site/logout']");
    }

    async goTo()
    {
        await this.page.goto("http://backend.tmsapp.2stallions.site/login");
    }

    async validLogin(username, password)
    {
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.loginbutton.click(); 
    }

    async Logoutapplication()
    {
        await this.userlogindropdown.click();
        await this.logout.click();
    }
}

module.exports = {LoginPage};