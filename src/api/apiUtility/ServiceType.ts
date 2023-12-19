import {Driver} from "../../hooks/Driver";
import {ICreateAttachment} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import Log from "../../utility/logger/Logger";
import fetchToCurl from "fetch-to-curl";
import * as apiURL from '../apiURL/url.json'
import jp from "jsonpath";
import fs from "fs";
import {APIConstant} from "./APIConstant";
import {BusinessFunction} from "../../utility/business/BusinessFunction";

export class ServiceType {

    private getEnv() {
        return apiURL.baseUrl[process.env.npm_config_ENV] || 'QA';
    }

    async getRequest(attach: ICreateAttachment, endPoint: string, headers: Record<string, string>, param?: Record<string, string | number>) {
        const [res] = await Promise.all([Driver.page.request.get(this.getEnv() + endPoint, {
            headers: headers,
            params: param
        })])
        this.printRequest(attach, this.getEnv() + endPoint, headers, null, 'GET');
        return res;
    }

    public async postRequest(attach: ICreateAttachment, endPoint: string, headers: Record<string, string>, jsonAsString: string) {
        this.printRequest(attach, this.getEnv() + endPoint, headers, jsonAsString, 'post');
        return await Driver.page.request.post(this.getEnv() + endPoint,
            {headers: headers, data: JSON.parse(jsonAsString)});
    }

    private printRequest(attach: ICreateAttachment, endPoint: string, requestHeader: any, jsonRequestBody: string, method: string) {
        let requestBody = jsonRequestBody;
        if (jsonRequestBody !== null) {
            requestBody = JSON.stringify(JSON.parse(jsonRequestBody), undefined, 2);
        }
        Log.attachText(attach, `Request:  ${fetchToCurl({
            url: endPoint,
            headers: requestHeader,
            body: requestBody,
            method: method,
        })}`);
    }

    public async getTagContentByJsonPath(jsonPath: string, body: any): Promise<string> {
        return jp.query(JSON.parse(body), jsonPath)[0];
    }

    public async createRequestBody(jsonFileName: string, data: any): Promise<string> {
        let json = fs.readFileSync(APIConstant.REST_JSON_REQUEST_PATH + jsonFileName, 'utf-8');
        json = BusinessFunction.formatStringValue(json, data);
        return json;
    }
}