import { Request, Response } from "express";
import * as models from "../models/index";
import { S3StorageUploader } from "../object-storage-models/s3StorageUploader.model";
import { VoucherGenerator } from "../utils/voucher-generator-helper";

export class VoucherController {
	static async getVouchers(req: Request, res: Response) {
		let params = req.query;

    (models?.default as any)?.["Vouchers"]
					.getVouchers(params)
					.then((data: any) => {
						res.json({ data });
					});
	}

	static async createVouchers(req: Request, res: Response) {
		let vouchers = req.body;

		VoucherGenerator.generateVouchers(vouchers.length, 8).then(
			(data: Array<string>) => {
				vouchers = vouchers.map((voucher: any, i: number) => {
					voucher.couponCode = data[i];
					return voucher;
				});

				(models?.default as any)?.["Vouchers"]
					.createVouchers(vouchers)
					.then((data: any) => {
						res.json({ message: "voucher added successfully" });
					});
			}
		);
	}

	static async deleteVouchers(req: Request, res: Response) {}

	static async mapVouchers(req: Request, res: Response) {}
}
