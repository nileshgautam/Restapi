const express = require('express');
require("../src/db/conn");
const router=require('../src/routers/users');
const port = process.env.port || 3000;
const app = express();
app.use(express.json());
app.use(router);

// Function for welcome menssage
app.get('/', async function (req, res) {
  res.status(200).send('Hello World');
});

// Function for listen port to run our app
app.listen(port, () => {
  console.log('Now we connected');
});