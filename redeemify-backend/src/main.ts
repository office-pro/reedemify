import express from 'express';
import pool from "./static/db";

const app = express();

app.get('/', (req, res) => {
  res.send("Hello express");
}).get('/users',async(req,res) => {
  try {
    const client = await pool.connect();
    const results = await client.query("Select * from person");
    res.json(results.rows);
    client.release();
    
    } catch(error) {
    console.error("Error fetching users: ", error);
    res.status(500).json({error: "server  error"})
  }
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
})