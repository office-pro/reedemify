import express, { Router } from 'express';
import pool from "./static/db";
import cors from 'cors' ;
import helmet from "helmet";
import router from './Routes/routes'


const app = express();

const corsOptions = {
  origin: '*', // Replace with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, authorization headers, etc.
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on a 204
};

app.use(cors(corsOptions));

app.use('/', router);


app.listen(3000, () => {
  console.log('server is running on port 3000');
})
