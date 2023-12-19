module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "@api",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/feature/**/*.feature"
        ],
        dryRun: false,
        require: [
            "src/test/steps/**/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        'format-options': {
            colorsEnabled: false,
        },
        parallel: parseInt(process.env.npm_config_PARALLEL || '1', 10)
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: process.env.npm_config_PARALLEL || 1
    }
}
