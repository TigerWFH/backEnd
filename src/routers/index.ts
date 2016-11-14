var mongo = require('mongodb');
var client = mongo.MongoClient;
var serverUrl = 'mongodb://127.0.0.1:27017/blog';

export class AppData {
    client: any;
    serverUrl: string;
    constructor() {
        this.client = client;
        this.serverUrl = serverUrl;
    }
}