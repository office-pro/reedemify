import express from 'express';
import pool from "./static/db";

const app = express();

app.get('/', (req, res) => {
  res.send("Hello express");
}).get('/users',async(req,res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch(error) {
    console.error("Error fetching users: ", error);
    res.status(500).json({error: "server  error"})
  }
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
})