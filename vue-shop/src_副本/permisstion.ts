///路由鉴权
import router from '@/router'
// import nprogress from 'nprogress';
// import "nprogress/nprogress.css";
import { GET_TOKEN } from './utils/token';
import useUserStore from '@/stores/modules/user'
import setting from './setting'


/// 全局前置守卫:项目当中任意路由切换都会触发的钩子
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title = setting.title + "-" + to.meta.title;
    // nprogress.start();
    let username = useUserStore().username;
    if (GET_TOKEN()) {
        ///用户已登录,不能访问login路由
        if (to.path == "/login") {
            next({ path: "/" });
        } else {
            if (username) {
                next();
            } else {
                ///如果没有用户信息,获取用户信息
                try {
                    await useUserStore().userInfo();
                    next();
                } catch (error) {
                    ///token过期:获取不到用户信息
                    ///用户手动修改本地存储token
                    ///退出登录-》用户相关的数据清空
                    await useUserStore().logout();
                    next({ path: "/login", query: { redirect: to.path } });
                }

            }

        }
    } else {
        ///用户未登录,login外的路由无法直接访问
        if (to.path == "/login") {
            next();
        } else {
            next({ path: "/login", query: { redirect: to.path } });
        }
    }

})

/// 全局后置守卫:项目当中任意路由切换完成都会触发的钩子
router.afterEach((to: any, from: any) => {
    //访问路由之前的守卫
    // console.log(from, to);
    // nprogress.done();
})

///用户未登录,login外的路由无法直接访问
///用户已登录,不能访问login路由

