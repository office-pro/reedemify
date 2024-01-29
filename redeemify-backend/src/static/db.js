"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'myDb',
//   password: 'root',
//   port: 5432
// })
var pool = new pg_1.Client({
    host: "postgres-dv.postgres.database.azure.com",
    user: "dv_promo",
    password: "dvpromo@123",
    database: "myDb",
    port: 5432,
    ssl: true
});
exports["default"] = pool;
