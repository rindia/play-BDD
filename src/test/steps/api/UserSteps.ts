import {Given, Then, When} from "@cucumber/cucumber";
import {UserOperation} from "../../../api/operation/UserOperation";
import * as postTemplate from '../../../api/template/post.json'
import {ServiceType} from "../../../api/apiUtility/ServiceType";

const serviceType = new ServiceType();
When(/^user makes a request to retrieves all users data$/, async function () {
    await UserOperation.getUserDetails(this.attach);
});
Then(/^user should get a status code (\d+)$/, async function (code: number) {
    await UserOperation.verifyUserStatusCode();
});
Then(/^user should get list of users$/, async function () {
    await UserOperation.getResponse(this.attach);
});
When(/^user makes a request to save users data$/, async function () {

    this.request = {
        title: "Hello",
        body: "bar",
        userId: 22
    }
    const reqBody = await serviceType.createRequestBody("post.json", this.request);
    await UserOperation.savePost(this.attach, reqBody);
});

Then(/^user should get (\d+) as status code$/, async function (code: number) {
    await UserOperation.verifyPostStatusCode();

});
Then(/^user should get valid response header$/, async function () {
    await UserOperation.verifyPostResponseData(this.attach);
    console.log('++++++++', this.request);
});
