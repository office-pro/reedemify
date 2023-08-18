import express from 'express';
import {Request, Response} from 'express' ;
import productsRouter from './product.routes';
import userRouter from './user.routes';

const router = express.Router();

router.get('', (req: Request,res: Response) => {
  res.send("hello");  
})

router.use('/api/products', productsRouter);
router.use('/api/users', userRouter);

export default router;