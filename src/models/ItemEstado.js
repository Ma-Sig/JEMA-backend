import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ItemEstado = sequelize.define(
  "ItemEstado",
  {
    id_item_estado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);


export default ItemEstado;