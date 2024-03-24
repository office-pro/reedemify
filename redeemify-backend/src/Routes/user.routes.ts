import express, {Request, Response} from 'express';
import { UserController } from '../Controller/user.controller';


const userRouter = express.Router();


userRouter
.get('/', UserController.getUsers)
.get('/:brandId', UserController.getUsers)
.get('/:brandId/:userId', UserController.getUsers)
.post('/create', UserController.createUsers)
.post('/delete', UserController.deleteUsers)
.patch('/:userId', UserController.createUsers);
// .post('/:id', (req:Request, res: Response) => {
//   console.log(req.body);
//   res.send("users post")
// })

export default userRouter;