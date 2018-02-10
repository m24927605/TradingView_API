'use strict';

module.exports = () => {
    const Ajv = require('ajv');
    const errorMessage = require('./error')();
    let ajv = Ajv({ allErrors: true });
    const colors = require('colors');

    //ajv schema to make sure the url query is correct format.
    let symbolSchema = require('../../ajvSchema/symbol.json');
    let historySchema = require('../../ajvSchema/history.json');

    //Strategy pattern,map the name to ajv schema.
    ajv.addSchema(symbolSchema, 'symbols');
    ajv.addSchema(historySchema, 'history');

    return {
        checkQuery: (schemaName, ctx, next) => {
            try {
                let valid = ajv.validate(schemaName, ctx.query)
                if (valid) {
                    next();
                }
                else {
                    let errorData = ajv.errors;
                    console.error(colors.red('參數檢查錯誤', JSON.stringify(errorData)));
                    ctx.status = 500;
                    ctx.body = errorMessage.reqCheckSend(ajv.errors[0].keyword, errorData);
                }
            }
            catch (err) {
                ctx.status = 500;
                ctx.body = errorMessage.moduleSend("ajv", err);
            }
        }
    }
}
