const express = require('express');
const entry = require('./entry');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const apiRouter = express.Router();
const context = "/api";
entry(apiRouter);
app.use(context, apiRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT} PORT`);
})