//关于layout

import { defineStore } from "pinia";
import type { Category, AttrData, AttrValueData } from '@/api/product/attr/types';

/// 引入路由(常量路由)
let useAttrStore = defineStore('attr', {
    /// 仓库存储数据
    state: () => {
        return {
            AttrData: {}, //修改的数据
        };
    },
    /// 异步逻辑地方
    actions: {

    },
    getters: {

    }
})

export default useAttrStore;