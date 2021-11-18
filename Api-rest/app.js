const express = require('express');
const rotaProdutos = require('./routes/produtos.js');
const app = express();


app.use('/produtos', rotaProdutos)



module.exports = app;