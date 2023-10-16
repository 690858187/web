import { type MockMethod } from 'vite-plugin-mock'

function creatUserList() {
  return [
    {
      userId: 1,
      avatar: 'https://img2.baidu.com/it/u=1579991524,66947472&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694624400&t=caf7457a05e4b7614333f5e31fc0c6eb',
      username: 'admin',
      password: '123456',
      desc: '平台管理员',
      token: 'admin token',
      routes: ['home'],
    },
    {
      userId: 2,
      avatar: 'https://img2.baidu.com/it/u=170237391,555920326&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694624400&t=ed610056c4157da31b84ea610797d943',
      username: 'system',
      password: '000000',
      desc: '系统管理员',
      token: 'system token',
      routes: ['home'],
    },
  ]
}



export default [
  {
    url: '/api/info',
    method: 'get',
    response(opt) {
      const { username } = opt.body;
      const checkUser = creatUserList().find((item) => {
        return item.username == username
      })
      console.log(opt + "11111");
      // if (!checkUser) {
      //   return { code: 201, data: { message: '用户信息请求失败' } }
      // }
      return { code: 200, data: opt.body }
    },

  },

  {
    url: '/api/login',
    method: 'post',
    setTimeout: 200,
    response(opt) {
      const { username, password } = opt.body;
      const checkUser = creatUserList().find((item) => {
        return item.username == username && item.password == password
      })
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      return { code: 200, data: checkUser }
    },
  }
] as MockMethod[]
