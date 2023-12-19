import { expect } from "@playwright/test";
import { CoreConstant } from "../utility/business/CoreConstant";
import CoreFunction from "../utility/business/CoreFunction";

export class HomePage {
    private static readonly contactUs = '#contact-link';
    private static readonly sendButton = '#submitMessage span';

    static async clickContactUsLink() {
        await CoreFunction.click(this.contactUs, CoreConstant.CONTATCT_US_LINK);
    }

    static async verifySignInButton() {
        const signInTxt = await CoreFunction.getText(this.sendButton, CoreConstant.SEND_BUTTON);
        expect(signInTxt).toEqual('Send')
    }


}