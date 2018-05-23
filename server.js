import express from 'express';
import { request } from 'https';

const app = express();

/* eslint no-undef:0 */
const port = process.env.PORT || 3000;

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
