import { Sequelize, Model, DataTypes, Op } from "sequelize";
import * as models from "./index";
import { StaticModelHelper } from "./static-model-helper";
export default (sequelize: Sequelize) => {
	class brandbucketmapper extends Model {
		static associate(models: any) {
			brandbucketmapper.belongsTo(models["brands"], {
				foreignKey: "brandId",
			});

			brandbucketmapper.belongsTo(models["users"], {
				foreignKey: "userId",
			});

			brandbucketmapper.belongsTo(models["bucket"], {
				foreignKey: "bucketId",
			});
		}

		static async deletebuckets(bucketIds: Array<number>, conditions: any = {}) {
			return sequelize.transaction(async () => {
				console.log(bucketIds);
				return brandbucketmapper.destroy({
					where: {
						bucketId: {
							[Op.in]: bucketIds,
						},
					},
					...conditions,
				});
			});
		}

		static async getActiveBucketProducts(brandId: number) {
			return sequelize.transaction(async () => {
				
				return brandbucketmapper.findOne({
					where: {
						brandId: brandId,
						isActive: true
					},
					include: [
            {
							model: models?.default?.brands,
							attributes: ["brandId", "brandName"],
						},
						{
							model: models?.default?.users,
							attributes: ["userId", "firstName", "lastName"],
						},
						{
							model: models?.default?.bucket,
							include: [
								{
									model: models?.default?.bucketListProduct,
									include: [
										{
											model: models?.default?.product,
											include: [
												{
													model: models?.default?.productImagesUrlContainer,
												},
											],
										},
									],
								},
							],
						},

					]
				});
			});
		}

		static async getAllBrandsByBuckets(conditions: any = {}) {
			return sequelize.transaction(async () => {
				return await brandbucketmapper.findAll({
					include: [
						{
							model: models?.default?.brands,
							attributes: ["brandId", "brandName"],
						},
						{
							model: models?.default?.users,
							attributes: ["userId", "firstName", "lastName"],
						},
						{
							model: models?.default?.bucket,
							include: [
								{
									model: models?.default?.bucketListProduct,
									include: [
										{
											model: models?.default?.product,
											include: [
												{
													model: models?.default?.productImagesUrlContainer,
												},
											],
										},
									],
								},
							],
						},
					],
					...conditions
				});
			});
		}

		static async createbucket(bucketItems: Array<any>, conditions: any = {}) {
			return StaticModelHelper.bulkCreateOrUpdate(
				brandbucketmapper,
				bucketItems,
				{
					keys: ["bucketId", "brandId"],
					...conditions,
				},
				{
					keys: ["bucketId", "brandId"],
				}
			);
		}
	}

	brandbucketmapper.init(
		{
			brandbucketmapperid: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			bucketId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			brandId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
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
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "brandbucketmapper",
			tableName: "brandbucketmapper",
		}
	);

	return brandbucketmapper;
};
