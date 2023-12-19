module.exports = {
    "apiKey": "rishika-bdd_YOq9d_vRTt-Ae3DcW5BWAq2OK36sj8Yt6nfr5tgi5c200OAsshtDWDPhUw9faaKs",
    "endpoint": "https://demo.reportportal.io/api/v1",
    "project": "default_personal",
    "launch": process.env.npm_config_LAUNCH || "cucumber bdd",
    "description": "Playwright BDD UI + API",
    "takeScreenshot": "onFailure",
    "scenarioBasedStatistics": true
}

// module.exports = {
//     "apiKey": "poc-bdd_V2aT8xi9RquB_3YHBT5AVaeYl7-ebDWU8e8jdfAqMYdb5vP3HjIETGSgAtGSzV-4",
//     "endpoint": "http://3.27.3.138:8080/api/v1",
//     "project": "default_personal",
//     "launch": process.env.npm_config_LAUNCH || "cucumber bdd",
//     "description": "Playwright BDD UI + API",
//     "takeScreenshot": "onFailure",
//     "scenarioBasedStatistics": true
// }
