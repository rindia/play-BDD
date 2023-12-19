
import * as env from '../env/env.json'
export const getEnvironment = () => {
    const envMap = {
        'QA': env.QA,
        'stage': env.stagging
    }
    const url = envMap[process.env.npm_config_ENV || 'QA'];
    if (url) {
        process.env.URL = url;
        return url;
    }
    else {
        throw new Error(`unable to find enviornment: ${process.env.ENV}`);
    }
}