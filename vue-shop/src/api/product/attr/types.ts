
/// 接口需要代参数的ts类型
/// 定义用户登录接口携带参数的ts类型


/// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
    code: number
    data: any
    message: string
    ok: boolean
}


/// 分类
export interface Category {
    id: number,
    name: string,
    category1Id: number,
    category2Id: number,
}

//包含分类的ts类型
export type categorys = Category[];

/// 定义分类信息接口返回数据类型
export interface CategoryResposeData extends ResponseData {
    data: categorys
}



/// 分类
export interface AttrData {
    id?: number,
    attrName: string,
    categoryId: number,
    categoryLevel: number,
    attrValueList: attrValues,
}

/// 分类
export interface AttrValueData {
    id: number,
    valueName: string,
    attrId: number,
}

//包含的ts类型属性
export type attrs = AttrData[];
//包含的ts类型属性
export type attrValues = AttrValueData[];
/// 定义接口返回数据类型
export interface AttrResposeData extends ResponseData {
    data: attrs
}