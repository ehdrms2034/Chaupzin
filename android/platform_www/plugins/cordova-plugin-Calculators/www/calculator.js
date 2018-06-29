cordova.define("cordova-plugin-Calculators.calculator", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getAddResult = function (arg0,arg1, success, error) {
    exec(success, error, 'calculator', 'add', [arg0,arg1]);
};
exports.getSubResult = function (arg0,arg1, success, error) {
    exec(success, error, 'calculator', 'sub', [arg0,arg1]);
};

exports.getMulResult = function (arg0,arg1, success, error) {
    exec(success, error, 'calculator', 'mul', [arg0,arg1]);
};

exports.getDivResult = function (arg0,arg1, success, error) {
    exec(success, error, 'calculator', 'div', [arg0,arg1]);
};

});
