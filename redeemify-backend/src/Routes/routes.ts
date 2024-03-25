import express from 'express';
import { Request, Response } from 'express';
import productsRouter from './product.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';
import WalletRouter from './wallet.routes';
import environment from '../config/environment';
import brandRouter from './brand.routes';
import rolesRouter from './roles.routes';
import bucketRouter from './bucket.routes';
import addressRouter from './address.routes';
import voucherRouter from './voucher.routes';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  res.send("hello from nodejs");
})

router.use('/api/auth', authRouter);
router.use('/api/products', productsRouter);
router.use('/api/users', userRouter);
router.use('/api/brands', brandRouter);
router.use('/api/roles', rolesRouter);
router.use('/api/buckets', bucketRouter);
router.use('/api/address', addressRouter);
router.use('/api/voucher', voucherRouter);
// router.use('/api/wallet', WalletRouter);

export default router;