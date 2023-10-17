
/// 接口需要代参数的ts类型
/// 定义用户登录接口携带参数的ts类型


/// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
    code: number
    data: any
    message: string
    ok: boolean
}


/// 定义登录接口返回数据类型
export interface Trademark {
    id?: number,
    tmName: string,
    logoUrl: string,
}

//包含全部品牌数量的ts类型
export type Records = Trademark[];

/// 定义用户信息接口返回数据类型
export interface TrademarkResposeData extends ResponseData {
    data: {
        records: Records,
        total: number,
        size: number,
        current: number,
        orders: [],
        optimizeCountSql: boolean,
        hitCount: boolean,
        countId: string,
        maxLimit: number,
        searchCount: boolean,
        pages: number,
    }
}