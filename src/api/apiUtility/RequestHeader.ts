import {APIConstant} from "./APIConstant";

export class RequestHeader {

    async setHeader(): Promise<Record<string, string>> {
        const headers: Record<string, string> = {};
        headers[APIConstant.CONTENT_TYPE] = APIConstant.APPLICATION_JSON;
        return headers;
    }
}