/**
 * FP: first-paint
 * FCP: first-content-paint
 */
import { getPageURL, isSupportPerformanceObserver } from '../utils'

export default class PaintObserver {
    private paintObserver: PerformanceObserver

    constructor() {
        if (isSupportPerformanceObserver()) {
            this.paintObserver = new PerformanceObserver(this.entryHandler)
            this.paintObserver.observe({ entryTypes: ['navigation', 'resource', 'paint', 'largest-contentful-paint'] })
            // this.paintObserver.observe({
            //     type: 'paint',
            //     buffered: true,
            // })
        }
    }

    entryHandler(list: PerformanceObserverEntryList) {
        for (const entry of list.getEntries()) {
            if (entry.name === 'first-content-paint') {
                this.paintObserver.disconnect()
            }

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
}
