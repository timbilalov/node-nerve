module.exports = function (Handlebars) {
    'use strict';

    var debug = require('./debug'),
        digitFormat = require('./digitFormat'),
        getByKey = require('./get-by-key'),
        ifEq = require('./ifEq'),
        ifLt = require('./ifLt'),
        ifGt = require('./ifGt'),
        jsonEncode = require('./json-encode'),
        jsonStringify = require('./json-stringify'),
        jsonStipEndBrace = require('./json-stip-end-brace'),
        numberWidth = require('./number-width'),
        unlessEq = require('./unlessEq'),
        plural = require('./plural'),
        spaceless = require('./spaceless'),
        times = require('./times');

    debug(Handlebars);
    digitFormat(Handlebars);
    getByKey(Handlebars);
    ifEq(Handlebars);
    ifGt(Handlebars);
    ifLt(Handlebars);
    jsonEncode(Handlebars);
    jsonStringify(Handlebars);
    jsonStipEndBrace(Handlebars);
    numberWidth(Handlebars);
    unlessEq(Handlebars);
    plural(Handlebars);
    spaceless(Handlebars);
    times(Handlebars);
};