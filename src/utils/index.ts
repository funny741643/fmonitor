export function isSupportPerformanceObserver(): boolean {
    return !!window.PerformanceObserver
}

export function getPageURL(): string {
    return window.location.href
}
