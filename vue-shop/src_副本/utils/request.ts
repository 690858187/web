import axios from 'axios'
import useUserStore from '@/stores/modules/user'

// 创建axios实例
let request = axios.create({
  baseURL: "http://sph-api.atguigu.cn",
  // baseURL: "http://39.98.123.211:8510",
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
})
///配置请求拦截器
request.interceptors.request.use(
  function (config) {
    let userStore = useUserStore();
    if (userStore.token) {
      config.headers.token = userStore.token;
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)
///配置响应拦截器
request.interceptors.response.use(
  function (response) {
    ///获取用户token'

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    let message = ''
    // ElMessage({ type: 'error', message: '提示信息' })
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

/// 对外暴露
export default request
