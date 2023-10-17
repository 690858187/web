
/// 接口需要代参数的ts类型
/// 定义用户登录接口携带参数的ts类型


/// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
  code: number
  data: any
  message: string
  ok: boolean
}

export interface loginFormData {
  username: string
  password: string
}


/// 定义登录接口返回数据类型
export interface loginResposeData extends ResponseData {
  data: string
}

/// 定义用户信息接口返回数据类型
export interface infoResposeData extends ResponseData {
  data: {
    avatar: string;
    buttons: string[];
    name: string;
    roles: string[];
    routes: string[];
  }
}



