import { Request, Response } from "express";
import * as models from "../models/index";
import { S3StorageUploader } from "../object-storage-models/s3StorageUploader.model";

export class BrandController {
	static async getBrands(req: Request, res: Response) {
		const total = await (models?.default as any)?.["brands"]?.count();
		let params = {};
		if (Object.keys(req.query).length > 0) {
			params = {
				offset: parseInt((req?.query as any)?.offset),
				limit: parseInt((req?.query as any)?.limit),
			};
		}
		(models?.default as any)?.["brands"]
			.findAllBrands(params)
			.then((data: any) => {
				res.json({ data, total });
			});
	}

	static async getActiveBrandProducts(req: Request, res: Response) {
		let brandId: number = !!req.params.brandId
			? parseInt(req.params.brandId)
			: 0;

		if (brandId) {
			(models?.default as any)?.["brandbucketmapper"]
				.getActiveBucketProducts(brandId)
				.then((data: any) => {
					res.json({ data: data });
				});
		} else {
			res.json({ error: "Send Valid Brand Id" });
		}
	}

	static async getBrandByBrandId(req: Request, res: Response) {
		(models?.default as any)?.["brands"]
			.findBrandByBrandId({ brandId: req?.params?.brandId })
			.then((data: any) => {
				res.json(data);
			});
	}

	static async createBrand(req: Request, res: Response) {
		console.log("req files - ", req.file);
		console.log("req - ", req);
		res.json("hello");
		// (models?.default as any)?.["brands"].createBrand(req?.body)
		//                                    .then((data: any) => {
		//                                     res.json(data)
		//                                   }, () => {
		//                                     res.json({errorMessage: "Data already exist"})
		//                                   });
	}

	static async createBrands(req: Request, res: Response) {
		const {
			primaryColor,
			secondaryColor,
			headerColor,
			textColor,
			isDarkMode,
			logo,
		} = req.body;
		const {
			brandName,
			balance,
			limit,
			isActive,
			showPoweredByText,
			showBanner,
			showClientProducts,
		} = req.body;
		let brand = {
			brandName,
			balance,
			limit,
			isActive,
			showPoweredByText,
			showBanner,
			showClientProducts,
			brandCss: {
				primaryColor,
				secondaryColor,
				isDarkMode,
				logo,
				headerColor,
				textColor,
			},
		};

		if (!!(req.files as any)[0]) {
			S3StorageUploader.uploadFilesWithoutPromise(req, res, [
				(req.files as any)[0],
			]).then((data: any) => {
				if (data) {
					brand.brandCss.logo = data;
				}

				(models?.default as any)?.["brands"].createBrands([brand]).then(
					(data: any) => {
						res.json(data);
					},
					(err: any) => {
						res.json({ errorMessage: "duplicate entry present" });
					}
				);
			});
		} else {
			(models?.default as any)?.["brands"].createBrands([brand]).then(
				(data: any) => {
					res.json(data);
				},
				(err: any) => {
					res.json({ errorMessage: "duplicate entry present" });
				}
			);
		}
	}

	static async deleteBrandBanner(req: Request, res: Response) {

		let bannerId: number = !!req.params.bannerId
			? parseInt(req.params.bannerId)
			: 0;
    
		(models?.default as any)?.["brandbanners"]
			.deleteBrandBanners([bannerId])
			.then(
				(val: any) => {
					res.json({ data: "data deleted successfully" });
				},
				(err: any) => {
					res.json({ errorMessage: "failed to delete data" });
				}
			);
		
	}
	static async getBrandBanner(req: Request, res: Response) {
		let brandId: number = !!req.params.brandId
			? parseInt(req.params.brandId)
			: 0;

		(models?.default as any)?.["brandbanners"]
			.findBrandBannerByBrandId({
				where: { brandId },
			})
			.then(
				(val: any) => {
					res.json({ data: val });
				},
				(err: any) => {
					res.json({ errorMessage: "duplicate entry present" });
				}
			);
	}

	static async createBrandBanners(req: Request, res: Response) {
		const { headerText, subHeaderText, brandId, userId, link, imageUrl } =
			req.body;
		let banner = { headerText, subHeaderText, brandId, userId, link, imageUrl };
		const file =
			(req?.files?.length as number) > 0 ? (req?.files as any)[0] : null;

		if (file) {
			S3StorageUploader.uploadFilesWithoutPromise(
				req,
				res,
				[file],
				headerText ? headerText : "banner"
			).then((data: any) => {
				if (data) {
					banner.imageUrl = data;
				}

				(models?.default as any)?.["brandbanners"]
					.createbrandbanners([banner])
					.then(
						(val: any) => {
							res.json({ data: val });
						},
						(err: any) => {
							res.json({ errorMessage: "duplicate entry present" });
						}
					);
			});
		}
		// const {primaryColor, secondaryColor,headerColor, textColor, isDarkMode,logo} = req.body;
		// const {brandName, balance, limit, isActive,showPoweredByText,showBanner,showClientProducts} = req.body;
		// let brand = {
		//   brandName, balance, limit, isActive, showPoweredByText, showBanner, showClientProducts,
		//   brandCss: {primaryColor, secondaryColor, isDarkMode, logo, headerColor, textColor}
		// }

		// if(!!(req.files as any)[0]) {

		//   S3StorageUploader.uploadFilesWithoutPromise(req,res,[(req.files as any)[0]]).then((data:any) =>{

		//     if(data) {
		//       brand.brandCss.logo = data;
		//     }

		//     (models?.default as any)?.["brands"].createBrands([brand])
		//                                     .then((data: any) => {
		//                                       res.json(data)
		//                                     }, (err: any) => {
		//                                       res.json({errorMessage: "duplicate entry present"})
		//                                     });

		//   })
		// } else {
		//   (models?.default as any)?.["brands"].createBrands([brand])
		//                                     .then((data: any) => {
		//                                       res.json(data)
		//                                     }, (err: any) => {
		//                                       res.json({errorMessage: "duplicate entry present"})
		//                                     });
		// }
	}
}
