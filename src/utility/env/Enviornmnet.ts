import * as env from '../env/env.json'

export const getEnvironment = () => {
    const envMap = {
        'webQA': env.URL.web.webQA,
        'webStage': env.URL.web.webStg
    };
    const selectedEnv = process.env.npm_config_ENV || 'webQA';
    if (envMap.hasOwnProperty(selectedEnv)) {
        process.env.URL = envMap[selectedEnv];
        process.env.ENV_TYPE = selectedEnv;
    } else {
        throw new Error(`Unable to find environment: ${selectedEnv}`);
    }
};
