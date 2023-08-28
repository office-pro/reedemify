import express from 'express';
import pool from "./static/db";
import cors from 'cors' ;
import helmet from "helmet";
import router from './Routes/routes';
import dbConfig from './config/database';
import Database from './database';
import environment from './config/environment'

(async() => {
    try {
        const db =new Database(environment.nodeEnv,dbConfig);
        await db.connect()
        console.log("data")
    } catch (err) {
        console.log(err)
    }
})()



const app = express();

pool.connect(err => {
    console.log('hello')
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

    pool
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            pool.end();
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}

const corsOptions = {
  origin: '*', // Replace with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, authorization headers, etc.
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on a 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);


app.listen(3000, () => {
  console.log('server is running on port 3000');
})
