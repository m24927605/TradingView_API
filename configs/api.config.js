'use strict';

const apiConfigs = {
    development: {
        FUTURES_API: 'http://www.futures-ai.com:8880',
    },
    test: {
        FUTURES_API: 'http://www.futures-ai.com:8880',
    },
    production: {
        FUTURES_API: 'http://www.futures-ai.com:8880',
    }
}

const node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const apiConfig = apiConfigs[node_env];
module.exports = apiConfig;