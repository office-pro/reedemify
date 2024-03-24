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

		static async deleteAddress(
			addressIds: Array<number>,
			conditions: any = {}
		) {
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
				address: string;
				addressName: string;
				userId: string;
				city: string;
				state: string;
				pincode: number;
				isShippingAddress: boolean;
			}>
		) {
			return StaticModelHelper.bulkCreateOrUpdate(
				Address,
				AddressArr,
				{
					keys: ["userId", "pincode", "addressName"],
				},
				{
					keys: ["userId", "pincode", "addressName"],
				}
			);
			// });
		}

		static findAddressByAddressId(address: {
			addressId?: number;
			userId?: number;
		}) {
			return sequelize.transaction(async () => {
				return Address.findAll({
					where: address
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
			addressName: {
				type: DataTypes.STRING,
				allowNull: false,
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
				defaultValue: false,
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
