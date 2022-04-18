import { IConfig } from './config'
import PerformanceObserver from './performance/index'

export default class Fmonitor {
    private options!: IConfig

    constructor() {
        this.init()
    }

    // eslint-disable-next-line class-methods-use-this
    init() {
        new PerformanceObserver()
    }
}

const fmonitor = new Fmonitor()
console.log(fmonitor)
