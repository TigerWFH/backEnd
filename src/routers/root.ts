import { AppDataConfig } from './getConfigData'
import * as express from 'express'
import * as jsonWebpToken from 'jsonwebtoken'

var router = express.Router()
router.get('/', (req: express.Request, res: express.Response, next: any) => {
    //throw new Error('abc')
    let appData = new AppDataConfig()
    var token = jsonWebpToken.sign({ 'name': 'monkey', 'age': 12, 'exp': Math.floor(Date.now() / 1000 + 0) }, 'monkeyskey')
    console.log('token--->', token)
    var plain = jsonWebpToken.decode(token)
    console.log('plain--->', plain)
    try {
        var decode = jsonWebpToken.verify(token, 'monkeyskey')
        console.log('decode--->', decode)
    }
    catch (err) {
        // console.log(err.message)
        // 此处应该是业务错误，不应该影响系统的运行
        throw err
    }

    appData.client.connect(appData.serverUrl, (err: any, db: any) => {
        if (err) {
            console.log('conntion error', err)
            res.sendStatus(500)
            throw new Error(err.message)
        }
        db.collection('users').find().toArray((err: any, result: any) => {
            if (err) {
                res.sendStatus(404)
                console.log('query error', err)
                throw err
            }
            res.json(result)
        })
    })
})

export { router };

