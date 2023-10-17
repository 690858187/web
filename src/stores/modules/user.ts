
import { defineStore } from "pinia";
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
import type { loginFormData } from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
import type { UserState } from "./types/typs";
import constantRoute from "@/router";
import { log } from "console";
import { Remove } from "@element-plus/icons-vue";
/// 引入路由(常量路由)
let useUserStore = defineStore('user', {
    /// 仓库存储数据
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            menuRoutes: constantRoute.options.routes,
            username: "",
            avator: "",
        }
    },
    /// 异步逻辑地方
    actions: {
        ///用户登录方法
        async login(data: loginFormData) {
            let result = await reqLogin(data);
            if (result.code == 200) {
                /// 本地存储持久化一份
                let token = result.data;
                this.token = token;
                SET_TOKEN(token);
                // this.username = result.data.username;
                // this.avator = result.data.avatar;
                return "ok";
            } else {
                return Promise.reject(new Error(result.message));
            }
        },

        async userInfo() {
            let result = await reqUserInfo();
            if (result.code == 200) {
                /// 本地存储持久化一份
                this.username = result.data.name;
                this.avator = result.data.avatar;
                return "ok";
            } else {
                return Promise.reject(new Error(result.message));
            }
        },
        /// 退出登录清除数据
        async logout() {

            let result = await reqLogout();
            console.log("退出登录" + result);
            if (result.code == 200) {
                /// 本地存储持久化一份
                this.token = '';
                this.username = '';
                this.avator = '';
                REMOVE_TOKEN();

                return "ok";
            } else {
                return Promise.reject(new Error(result.message));
            }

        }
    },
    getters: {

    }
})




export default useUserStore;