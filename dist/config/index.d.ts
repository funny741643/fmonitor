export interface IConfig {
    reportUrl: string;
    appID?: string;
    userID?: string;
    outTime?: number;
    isPerformance?: boolean;
    isError?: boolean;
    isBehavior?: boolean;
    isNetwork?: boolean;
    isResource?: boolean;
    isPV?: boolean;
}
export declare const defaultConfig: IConfig;
export declare function setConfig(options: IConfig): IConfig;
export declare function getConfig<T extends keyof IConfig>(e: T): IConfig[T] | {};
