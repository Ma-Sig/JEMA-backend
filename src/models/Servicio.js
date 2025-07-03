import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Unidad from "./Unidad.js";

const Servicio = sequelize.define(
  "Servicio",
  {
    id_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_unidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Unidad,
        key: "id",
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);


export default Servicio;