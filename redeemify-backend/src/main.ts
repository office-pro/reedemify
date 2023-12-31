import express from 'express';
import pool from "./static/db";
import cors from 'cors' ;
import helmet from "helmet";
import router from './Routes/routes';
import dbConfig from './config/database';
import Database from './database';
import environment from './config/environment';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import * as models from './models/index';
import { AuthenticationMiddleware } from './authentication/authenticationMiddleware';
import { S3StorageUploader } from './object-storage-models/s3StorageUploader.model';
// import { FirebaseStorageModel } from './object-storage-models/firebaseStorage.model';

(async() => {
    try {
        const db =new Database(environment.nodeEnv,dbConfig);
        await db.connect()
    } catch (err) {
        console.log(err)
    }
})()

// const firebaseStorage = new FirebaseStorageModel();
const s3Storage = new S3StorageUploader();

const app = express();

const corsOptions = {
  origin: '*', // Replace with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, authorization headers, etc.
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on a 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
  })
);
app.use('/', AuthenticationMiddleware.authenticate , router);


app.listen(environment.port, () => {
  console.log('server is running on port '+environment.port);
})
