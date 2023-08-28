import express, {Request, Response} from 'express';
import pool from '../static/db';


const productsRouter = express.Router();


productsRouter
.get('/', (req:Request, res: Response) => {
  res.send("products")
})
.post('/createProductCategories', async(req:Request, res: Response) => {
  console.log(req.body);
  const {categoryName,categoryDescription} = req.body;
  try {
    const db =  await pool.connect();
    const rows = await pool.query('Insert into public.productcategories(categoryName,categoryDescription) values ($1,$2)',[categoryName,categoryDescription]);
    res.json({'message': "data added "+ rows.rowCount});
    pool.end();
  } catch(err) {

  }
})
.post('/createProductSubCategories', async(req:Request, res: Response) => {
  console.log(req.body);
  const {categoryId,subCategoryName,subCategoryDescription} = req.body;
  try {
    const db =  await pool.connect();
    const rows = await pool.query('Insert into public.productsubcategories(categoryId,subCategoryName,subCategoryDescription) values ($1,$2,$3)',[categoryId,subCategoryName,subCategoryDescription]);
    res.json({'message': "data added "+ rows.rowCount});
    pool.end();
  } catch(err) {

  }
})

.post('/createProduct', async(req:Request, res: Response) => {
  const {categoryId,subCategoryId,productName,price,points, productDescription} = req.body;
  try {
    const db =  await pool.connect();
    const rows = await pool.query('Insert into public.products(categoryId,subCategoryId,productName,price,points, productDescription) values ($1,$2,$3,$4,$5,$6)',[categoryId,subCategoryId,productName,price,points, productDescription]);
    res.json({'message': "data added "+ rows.rowCount});
    pool.end();
  } catch{

  }
})

export default productsRouter;