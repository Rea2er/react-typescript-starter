import { resolve } from 'path';
import { isDevelopment, PROJECT_PATH } from '../constant';

export const entry = {
  app: resolve(PROJECT_PATH, './src/app.js'),
};
export const output = {
  filename: `js/[name]${isDevelopment ? '' : '.[hash:8]'}.js`,
  path: resolve(PROJECT_PATH, './dist'),
};
