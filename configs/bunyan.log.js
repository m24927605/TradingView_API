const RotatingFileStream = require('bunyan-rotating-file-stream');
const moment = require('moment');
const path=require('path');
let nowTime = moment().format('YYYY-MM-DD');

const bunyanOpts = {
    name: 'SSO',
    streams: [{
        type: 'raw',
        stream: new RotatingFileStream({
            path: path.resolve(`LOGS/bunyan/${nowTime}.json`),
            period: '1d',          // daily rotation 
            totalFiles: 2,        // keep 10 back copies 
            rotateExisting: true,  // Give ourselves a clean file when we start up, based on period 
            gzip: true             // Compress the archive log files to save space 
        })
    }]
};

module.exports = bunyanOpts;