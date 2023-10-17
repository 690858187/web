import request from '@/utils/request';
import type { CategoryResposeData, Category, ResponseData, AttrData } from './types';

enum API {
    ///商品分类1
    GET_CATEGORY_URL_1 = '/admin/product/getCategory1',
    ///商品分类2
    GET_CATEGORY_URL_2 = '/admin/product/getCategory2',
    ///商品分类3
    GET_CATEGORY_URL_3 = '/admin/product/getCategory3',
    //分类基础属性列表
    ATTRINFOLIST_URL = '/admin/product/attrInfoList',
    //分类基础属性删除
    ATTRI_DELETE_URL = '/admin/product/deleteAttr',
    //获取分类基础属性
    ATTRIVALUELIST_URL = '/admin/product/getAttrValueList',
    //分类基础属性编辑
    ATTRI_SAVEINFO_URL = '/admin/product/saveAttrInfo',

}

///分类1
export const reqGetCategory1 = () => {
    return request.get<any, CategoryResposeData>(API.GET_CATEGORY_URL_1);
}

///分类2
export const reqGetCategory2 = (id: number) => {
    return request.get<any, CategoryResposeData>(API.GET_CATEGORY_URL_2 + `/${id}`);
}

///分类3
export const reqGetCategory3 = (id: number) => {
    return request.get<any, CategoryResposeData>(API.GET_CATEGORY_URL_3 + `/${id}`);
}

///分类基础属性列表
export const reqGetAttrInfoList = (id1: number, id2: number, id3: number) => {
    return request.get<any, ResponseData>(API.ATTRINFOLIST_URL + `/${id1}/${id2}/${id3}`);
}

//分类基础属性删除
export const reqDeleteAttr = (attrId: number) => {
    return request.delete<any, ResponseData>(API.ATTRI_DELETE_URL + `/${attrId}`);
}

//分类基础属性保存
export const reqSaveAttrInfo = (data: AttrData) => {
    return request.post<any, ResponseData>(API.ATTRI_SAVEINFO_URL, data);
}