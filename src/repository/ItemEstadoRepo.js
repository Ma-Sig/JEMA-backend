import ItemEstado from "../models/ItemEstado.js"

export class ItemEstadoRepo {
    async retrieveAll(){
        try {
            return await ItemEstado.findAll();
        } catch (error) {
            console.error("Error al obtener los estados: ", error);
            throw new Error("No se pudieron obtener los estados.");
        }
    }

    async createItemEstado(body){
        try {
            if(!body.estado){
                throw new Error("Todos los campos son requeridos.");
            }

            const itemEstado = await ItemEstado.create({
                estado: body.estado
            });

            return itemEstado;
        } catch (error) {
            console.error("Error al crear el estado: ", error);
            throw new Error("No se pudo crear el estado");
        }
    }
}
