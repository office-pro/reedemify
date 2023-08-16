import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: ""
});

export default pool