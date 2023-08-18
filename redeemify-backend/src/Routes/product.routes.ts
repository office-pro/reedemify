import express, {Request, Response} from 'express';


const productsRouter = express.Router();


productsRouter
.get('/', (req:Request, res: Response) => {
  res.send("products")
})
.post('/:id', (req:Request, res: Response) => {
  console.log(req.body);
  res.send("products post")
})

export default productsRouter;