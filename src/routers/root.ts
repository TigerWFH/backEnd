import { AppDataConfig } from './getConfigData'
import * as express from 'express'

var router = express.Router()
router.get('/', (req: express.Request, res: express.Response, next: any) => {
    let appData = new AppDataConfig()
    appData.client.connect(appData.serverUrl, (err: any, db: any) => {
        if (err) {
            res.sendStatus(500)
            throw err
        }
        console.log(appData.serverUrl)
        db.collection('users').find().toArray((err: any, result: any) => {
            if (err) {
                res.sendStatus(404)
                throw err
            }
            console.log(result)
            res.json(result)
        })
    })
})

export { router };

