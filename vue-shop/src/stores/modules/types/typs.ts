import type { RouteRecordRaw } from "vue-router";
export interface UserState {
    token: string | null,
    menuRoutes: readonly RouteRecordRaw[],
    username: string,
    avator: string,
}