import {ServiceType} from "../apiUtility/ServiceType";
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import * as apiURL from '../apiURL/url.json'
import {RequestHeader} from "../apiUtility/RequestHeader";
import {APIResponse, expect} from "@playwright/test";
import * as postTemplate from '../../api/template/post.json'

const serviceType = new ServiceType();
const requestHeader = new RequestHeader();

export class UserOperation {
    static response: APIResponse;

    static async getUserDetails(attach: ICreateAttachment) {
        this.response = await serviceType.getRequest(attach, apiURL.endPoint.getUsers, await requestHeader.setHeader());
    }

    static async verifyUserStatusCode() {
        expect(this.response.status(), 'status code should be 200').toEqual(200);
    }

    static async getResponse(attach: ICreateAttachment) {
        const d = this.response.url();
        attach(d);
    }

    static async savePost(attach: ICreateAttachment, reqBody: string) {
        this.response = await serviceType.postRequest(attach, apiURL.endPoint.savePost, await requestHeader.setHeader(), reqBody);
    }

    static async verifyPostStatusCode() {
        expect(this.response.status(), 'status code should be 201').toEqual(200);
    }

    static async verifyPostResponseData(attach: ICreateAttachment) {
        const response = await this.response.json();
        attach(response['title'] + ' data should be equal = hello')
        expect(response['title'], 'title should be').toEqual('Hello');
    }
}