/**
 * Created by Spconway on 4/21/17.
 */
'use strict';
const winston = require('winston');
const logLevel = process.env.LOG_LEVEL || 'debug';

const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
const tsFormat = function(){
    return new Date(Date.now() - tzoffset).toISOString().replace('T', ' ').replace(/\..*$/, '');
};

winston.emitErrs = true;

const logger = new (winston.Logger)({
    transports: [
        // new (winston.transports.File)({
        //     filename: './logs/workout-app.log',
        //     timestamp: tsFormat,
        //     datePatter: 'yyyy-MM-dd',
        //     prepend: true,
        //     level: env === 'development' ? 'info' : 'warn',
        //     handleExceptions: true,
        //     json: true,
        //     colorize: false,
        //     maxsize: 5242880,
        //     maxFiles: 5
        // }),
        new (winston.transports.Console)({
            timestamp: tsFormat,
            level: logLevel,
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.info('Logging initialized. LOG_LEVEL set to: ', logLevel);

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};