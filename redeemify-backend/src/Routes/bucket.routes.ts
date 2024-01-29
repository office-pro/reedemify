import express from 'express';
import { BucketController } from '../Controller/bucket.controller';
import { UploadData } from '../middleware/upload.middleware';

const bucketRouter = express.Router();

bucketRouter
// get Apis
.get('/', BucketController.getBucket)
.get('/:bucketId', BucketController.getBucket)
.get('/getMappedBuckets/:brandId', BucketController.getMappedBucketByBrand)
.get('/getMappedBuckets/:brandId/:bucketId', BucketController.getMappedBucketByBrand)
.get('/bucketListProducts',BucketController.getAllBucketListProducts)
.get('/getByBucketId',BucketController.getByBucketId)

// edit api

.patch('/bucketListProduct/:bucketListProductId', BucketController.editBucketListProduct)

// post Apis
.post('/createBucket',BucketController.createBucket)
.post('/createBucketListProduct',BucketController.createBucketListProduct)
.post('/mapBrandToBucket',BucketController.mapBrandToBucket)

// delete Apis
.post('/deleteBucket',BucketController.deleteBucket)
.post('/deleteBucketListProduct',BucketController.deleteBucketListProduct)




export default bucketRouter;