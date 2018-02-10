'use strict';

module.exports = () => {
    const errConfig = require('../../configs/error.config.json');
    const PrettyError = require('pretty-error');
    const pe = new PrettyError();
    return {
        /**
         * 參數檢查層錯誤
         * @param {string} errType error type
         * @param {any} error error object
         * 
         * @return {{object}} errObj
         */
        reqCheckSend: (errType, err) => {
            try {
                console.error(pe.render(err));
                let errObj = {};
                errObj.error = errConfig.paramValidate[errType];
                errObj.error.errorDetail =  `${err}`;
                if(typeof err==='object'){
                    errObj.error.errorDetail=err;
                }
                return errObj;
            }
            catch (err) {
                console.error('參數檢查層 發生錯誤', err);
            }
        },
        /**
         * 模組發生錯誤
         * @param {string} errType error type
         * @param {any} error error object
         * 
         * @return {{object}} errObj
         */
        moduleSend: (errType, err) => {
            try {
                console.error(pe.render(err));
                let errObj = {};
                errObj.error = errConfig.module[errType];
                errObj.error.errorDetail = `${err}`;
                return errObj;
            }
            catch (err) {
                console.error('模組發生錯誤', err);
            }
        },
        /**
         * 商業邏輯層發生錯誤
         * @param {string} errType error type
         * @param {any} error error object
         * 
         * @return {{object}} errObj
         */
        logicSend: (errType, err) => {
            try {
                console.error(pe.render(err));
                let errObj = {};
                errObj.error = errConfig.logic[errType];
                errObj.error.errorDetail =  `${err}`;
                return errObj;
            }
            catch (err) {
                console.error('商業邏輯層 發生錯誤', err);
            }
        },
        /**
         * Router層發生錯誤
         * @param {string} errType error type
         * @param {any} error error object
         * 
         * @return {{object}} errObj
         */
        routerSend: (errType, err) => {
            try {
                console.error(pe.render(err));
                let errObj = {};
                errObj.error = errConfig.router[errType];
                errObj.error.errorDetail =  `${err}`;
                return errObj;
            }
            catch (err) {
                console.error('Router層 發生錯誤', err);
            }
        }
    }
}