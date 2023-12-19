import {expect} from "@playwright/test";
import CoreFunction from '../../utility/business/CoreFunction';
import {CoreConstant} from "../../utility/business/CoreConstant";
import {Driver} from "../../hooks/Driver";
import Logger from "../../utility/logger/Logger";
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";

export class LoginPage {

    private static readonly txtEmail = '#email';
    private static readonly txtPassword = '#passwd';
    private static readonly signInBtn = '#SubmitLogin';
    private static readonly userNameLabel = 'div.header_user_info span';

    static async enterCredential(attach: ICreateAttachment, userName: string, password: string) {
        await CoreFunction.enterText(this.txtEmail, CoreConstant.EMAIL_INPUT_BOX, userName);
        await CoreFunction.enterText(this.txtPassword, CoreConstant.PASSWORD_INPUT_BOX, password);
        await CoreFunction.click(attach, this.signInBtn, CoreConstant.SIGN_IN_BUTTON);
    }

    static async verifyUserName() {
        await expect(Driver.page.locator(this.userNameLabel)).toHaveText('Rohit saini')
    }
}