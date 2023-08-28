import express, { Request, Response } from 'express';
import { WalletController } from '../Controller/wallet.controller';


const WalletRouter = express.Router();


WalletRouter
    .get('/', (req: Request, res: Response) => {
        res.send("WALLET")
    })
    .post('/createWallet', WalletController.add)
    .post('/c', WalletController.delete);

export default WalletRouter;
