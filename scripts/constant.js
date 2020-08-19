import { resolve, parse } from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';
const PROJECT_PATH = resolve(__dirname, '../');
const PROJECT_NAME = parse(PROJECT_PATH).name;

export { isDevelopment, PROJECT_PATH, PROJECT_NAME };
