import express from 'express';
import {Request, Response} from 'express' ;
import productsRouter from './product.routes';
import userRouter from './user.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.get('', (req: Request,res: Response) => {
  res.send("hello");  
})

// router.use('/api/auth', authRouter);
router.use('/api/products', productsRouter);
// router.use('/api/users', userRouter);

export default router;