import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Lugar = sequelize.define(
  "Lugar",
  {
    id_lugar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_lugar_padre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Lugar",
        key: "id_lugar",
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);


export default Lugar;