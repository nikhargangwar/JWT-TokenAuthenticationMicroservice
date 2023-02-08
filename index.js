const express = require('express');
const app = express();
const port = 3000;
const UserRouter = require('./src/routers/routes')
app.use(express.json());

app.use(UserRouter);

//starting server
app.listen(port,()=>console.log('app started on port 3000'));