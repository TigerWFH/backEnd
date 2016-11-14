import { AppData } from './index'
import * as express from 'express'

var router = express.Router()
router.get('/', (req, res, next) => {
    // res.json({
    //     'name': 'monkey'
    // })
    let appData = new AppData()
    appData.client.connect(appData.serverUrl, (err: any, db: any) => {
        if (err) {
            throw 'Err:' + err
        }
        console.log(appData.serverUrl)
        db.collection('users').find().toArray((err: any, result: any) => {
            if (err) {
                throw err
            }
            console.log(result)
            res.json(result)
        })
    })
})

export { router };

