import request from '@/utils/request';
import type { TrademarkResposeData, Trademark, ResponseData } from './types';

enum API {
    ///已有品牌名称
    TRADEMARK_URL = 'admin/product/baseTrademark',
    TRADEMARK_SAVE_URL = 'admin/product/baseTrademark/save',
    TRADEMARK_UPDATE_URL = 'admin/product/baseTrademark/update',
    TRADEMARK_DELETE_URL = 'admin/product/baseTrademark/remove',
}

// 暴露请求函数
///page:获取第几页 limit获取几个已有品牌的数据
export const reqTrademark = (page: number, limit: number) => {
    return request.get<any, TrademarkResposeData>(API.TRADEMARK_URL + `/${page}/${limit}`);
}

///添加或更新品牌
export const reqSaveOrUpdateTrademark = (data: Trademark) => {
    if (data.id) {
        return request.put<any, any>(API.TRADEMARK_UPDATE_URL, data,)
    } else {
        return request.post<any, any>(API.TRADEMARK_SAVE_URL, data,)
    }
}


///删除品牌
export const reqDeleteTrademark = (id: number) => {
    return request.delete<any, ResponseData>(API.TRADEMARK_DELETE_URL + `/${id}`);
}