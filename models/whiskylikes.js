"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WhiskyLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: "user_id",
        foreignKey: "user_id",
      });
      this.belongsTo(models.Whiskys, {
        targetKey: "whisky_id",
        foreignKey: "whisky_id",
      });
    }
  }
  WhiskyLikes.init(
    {
      whiskylike_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "user_id",
        },
        onDelete: "CASCADE",
      },
      whisky_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Whiskys",
          key: "whisky_id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "WhiskyLikes",
    }
  );
  return WhiskyLikes;
};
