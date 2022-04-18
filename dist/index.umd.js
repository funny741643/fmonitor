var fmonitor = (function () {
    'use strict';

    function isSupportPerformanceObserver() {
        return !!window.PerformanceObserver;
    }
    function getPageURL() {
        return window.location.href;
    }

    class Performance {
        constructor() {
            this.paintEntryHandler = list => {
                for (const entry of list.getEntries()) {
                    const json = entry.toJSON();
                    delete json.duration;
                    const reportData = Object.assign(Object.assign({}, json), { subType: entry.name, type: 'performance', pageURL: getPageURL() });
                    console.log(reportData);
                }
            };
            this.LCPEntryHandler = list => {
                for (const entry of list.getEntries()) {
                    const json = entry.toJSON();
                    console.log(json);
                }
            };
            this.observe();
        }
        getObserver(type, entryHandler) {
            if (!isSupportPerformanceObserver())
                return null;
            const observer = new PerformanceObserver(entryHandler);
            observer.observe({
                type,
                buffered: true,
            });
            return observer;
        }
        observe() {
            this.paintObserver = this.getObserver('paint', this.paintEntryHandler);
            this.lcpObserver = this.getObserver('largest-contentful-paint', this.LCPEntryHandler);
        }
    }

    class Fmonitor {
        constructor() {
            this.init();
        }
        // eslint-disable-next-line class-methods-use-this
        init() {
            new Performance();
        }
    }
    const fmonitor = new Fmonitor();
    console.log(fmonitor);

    return Fmonitor;

})();
//# sourceMappingURL=index.umd.js.map
