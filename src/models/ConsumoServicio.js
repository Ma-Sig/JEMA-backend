import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Servicio from "./Servicio.js";
import Lugar from "./Lugar.js";

const ConsumoServicio = sequelize.define(
  "ConsumoServicio",
  {
    id_consumo_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Servicio,
        key: "id_servicio",
      },
    },
    id_lugar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lugar,
        key: "id_lugar",
      },
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
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


export default ConsumoServicio;