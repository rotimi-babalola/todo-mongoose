import merge from 'lodash.merge';

/* eslint no-undef:0 */
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  port: 5000,
  secrets: {},
  db: {
    url: 'mongodb://localhost/todo-mongoose',
  },
};

let envConfig;

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config;
    break;
  case 'testing':
  case 'test':
    envConfig = require('./testing').config;
    break;
  case 'production':
  case 'prod':
    envConfig = require('./prod').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
