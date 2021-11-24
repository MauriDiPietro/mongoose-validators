import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './db.js'

import UsersRouter from './routes/users.routes.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/users', UsersRouter);

app.listen(3000, ()=>console.log('Server ok!'));