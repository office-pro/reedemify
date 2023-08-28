import { Request, Response } from 'express';
import pool from "../static/db";

export class WalletController {

    // static async add(request: Request, response: Response) {

    //     const { userId, salesAmount, walletPoints } = request.body;


    //     try {
    //         const db = await pool.connect();

    //         const fetchUSerForWallet = await db.query('select * from public.wallet where userid = $1', [userId]);
    //         if (fetchUSerForWallet?.rowCount > 0) {
    //             response.status(500).json({
    //                 message: 'Already wallet exists for user'
    //             });
    //             pool.end();
    //         } else {
    //             const rows = await db.query('INSERT INTO public.wallet_details(userid, salesamount, walletpoint) VALUES($1,$2,$3)', [userId, salesAmount, walletPoints]);
    //             console.log(rows)
    //             response.status(201).json({
    //                 message: 'Wallet created  successfully'
    //             });
    //             pool.end();
    //         }
    //     } catch (err) {
    //         response.status(500).json({ error: "Internal Server error" })
    //     }

    // }

    // static async delete(req: Request, res: Response) {
    //     const { walletId } = req.body;
    //     try {
    //         const db = await pool.connect();
    //         const deleteResult = await db.query('Delete FROM  public.wallet where walletid = $1', [walletId]);

    //         if (deleteResult.rowCount) {
    //             // res.send("Found")
    //             res.status(201).json({
    //                 message: 'Wallet found  successfully'
    //             });
    //             // res.status(404).json({ message: 'Wallet found' });
    //         }
    //         else {
    //             res.status(500).json({ error: 'wallets could not be deleted' });
    //         }





    //     }
    //     catch (error) {
    //         res.status(500).json({ error: "Internal Server errorww" })

    //     }

    // }
}