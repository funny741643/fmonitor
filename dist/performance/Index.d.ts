export declare type IEntryHandler = (list: PerformanceObserverEntryList) => void;
export default class Performance {
    private paintObserver;
    private lcpObserver;
    constructor();
    getObserver(type: string, entryHandler: IEntryHandler): PerformanceObserver | null;
    paintEntryHandler: IEntryHandler;
    LCPEntryHandler: IEntryHandler;
    observe(): void;
}
