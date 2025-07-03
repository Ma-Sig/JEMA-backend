import Auditoria from "./Auditoria";
import ConsumoServicio from "./ConsumoServicio";
import Item from "./Item";
import ItemEstado from "./ItemEstado";
import Lugar from "./Lugar";
import Prestamo from "./Prestamo";
import Servicio from "./Servicio";
import TipoItem from "./TipoItem";
import Unidad from "./Unidad";
import Usuario from "./Usuario";


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
  foreignKey: "id_usuario_destino",
  as: "usuarioDestino"
});
Prestamo.belongsTo(Inventario, { 
  foreignKey: "id_inventario",
  as: "inventarios"
});
Prestamo.belongsTo(LugarDestino, { 
  foreignKey: "id_lugar_destino",
  as: "lugaresDestino"
});

Servicio.belongsTo(Unidad, { 
  foreignKey: "id_unidad",
  as: "unidades"
});
