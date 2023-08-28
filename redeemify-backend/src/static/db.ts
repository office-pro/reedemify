import {Pool,Client} from 'pg';
import * as fs from 'fs';


// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'myDb',
//   password: 'root',
//   port: 5432
// })

const pool = new Client({
        host:"postgres-dv.postgres.database.azure.com", 
        user:"dv_promo", 
        password:"dvpromo@123", 
        database:"myDb",
         port:5432, 
        ssl:true });



export default pool;