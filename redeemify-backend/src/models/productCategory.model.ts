import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class productCategory extends Model {
        static associate(models: any) {
        }
    }

    productCategory.init({
        productCategoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryName: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            }
        },
        productCategoryDesc: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : new Date()
        },
       

    }, {
        sequelize,
        modelName: 'productCategory',
        tableName: 'productCategory'
    });

    return productCategory;

}