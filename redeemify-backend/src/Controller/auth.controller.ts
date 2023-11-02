import {Request, Response} from 'express';
import * as models from '../models/index';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';

export class AuthController {

  static async register (request: Request, response: Response) {

    // const {username, email, passcode,mobile} = request.body; 
    // try {
    //   const db = await pool.connect();
    //   const hashedPassword = await argon2.hash(passcode);

    //   await db.query('INSERT INTO public.users(username,email,passcode,mobile) VALUES($1,$2,$3,$4)',[username,email,hashedPassword,mobile]);
    
    //  response.status(201).json({message: 'User registered successfully'
    //  });

    //   pool.end();
    // } catch(err) {
    //   response.status(500).json({error: "Internal Server error"})
    // }
  }

  static async login(req: Request, res: Response) {

    const {mobileNo, otp, brandName} = req.body;

    (models?.default as any)?.["brands"]
                             .findBrandByBrandId({brandName})
                             .then((data: any) => {
                               if(data?.length > 0) {
                                (models?.default as any)?.["users"]
                                  .getUserById({mobileNo})
                                  .then((dataVal: any) => {
                                    console.log("datavalues - ",data[0].dataValues)
                                    console.log("dataVal - ",dataVal)
                                    if(!!dataVal && (dataVal.dataValues.brandId == data[0].dataValues.brandId)) {
                                      const {mobileNo, userId, userName, role, brand} = dataVal.dataValues;
                                   
                                      console.log("roles - ", role.dataValues);
                                      console.log("brands - ", brand.dataValues);





                                      res.json({"data": jwt.sign({mobileNo, userId, userName,...role.dataValues,...brand.dataValues}, brand.dataValues.brandName, { expiresIn: '1h' })})
                                    } else {
                                      res.status(500).send('Invalid user , client name or otp');
                                    }
                                  })
                               } else {
                                res.status(500).send('Invalid user , client name or otp');
                               }
                              }, () => {
                                res.status(500).send('Invalid user , client name or otp');
                              });


    //  const {username, passcode} = request.body;
     
    //  try {
    //    const db = await pool.connect();

    //    const user = await db.query("SELECT * from public.users WHERE username=$1",[username]);

    //    if(user.rowCount >= 1) {
    //      const passwordMatches = await argon2.verify((user?.rows[0])?.passcode,passcode);
    //      if(passwordMatches) {
    //        const token = jwt.sign({ userId: user.rows[0].id }, 'your_actual_secret_key', { expiresIn: '1h' });
    //        response.json({ token });
    //      } else {
    //         return response.status(401).json({ error: 'Invalid credentials' });
    //      }
    //    } else {
    //       return response.status(401).json({ error: 'Invalid credentials' });
    //    }
    //  } catch(error) {
    //     response.status(500).json({error: "Internal Server error"})
    //  }
  }

}
