/// 封装本地存储我读取数据
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN')
}

/// 本地删除的方法
export const REMOVE_TOKEN = () => {
    return localStorage.removeItem('TOKEN')
}