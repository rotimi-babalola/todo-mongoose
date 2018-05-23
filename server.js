import express from 'express';
import appConfig from './config';
import connect from './db';

const app = express();

/* eslint no-undef:0 */
const port = appConfig.port || 3000;

// connect to DB;
connect();

// const connection = Mongoose

// setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', (request, response) => {
  response.send({
    message: 'Hello welcome to the API!!!',
  });
});

/* eslint no-console:0 */
app.listen(port, () => console.log(`Server is live on port ${port}`));
