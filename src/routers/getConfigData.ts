// 该文件读取数据库URL并加载数据库驱动
import * as mongo from 'mongodb';
import { ConfigData } from '../utils/readConfig';

export class AppDataConfig {
    readonly client: any;
    readonly serverUrl: string;
    constructor() {
        let config: ConfigData = new ConfigData();
        this.client = mongo.MongoClient;
        this.serverUrl = config.getConfig().dataServer;
    }
}