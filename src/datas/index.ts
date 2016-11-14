var mongoDrive = require('mongodb');
var mongoClient = mongoDrive.MongoClient;

var serverUrl = 'mongodb://127.0.0.1:27017/blog';

var data = {
    init: () => {
        mongoClient.connect(serverUrl, function (err: any, db: any) {
            if (err) {
                throw '连接数据库出错：' + err;
            }
            db.collection('users').find().toArray((err: any, result: any) => {
                if (err) {
                    throw err;
                }
                console.log(result)
            });
        });
    }
}
module.exports = data;