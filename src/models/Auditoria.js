import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Usuario from "./Usuario.js";

const Auditoria = sequelize.define(
  "Auditoria",
  {
    id_auditoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id_usuario",
      },
    },
    nombre_tabla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_registro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    campo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor_anterior: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    valor_nuevo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);


export default Auditoria;