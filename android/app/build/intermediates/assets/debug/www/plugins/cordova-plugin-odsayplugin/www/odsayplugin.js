cordova.define("cordova-plugin-odsayplugin.odsayplugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.searchBusLane = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'searchBusLane', [arg0,arg1]);
};

exports.requestSubwayStationInfo = function (arg0, success, error) {
    exec(success, error, 'odsayplugin', 'requestSubwayStationInfo', [arg0]);
};

exports.requestIntercityServiceTime = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'requestIntercityServiceTime', [arg0,arg1]);
};

exports.requestExpressServiceTime = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'requestExpressServiceTime', [arg0,arg1]);
};


exports.requestExpressBusTerminals = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'requestExpressBusTerminals', [arg0,arg1]);
};

exports.requestIntercityBusTerminals = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'requestIntercityBusTerminals', [arg0,arg1]);
};

exports.requestSearchCID = function (arg0, success, error) {
    exec(success, error, 'odsayplugin', 'requestSearchCID', [arg0]);
};

exports.requestTrainServiceTime = function (arg0,arg1, success, error) {
    exec(success, error, 'odsayplugin', 'requestTrainServiceTime', [arg0,arg1]);
};

exports.requestSearchPubTransPath = function (arg0,arg1,arg2,arg3,arg4,arg5,arg6, success, error) {
    exec(success, error, 'odsayplugin', 'requestSearchPubTransPath', [arg0,arg1,arg2,arg3,arg4,arg5,arg6]);
};
exports.requestSubwayPath = function (arg0,arg1,arg2,arg3 ,success, error) {
    exec(success, error, 'odsayplugin', 'requestSubwayPath', [arg0,arg1,arg2,arg3]);
};
exports.requestSubwayTimeTable = function (arg0,arg1,success, error) {
    exec(success, error, 'odsayplugin', 'requestSubwayTimeTable', [arg0,arg1]);

};
exports.requestSearchStation = function (arg0,arg1,arg2,success, error) {
    exec(success, error, 'odsayplugin', 'requestSearchStation', [arg0,arg1,arg2]);

};

});