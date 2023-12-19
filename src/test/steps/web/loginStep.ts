import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import {LoginPage} from "../../../web/page/LoginPage";
import * as cred from '../../../web/testData/loginPage.json';
import CoreFunction from "../../../utility/business/CoreFunction";
import {Driver} from "../../../hooks/Driver";


setDefaultTimeout(60 * 1000)
Given('he is on login page', async function () {
    await CoreFunction.openUrl(process.env.URL);
    await Driver.page.getByTitle('Log in to your customer account').click();
});

When('he enter valid credentials and submit the form', async function () {
    await LoginPage.enterCredential(this.attach,cred.credentials.qa.userName, cred.credentials.qa.password);
});

Then('he should be logged in successfully', async function () {
    await LoginPage.verifyUserName();
});


