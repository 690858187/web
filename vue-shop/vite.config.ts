import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode }) => {
  ///获取各种环境下对应的变量
  let env = loadEnv(mode, process.cwd());
  return {
    pubilcPath: './',
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          /// 获取数据服务器地址的设置
          target: env.VITE_SERVE,
          changeOrigin: true,
          ///
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        }
      },
      // host: '0.0.0.0',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/style/variable.scss";`,
          javascriptEnable: true,
        },
        // ///代理跨域

      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // resolvers: [ElementPlusResolver()],
        // // 自动引入的api从这里找
        imports: ['vue', 'vue-router', 'pinia'],
      }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      createSvgIconsPlugin({
        // 要缓存的图标文件夹
        iconDirs: [path.resolve(__dirname, 'src/svg')],
        // 执行 icon name 的格式
        symbolId: 'icon-[name]',
      }),
      viteMockServe({
        mockPath: './src/mock', // 解析刚刚user.ts的位置
        logger: true,
      }),
    ],
    resolve: {
      // 文件系统路径别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // /// scss全局变量配置

  }
})



