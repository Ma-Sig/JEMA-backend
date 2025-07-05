import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Lugar from "./Lugar.js";
import TipoItem from "./TipoItem.js";
import Item_estado from "./ItemEstado.js";

const Item = sequelize.define(
  "Item",
  {
    id_item: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_lugar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lugar,
        key: "id_lugar",
      },
    },
    id_tipo_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TipoItem,
        key: "id_tipo_item",
      },
    },
    id_item_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Item_estado,
        key: "id_item_estado",
      },
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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


export default Item;