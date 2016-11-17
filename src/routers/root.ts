import { AppDataConfig } from './getConfigData'
import * as express from 'express'
import * as jsonWebpToken from 'jsonwebtoken'

var router = express.Router()
router.get('/', (req: express.Request, res: express.Response, next: any) => {
    let appData = new AppDataConfig()
    var token = jsonWebpToken.sign({ 'name': 'monkey', 'age': 12 }, 'monkeyskey')
    console.log('token--->', token)
    var decode = jsonWebpToken.verify(token, 'monkeyskey')
    console.log('decode--->', decode)
    var plain = jsonWebpToken.decode(token)
    console.log('plain--->', plain)
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
            res.json(result)
        })
    })
})

export { router };

