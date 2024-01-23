import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const options: LaunchOptions = {
    headless: process.env.npm_config_HEADLESS === "true" || true,
    timeout: 30000
}

export const getBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || 'chrome'
    const browserLaunchers = { chrome: chromium, firefox, webkit };
    const launcher = browserLaunchers[browserType];
    if (launcher) {
        return launcher.launch(options);
    }
    throw new Error(`Unable to find browser: ${browserType}`);
}
