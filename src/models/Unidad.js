import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Unidad = sequelize.define(
  "Unidad",
  {
    id_unidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
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

export default Unidad;