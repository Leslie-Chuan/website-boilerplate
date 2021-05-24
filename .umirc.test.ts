import { defineConfig } from 'umi';

const path = require('path');
const { name, version } = require(path.resolve('package.json'));
const env = process.env.UMI_ENV || 'test';
const publicPath = `${process.env.DOMAIN}/${name}/${version}/${env}/views/`;

export default defineConfig({
  publicPath,
});
