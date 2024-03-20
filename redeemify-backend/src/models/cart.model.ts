import { Sequelize, Model, DataTypes, Op } from "sequelize";
import * as models from "./index";
import { StaticModelHelper } from "./static-model-helper";
export default (sequelize: Sequelize) => {
	class Cart extends Model {
		static associate(models: any) {
			Cart.belongsTo(models["product"], {
				foreignKey: "productId",
			});

			Cart.belongsTo(models["users"], {
				foreignKey: "userId",
			});

			Cart.belongsTo(models["brands"], {
				foreignKey: "brandId",
			});
		}

		static async deleteCartItems(cartIds: Array<number>, conditions: any = {}) {
			return sequelize.transaction(async () => {
				return Cart.destroy({
					where: {
						cartId: {
							[Op.in]: cartIds,
						},
					},
					...conditions,
				});
			});
		}

		static createCart(
			cartArr: Array<{
				brandId: string;
				userId: string;
				productId: string;
				quantity: number;
				total: number;
			}>
		) {
			return StaticModelHelper.bulkCreateOrUpdate(
				Cart,
				cartArr,
				{
					keys: ["brandId", "productId"],
				},
				{
					keys: ["brandId", "productId"],
				}
			);
			// });
		}

		static findCartByCartId(cart: {
			cartId?: number;
			userId?: string;
			productId?: string;
			brandId?: string;
		}) {
			return sequelize.transaction(async () => {
				return Cart.findAll({
					where: cart,
					attributes: ["cartId", "quantity", "total", "points"],
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

	Cart.init(
		{
			cartId: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			brandId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			productId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			points: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			total: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
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
			modelName: "Cart",
			tableName: "cart",
		}
	);

	return Cart;
};
