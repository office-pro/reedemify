import express, {Request, Response} from 'express';
import { UserController } from '../Controller/user.controller';


const userRouter = express.Router();


userRouter
.get('/', UserController.getUsers)
.get('/brands', UserController.getBrandUsers)
.post('/createBrand', UserController.createBrand)
.post('/createBrands', UserController.createBrands)
// .post('/:id', (req:Request, res: Response) => {
//   console.log(req.body);
//   res.send("users post")
// })

export default userRouter;