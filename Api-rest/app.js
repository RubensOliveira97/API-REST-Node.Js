import express from 'express';
const app = express();
import * as rotaProdutos from './routes/produtos.js';

app.use('/produtos', rotaProdutos)



export default app;