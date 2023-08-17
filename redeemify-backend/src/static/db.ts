import {Pool} from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myDb',
  password: 'root',
  port: 5432
})

export default pool;