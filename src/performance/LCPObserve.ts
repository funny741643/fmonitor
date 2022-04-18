/**
 * LCP: last contentfui paint
 */

import { isSupportPerformanceObserver } from '../utils'

let lcpDone: boolean = false

export function isLcpDone() {
    return lcpDone
}

export default class LCPObserve {
    private lcpObserve: PerformanceObserver

    constructor() {
        this.observeInit()
    }

    observeInit() {
        if (!isSupportPerformanceObserver) return false
        this.lcpObserve = new PerformanceObserver(this.entryHandler)
        this.lcpObserve.observe({
            type: 'largest-contentful-paint',
            buffered: true,
        })
    }

    entryHandler(list: any) {
        lcpDone = true
        if (this.lcpObserve) {
            this.lcpObserve.disconnect()
        }

        for (const entry of list.getEntries()) {
            const json = entry.toJSON()

            console.log(json)
        }
    }
}
