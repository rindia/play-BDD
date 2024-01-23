import {After, AfterAll, Before, BeforeAll, Status} from "@cucumber/cucumber";
import {Browser, BrowserContext} from "@playwright/test"
import {getBrowser} from "../utility/browser/BrowserManager";
import {getEnvironment} from "../utility/env/Enviornmnet";
import {Driver} from "./Driver";
import Logger from "../utility/logger/Logger";
import {level} from "winston";
import * as url from "../utility/env/env.json";

const fs = require("fs-extra");

let browser: Browser
let browserContext: BrowserContext;
let env = "";
BeforeAll(async function () {
    env = process.env.npm_config_ENV;
    console.log("env +++++++++++++" , env)
   if (env && !env.startsWith('api')) {
    getEnvironment();
}
    browser = await getBrowser();
});
Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id
    browserContext = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await browserContext.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true,
        snapshots: true
    });
    const [page] = await Promise.all([browserContext.newPage()]);
    Driver.page = page;
})

After(async function ({pickle, result}) {
    let videoPath: string;
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == Status.FAILED && !env.startsWith('api')) {
        img = await Driver.page.screenshot(
            {path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        videoPath = await Driver.page.video().path();
    }
    if (result?.status == Status.FAILED && !env.startsWith('api')) {
        this.attach(
            img, "image/png"
        );
        this.attach(
            fs.readFileSync(videoPath),
            'video/webm'
        );
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        this.attach(`Trace file: ${traceFileLink}`, 'text/html');

    }
    await browserContext.tracing.stop({path: path});
    await Driver.page.close();
    await browserContext.close();
})

AfterAll(async function () {
    await browser.close();
})
