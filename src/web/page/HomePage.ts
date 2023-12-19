import {expect} from "@playwright/test";
import {CoreConstant} from "../../utility/business/CoreConstant";
import CoreFunction from "../../utility/business/CoreFunction";
import {BusinessFunction} from "../../utility/business/BusinessFunction";
import {ICreateAttachment, ICreateAttachmentOptions} from '@cucumber/cucumber/lib/runtime/attachment_manager';
import Logger from "../../utility/logger/Logger";

export class HomePage {
    private static readonly contactUs = '#contact-links';
    private static readonly sendButton = '#submitMessage span';

    static async clickContactUsLink(attach: ICreateAttachment) {
        await CoreFunction.click(attach, this.contactUs, CoreConstant.CONTATCT_US_LINK);
    }

    static async verifySignInButton() {
        const signInTxt = await CoreFunction.getText(this.sendButton, CoreConstant.SEND_BUTTON);
        expect(signInTxt).toEqual('Send')
    }

    static async getExcelData(attach: ICreateAttachment, filePath: string, sheetName: string) {
        const data = await BusinessFunction.getExcelData(filePath, sheetName);
        console.log(data);
        attach(data[0]['NAME'])
    }
}