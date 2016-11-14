"use strict";
var index_1 = require('./index');
var express = require('express');
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.json({
        'name': 'monkey'
    });
    var appData = new index_1.AppData();
    // appData.client.connect(appData.serverUrl, (err: any, db: any) => {
    //     if (err) {
    //         throw 'Err:' + err
    //     }
    //     console.log(appData.serverUrl)
    //     db.collection('users').find().toArray((err: any, result: any) => {
    //         if (err) {
    //             throw err
    //         }
    //         console.log(result)
    //         res.json(result)
    //     })
    // })
});

//# sourceMappingURL=../maps/routers/root.js.map
