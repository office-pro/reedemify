import { generate } from "voucher-code-generator";
import argon2 from "argon2";
import environment from "../config/environment";

export class VoucherGenerator {
	static async generateVouchers(noOfVouchers: number = 1, length: number = 8) {
		const vouchers: Array<string> = [];

		while (vouchers.length < noOfVouchers) {
			let code = (await VoucherGenerator.generateCodes(length))
				.valueOf()
				.split("p=")[1]
				.slice(3, length + 3);
			if (!vouchers.includes(code)) {
				vouchers.push(code);
			}
		}

		return vouchers;
	}

	private static async generateCodes(length: number) {
		const voucherCode = generate({ length: length, count: length })[0];
		const secret = environment.jwtAccessTokenSecret;
		const hashedSecret = await argon2.hash(secret);
		const combinedHash = await argon2.hash(secret + voucherCode + hashedSecret);
		return combinedHash;
	}
}
