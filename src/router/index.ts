import { createRouter, createWebHistory } from 'vue-router'

export const constantRoute = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: "登录",
        hidden: true,
        icon: "Promotion",
      }
    },

    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      /// 重定向到某个页面
      redirect: "/home",
      meta: {
        title: "layout",
        hidden: true,
        icon: "Monitor",
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: "首页",
            hidden: false,
            icon: "House",
          },
        },
      ]
    },
    {
      path: '/screen',
      name: 'screen',
      component: () => import('@/views/screen/index.vue'),
      meta: {
        title: "数据大屏",
        hidden: false,
        icon: "Monitor",
      }
    },
    {
      path: '/acl',
      name: 'Acl',
      component: () => import('@/layout/index.vue'),
      meta: {
        title: "权限管理",
        icon: "Lock",
      },
      redirect: "/acl/user",
      children: [

        {
          path: '/acl/user',
          name: 'User',
          component: () => import('@/views/acl/user/index.vue'),
          meta: {
            title: "用户管理",
            hidden: false,
            icon: "User",
          },
        },
        {
          path: '/acl/role',
          name: 'Role',
          component: () => import('@/views/acl/role/index.vue'),
          meta: {
            title: "角色管理",
            hidden: false,
            icon: "UserFilled",
          },
        },
        {
          path: '/acl/permission',
          name: 'Permission',
          component: () => import('@/views/acl/permission/index.vue'),
          meta: {
            title: "菜单管理",
            hidden: false,
            icon: "Grid",
          },
        },
      ]
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/layout/index.vue'),
      meta: {
        title: "商品管理",
        icon: "Platform",
      },
      children: [
        {
          path: '/product/trademark',
          name: 'Trademark',
          component: () => import('@/views/product/trademark/index.vue'),
          meta: {
            title: "品牌管理",
            hidden: false,
            icon: "Shop",
          },
        },
        {
          path: '/product/attr',
          name: 'Attr',
          component: () => import('@/views/product/attr/index.vue'),
          meta: {
            title: "属性管理",
            hidden: false,
            icon: "ElementPlus",
          },
        },
        {
          path: '/product/sku',
          name: 'Sku',
          component: () => import('@/views/product/sku/index.vue'),
          meta: {
            title: "SKU管理",
            hidden: false,
            icon: "Grid",
          },
        },
        {
          path: '/product/spu',
          name: 'Spu',
          component: () => import('@/views/product/spu/index.vue'),
          meta: {
            title: "SPU管理",
            hidden: false,
            icon: "Grid",
          },
        },
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/index.vue'),
      meta: {
        title: "404",
        hidden: true,
        icon: "Failed",
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'any',
      redirect: '/404',
      meta: {
        title: "其他页面",
        hidden: true,
        icon: "Failed",
      },
    },
  ],
})

export default constantRoute;
