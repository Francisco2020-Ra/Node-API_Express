const { sequelize } = require("../../config/mysql")
const { DataTypes} = require("sequelize")

const Storage = sequelize.define(
    "storages",
    {
        url: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        filename: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true, //TODO createdAt, updateAt
    }
);

module.exports = Storage;