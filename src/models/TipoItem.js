import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const TipoItem = sequelize.define(
  "TipoItem",
  {
    id_tipo_item: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default TipoItem;