const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');
const rpConfig = require('./rpConfig');
module.exports = createRPFormatterClass(rpConfig);