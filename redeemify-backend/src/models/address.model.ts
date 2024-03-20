import { Sequelize, Model, DataTypes, Op } from "sequelize";
import * as models from "./index";
import { StaticModelHelper } from "./static-model-helper";
export default (sequelize: Sequelize) => {
	class Address extends Model {
		static associate(models: any) {

			Address.belongsTo(models["users"], {
				foreignKey: "userId",
			});

		}

		static async deleteAddressItems(addressIds: Array<number>, conditions: any = {}) {
			return sequelize.transaction(async () => {
				return Address.destroy({
					where: {
						addressId: {
							[Op.in]: addressIds,
						},
					},
					...conditions,
				});
			});
		}

		static createAddress(
			AddressArr: Array<{
				brandId: string;
				userId: string;
				productId: string;
				quantity: number;
				total: number;
			}>
		) {
			return StaticModelHelper.bulkCreateOrUpdate(
				Address,
				AddressArr,
				{
					keys: ["brandId", "productId"],
				},
				{
					keys: ["brandId", "productId"],
				}
			);
			// });
		}

		static findAddressByaddressId(address: {
			addressId?: number;
			userId?: string;
			productId?: string;
			brandId?: string;
		}) {
			return sequelize.transaction(async () => {
				return Address.findAll({
					where: address,
					attributes: ["addressId", "quantity", "total", "points"],
					include: [
						{
							model: models?.default?.product,
							include: [
								{
									model: models?.default?.productImagesUrlContainer,
									attributes: ["imageUrls"],
								},
							],
							attributes: ["productName", "productId"],
						},
					],
				});
			});
		}

		// static findAllBrands(options: any = {}) {
		//   return sequelize.transaction(async() => {
		//     return brands.findAll({
		//     attributes: ['brandId', 'brandName','brandCss','showPoweredByText', 'isActive','showBanner', 'showClientProducts'],
		//     include: [
		//       {  model: models?.default?.users,
		//         attributes: ['userId','firstName','lastName','mobileNo','roleId','email'],
		//         include: [{
		//           model: models?.default?.roles,
		//           attributes: ['roleName']
		//         }]
		//       }
		//     ],
		//     ...options
		//     });
		//   });
		// }
	}

	Address.init(
		{
			addressId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
      city: {
				type: DataTypes.STRING,
				allowNull: false,
			},
      state: {
				type: DataTypes.STRING,
				allowNull: false,
			},
      userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
      pincode: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
      isShippingAddress: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
        defaultValue: false
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
		},
		{
			sequelize,
			modelName: "Address",
			tableName: "address",
		}
	);

	return Address;
};
