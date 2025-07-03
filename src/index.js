import app from "./app.js";
import { sequelize } from "./config/database.js";

import "./models/Auditoria.js";
import "./models/ConsumoServicio.js";
import "./models/Item.js";
import "./models/ItemEstado.js";
import "./models/Lugar.js";
import "./models/Prestamo.js";
import "./models/Servicio.js";
import "./models/TipoItem.js";
import "./models/Unidad.js";
import "./models/Usuario.js";

import "./models/associations.js";

async function main() {
  await sequelize.sync();
  app.listen(3000);
  console.log("Server is running on port 3000");
}
main();
