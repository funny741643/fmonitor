export interface IConfig {
    reportUrl: string,
    appID?: string,
    userID?: string,
    outTime?: number,
    isPerformance?: boolean,
    isError?: boolean,
    isBehavior?: boolean,
    isNetwork?: boolean,
    isResource?: boolean,
    isPV?: boolean,
}

let config: IConfig = {} as IConfig

export const defaultConfig: IConfig = {
    // 上报的地址
    reportUrl: '',
    appID: '',
    userID: '',
    // 脚本延迟上报时间
    outTime: 300,
    // 是否上报页面性能信息
    isPerformance: true,
    // 是否上报错误信息
    isError: true,
    // 是否上报页面行为信息
    isBehavior: true,
    // 是否上报网络请求信息
    isNetwork: true,
    // 是否上报页面资源信息
    isResource: true,
    // 是否上报页面访问信息
    isPV: true,
}

export function setConfig(options: IConfig) {
    config = Object.assign(defaultConfig, options)
    return config
}

export function getConfig<T extends keyof IConfig>(e: T) {
    // eslint-disable-next-line no-nested-ternary
    return e ? config[e] ? config[e] : {} : {}
}
