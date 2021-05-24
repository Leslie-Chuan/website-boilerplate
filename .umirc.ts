import { defineConfig } from 'umi';
import routes from './config/router';

const path = require('path');
const cwd = process.cwd();
const resolve = (dir: string) => path.join(cwd, dir);
const isEnvProduction = process.env.NODE_ENV === 'production';

const config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  outputPath: 'output/views',
  hash: true,
  proxy: {
    '/common': {
      target: 'https://sapi.XXXXXX.com/sapi/act/common/',
      changeOrigin: true,
      pathRewrite: { '^/common': '' },
    },
  },
  routes,
  title: '请输入网页title',
  /* terserOptions: {
    compress: {
      drop_console: isEnvProduction,
    },
  }, */
  define: {
    'process.env.CUSTOME_ENV': process.env.CUSTOME_ENV,
  },
});
export default config;
