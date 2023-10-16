import request from '@/utils/request'
import type { loginFormData, loginResposeData, infoResposeData } from './type'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USER_INFO_URL = 'admin/acl/index/info',
  LOGOUT_URL = 'admin/acl/index/logout',
}

// 暴露请求函数
///登录接口
export const reqLogin = (data: loginFormData) => {
  return request.post<any, loginResposeData>(API.LOGIN_URL, data);
}

///获取用户信息
export const reqUserInfo = () => {
  return request.get<any, infoResposeData>(API.USER_INFO_URL)
}


///退出登录
export const reqLogout = () => {
  return request.post<any, any>(API.LOGOUT_URL)
}
