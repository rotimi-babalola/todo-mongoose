import mongoose from 'mongoose';
import appConfig from './config';

/* eslint no-undef:0 */
mongoose.Promise = global.Promise;

const connect = (config = appConfig) => {
  mongoose.connect(config.db.url);
};

const connection = mongoose.connection;

/* eslint no-console:0 */
connection.on('error', () => console.error('Unable to connect'));

connection.once('open', () => console.log('Connected to DB successfully'));

export default connect;
