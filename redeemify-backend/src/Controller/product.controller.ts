import { Request, Response } from "express";
import * as models from "../models/index";
import { ImageResizerHelper } from "../utils/image-resizer-helper";
import { S3StorageUploader } from "../object-storage-models/s3StorageUploader.model";

export class ProductController {
	static async createProduct(req: Request, res: Response) {
		console.log("req - ", req.body);
		(models?.default as any)?.["product"]
			.createProduct(req?.body)
			.then((data: any) => {
				console.log("data - ", data);
				res.json({ message: "data added sucessfully" });
			});
	}

	static async createProductCategories(req: Request, res: Response) {
		(models?.default as any)?.["productCategory"]
			.createProductCategories(req.body)
			.then((data: any) => {
				res.json({ message: "data added sucessfully" });
			});
	}

	static async createProductSubCategory(req: Request, res: Response) {
		(models?.default as any)?.["productSubCategory"]
			.createProductSubCategories(req?.body)
			.then((data: any) => {
				res.json({ message: "data added sucessfully" });
			});
	}

	static async getProductCategory(req: Request, res: Response) {
		(models?.default as any)?.["productCategory"]
			.getProductCategories({}, !!req?.query?.getOnlyCategories)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async getProducts(req: Request, res: Response) {
		const total = await (models?.default as any)?.["product"]?.count();
		(models?.default as any)?.["product"].getAllProducts().then((data: any) => {
			res.json({ data, total });
		});
	}

	static async getProductById(req: Request, res: Response) {
		console.log(req);
		(models?.default as any)?.["product"]
			.getProductById(req.params.productId)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async getProductSubCategories(req: Request, res: Response) {
		(models?.default as any)?.["productSubCategory"]
			.getAllProductSubCategories({}, !!req?.query?.getOnlySubCategories)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async getProductImages(req: Request, res: Response) {
		(models?.default as any)?.["productImagesUrlContainer"]
			.getAllProductImagesUrlContainer()
			.then((data: any) => {
				res.json(data);
			});
	}

	static async deleteProductSubCategories(req: Request, res: Response) {
		(models?.default as any)?.["productSubCategory"]
			.deleteProductSubCategories(req.body)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async deleteProductCategories(req: Request, res: Response) {
		(models?.default as any)?.["productCategory"]
			.deleteProductCategories(req.body)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async deleteProducts(req: Request, res: Response) {
		(models?.default as any)?.["product"]
			.deleteProducts(req.body)
			.then((data: any) => {
				res.json(data);
			});
	}

	static async addToCart(req: Request, res: Response) {
		const { brandId, userId } = req.body && req.body[0];

		(models?.default as any)?.["Cart"].createCart(req.body).then(
			(data: any) => {
				(models?.default as any)?.["Cart"]
					.findCartByCartId({ brandId, userId })
					.then((dataObj: any) => {
                  res.json({ message: "data added successfully", data: dataObj });
					});
			},
			(err: any) => {
				res.json({ message: "something went wrong" });
			}
		);
	}

	static async getCart(req: Request, res: Response) {
		let params = req.query;

		(models?.default as any)?.["Cart"]
			.findCartByCartId(params)
			.then((data: any) => {
				res.json({ data });
			});
	}

	static async deleteCartItems(req: Request, res: Response) {
		let params = req.body;

		(models?.default as any)?.["Cart"]
			.deleteCartItems(params)
			.then((data: any) => {
				res.json({ data });
			});
	}

	static async uploadImages(req: Request, res: Response) {
		let files: Array<any> = ImageResizerHelper.resizeImages(
			req.files as Array<any>
		);

		S3StorageUploader.uploadFiles(req, res, files).then((data: any) => {
			let obj = {
				productImagesName: req?.body?.productImageName,
				imageUrls: data,
			};

			(models?.default as any)?.["productImagesUrlContainer"]
				.createProductImagesUrlContainer([obj])
				.then((obj: any) => {
					(models?.default as any)?.["productImagesUrlContainer"]
						.findOne({
							where: {
								productImagesName: req.body.productImageName,
							},
						})
						.then((findData: any) => {
							res.json(findData);
						});
				});
		});
	}
}
