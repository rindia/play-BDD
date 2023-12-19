import { Given, Then, When } from "@cucumber/cucumber";
import { HomePage } from "../../page/HomeOage";
import { LoginPage } from "../../page/LoginPage";
import * as cred from '../../testData/loginPage.json';


Given('he is on home page', async function () {
    await LoginPage.enterCredential(cred.credentials.qa.userName, cred.credentials.qa.password);
});

When('he click on contact us button', async function () {
    await HomePage.clickContactUsLink();
});

Then('send button should be visible', async function () {
    await HomePage.verifySignInButton();
});