"use strict";
var mongo = require('mongodb');
var client = mongo.MongoClient;
var serverUrl = 'mongodb://127.0.0.1:27017/blog';
var AppData = (function () {
    function AppData() {
        this.client = client;
        this.serverUrl = serverUrl;
    }
    return AppData;
}());
exports.AppData = AppData;

//# sourceMappingURL=../maps/routers/index.js.map
