//关于layout

import { defineStore } from "pinia";

/// 引入路由(常量路由)
let useLayoutSettingStore = defineStore('SettingStore', {
    /// 仓库存储数据
    state: () => {
        return {
            fold: false, //用于菜单折叠还是收起的控制
            refresh: false, //用于刷新按钮刷新
        };
    },
    /// 异步逻辑地方
    actions: {

    },
    getters: {

    }
})

export default useLayoutSettingStore;