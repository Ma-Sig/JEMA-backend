import Auditoria from "./Auditoria.js";
import ConsumoServicio from "./ConsumoServicio.js";
import Item from "./Item.js";
import ItemEstado from "./ItemEstado.js";
import Lugar from "./Lugar.js";
import Prestamo from "./Prestamo.js";
import Servicio from "./Servicio.js";
import TipoItem from "./TipoItem.js";
import Unidad from "./Unidad.js";
import Usuario from "./Usuario.js";


Auditoria.belongsTo(Usuario, { 
  foreignKey: "id_usuario",
  as: "usuarios"
});

ConsumoServicio.belongsTo(Servicio, { 
  foreignKey: "id_servicio",
  as: "servicios"
});
ConsumoServicio.belongsTo(Lugar, { 
  foreignKey: "id_lugar",
  as: "lugares"
});

Item.belongsTo(Lugar, { 
  foreignKey: "id_lugar",
  as: "lugares"
});
Item.belongsTo(TipoItem, { 
  foreignKey: "id_tipo_item",
  as: "tipoItems"
});
Item.belongsTo(ItemEstado, { 
  foreignKey: "id_item_estado",
  as: "itemEstados"
});

Lugar.hasOne(Lugar, {
  foreignKey: "id_lugar_padre",
  as: "subLugares",
  onDelete: "SET NULL",
});
Lugar.belongsTo(Lugar, {
  foreignKey: "id_lugar_padre",
  as: "lugarPadre",
});

Prestamo.belongsTo(Usuario, { 
  foreignKey: "id_usuario_origen",
  as: "usuarioOrigen"
});
Prestamo.belongsTo(Usuario, { 
  foreignKey: "id_usuario",
  as: "usuarioDestino"
});
Prestamo.belongsTo(Lugar, { 
  foreignKey: "id_lugar",
  as: "lugarDestino"
});

Servicio.belongsTo(Unidad, { 
  foreignKey: "id_unidad",
  as: "unidades"
});
