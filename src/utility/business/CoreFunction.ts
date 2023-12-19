import {Driver} from "../../hooks/Driver";

export default class CoreFunction {
    static async openUrl(url: string) {
        await Driver.page.goto(url, {waitUntil: 'domcontentloaded'});
    }

    static async click(locator: string, elementName: string, timeOut: number = 3000) {
        try {
            const element = Driver.page.locator(locator);
            await element.click({timeout: timeOut}); // auto wait for time out
        } catch (error) {
            throw new Error(`unable to click on element: ${elementName} : ${error.message}`)
        }
    }

    static async enterText(locator: string, elementName: string, enterText: string, timeOut: number = 15000): Promise<void> {
        try {
            const element = Driver.page.locator(locator);
            await element.waitFor({state: "visible"});
            await element.fill(enterText, {timeout: timeOut});
        } catch (error) {
            throw new Error(`unable to fill text box on element: ${elementName}`)
        }
    }

    static async getText(locator: string, elementName: string, timeOut: number = 30000): Promise<string> {
        const element = Driver.page.locator(locator);
        return await element.innerText({timeout: timeOut});
    }
}