import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Usuario from "./Usuario.js";
import Inventario from "./Inventario.js";
import LugarDestino from "./LugarDestino.js";

const Prestamo = sequelize.define(
  "Prestamo",
  {
    id_prestamo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario_origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id_usuario",
      },
    },
    id_usuario_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id_usuario",
      },
    },
    id_inventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Inventario,
        key: "id",
      },
    },
    id_lugar_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: LugarDestino,
        key: "id",
      },
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


export default Prestamo;