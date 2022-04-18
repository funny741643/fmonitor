import { getPageURL, isSupportPerformanceObserver } from '../utils'

export type IEntryHandler = (list: PerformanceObserverEntryList) => void

export default class Performance {
    private paintObserver!: PerformanceObserver

    private lcpObserver!: PerformanceObserver

    constructor() {
        this.observe()
    }

    getObserver(type: string, entryHandler: IEntryHandler): PerformanceObserver | null {
        if (!isSupportPerformanceObserver()) return null
        const observer = new PerformanceObserver(entryHandler)
        observer.observe({
            type,
            buffered: true,
        })
        return observer
    }

    paintEntryHandler: IEntryHandler = list => {
        for (const entry of list.getEntries()) {
            const json = entry.toJSON()
            delete json.duration
            
            const reportData = {
                ...json,
                subType: entry.name,
                type: 'performance',
                pageURL: getPageURL(),
            }

            console.log(reportData)
        }
    }

    LCPEntryHandler: IEntryHandler = list => {
        for (const entry of list.getEntries()) {
            const json = entry.toJSON()
            console.log(json)
        }
    }

    observe() {
        this.paintObserver = this.getObserver('paint', this.paintEntryHandler)!
        this.lcpObserver = this.getObserver('largest-contentful-paint', this.LCPEntryHandler)!
    }
}
