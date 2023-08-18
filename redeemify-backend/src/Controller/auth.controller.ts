import {Request, Response} from 'express';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import pool from '../static/db';

export class AuthController {

  static async register (request: Request, response: Response) {

    const {username, email, passcode,mobile} = request.body; 
    try {
      const db = await pool.connect();
      const hashedPassword = await argon2.hash(passcode);

      await db.query('INSERT INTO public.users(username,email,passcode,mobile) VALUES($1,$2,$3,$4)',[username,email,hashedPassword,mobile]);
    
     response.status(201).json({message: 'User registered successfully'
     });

      pool.end();
    } catch(err) {
      response.status(500).json({error: "Internal Server error"})
    }
  }

  static async login(request: Request, response: Response) {
     const {username, passcode} = request.body;
     
     try {
       const db = await pool.connect();

       const user = await db.query("SELECT * from public.users WHERE username=$1",[username]);

       if(user.rowCount >= 1) {
         const passwordMatches = await argon2.verify((user?.rows[0])?.passcode,passcode);
         if(passwordMatches) {
           const token = jwt.sign({ userId: user.rows[0].id }, 'your_actual_secret_key', { expiresIn: '1h' });
           response.json({ token });
         } else {
            return response.status(401).json({ error: 'Invalid credentials' });
         }
       } else {
          return response.status(401).json({ error: 'Invalid credentials' });
       }
     } catch(error) {
        response.status(500).json({error: "Internal Server error"})
     }
  }

}
