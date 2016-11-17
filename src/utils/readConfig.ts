import * as fs from 'fs'
import * as path from 'path'

export class ConfigData {
    private config: any = {}
    constructor() {
        let content: string = fs.readFileSync('./config.json', { "encoding": "utf-8" })
        this.config = JSON.parse(content)
    }
    public getConfig = () => {
        return this.config
    }
}