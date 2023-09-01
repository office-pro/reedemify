import express from 'express';
import { Request, Response } from 'express';
import productsRouter from './product.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';
import WalletRouter from './wallet.routes';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  res.send("hello shashi");
})

// router.use('/api/auth', authRouter);
// router.use('/api/products', productsRouter);
// router.use('/api/users', userRouter);
// router.use('/api/wallet', WalletRouter);

export default router;