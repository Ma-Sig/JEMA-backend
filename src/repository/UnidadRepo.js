import Unidad from "../models/Unidad.js";

export class UnidadRepo{
    async retrieveAll() {
        try {
            return await Unidad.findAll();
        } catch (error){
            console.error("Error obteniendo a las unidades", error);
            throw new Error("No se pudieron obtener a las unidades");
        }
    }

    async createUnidad(body){
        try {
            if(!body.nombre) {
                throw new Error("Todos los campos son requeridos.");
            }

            const unidadCreada = await Unidad.create({...body});
            return unidadCreada;

        } catch (error) {
            console.error("Error al crear la unidad: ", error);
            throw new Error("No se pudo crear la unidad");
        }
    }

    async retrieveById(id){
        try {
            const unidad = await Unidad.findByPk(id);
            return unidad;

        } catch (error){
            console.error("Error al obtener la unidad: ", error);
            throw new Error("No se puedo obtener la unidad");
        }
    }

    async updateUnidad(id, body){
        try {
            if (!id || isNaN(Number(id))){
                throw new Error("Id invalido.");
            }

            const unidad = await Unidad.findByPk(id);
            if (!unidad) {
                throw new Error("Unidad de servicio no encontrado.");
            }
            
            unidad.set({...body});
            await unidad.save();

            return unidad;
        } catch (error) {
            console.error("Error al actulizar la unidad:", error);
            throw new Error("No se puedo actualizar la unidad.");
        }
    }

    async deleteUnidad(id){
        try {
            if (!id || isNaN(Number(id))){
                throw new Error("Id invalido.");
            }

            const unidad = await Unidad.findByPk(id);
            if (unidad){
                await unidad.destroy();
                return true;
            }
            return false;

        } catch (error) {
            console.error("Error al eliminar la unidad:", error);
            throw new Error("No se puedo eliminar la unidad.");
        }
    }
}