import {Given, Then, When} from "@cucumber/cucumber";
import {HomePage} from "../../../web/page/HomePage";
import {LoginPage} from "../../../web/page/LoginPage";
import * as cred from '../../../web/testData/loginPage.json';

Given('he is on home page', async function () {
    await LoginPage.enterCredential(this.attach, cred.credentials.qa.userName, cred.credentials.qa.password);
});

When('he click on contact us button', async function () {
    await HomePage.clickContactUsLink(this.attach);
});

Then('send button should be visible', async function () {
    await HomePage.verifySignInButton();
});

Then(/^he should able to see excel sheet data$/, async function () {
    await HomePage.getExcelData(this.attach,"src/web/testData/sheetData.xlsx", "Emplyee Data");
});