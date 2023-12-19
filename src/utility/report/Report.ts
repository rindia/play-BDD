const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "e-commerce",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Rohit PC",
        platform: {
            name: 'Windows',
            version: '11'
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "e-commerce" },
            { label: "TestPOC", value: "1" }
        ],
    },
});