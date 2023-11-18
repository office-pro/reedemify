import express from 'express';
import { BucketController } from '../Controller/bucket.controller';
import { UploadData } from '../middleware/upload.middleware';

const bucketRouter = express.Router();

bucketRouter
// get Apis
.get('/', BucketController.getBucket)
.get('/bucketListProducts',BucketController.getAllBucketListProducts)
.get('/getByBucketId',BucketController.getByBucketId)

// post Apis
.post('/createBucket',BucketController.createBucket)
.post('/createBucketListProduct',BucketController.createBucketListProduct)

// delete Apis
.delete('/deleteBucket',BucketController.deleteBucket)
.delete('/deleteBucketListProduct',BucketController.deleteBucketListProduct)




export default bucketRouter;