import ConsumoServicio from '../models/ConsumoServicio.js';

export class ConsumoServicioRepo {
    async retrieveAll() {
        try {
            return await ConsumoServicio.findAll();
            
        } catch (error){
            console.error("Error obteniendo ConsumoServicio", error);
            throw new Error("No se pudieron obtener los consumos de servicio");
        }
    }

    async retrieveById(id) {
        try {
            const consumoDeServicio = await ConsumoServicio.findByPk(id);
            return consumoDeServicio;

        } catch (error){
            console.error("Error al obtener el consumo de servicio: ", error);
            throw new Error("No se pudo obtener el consumo de servicio");
        }
    }

    async retrieveByIdLugar(id_lugar) {
        try {
            const consumosDeServicio = await ConsumoServicio.findAll({
                where: { id_lugar }
            });
            return consumosDeServicio;

        } catch (error){
            console.error("Error al obtener los consumos de servicio por lugar: ", error);
            throw new Error("No se pudieron obtener los consumos de servicio por lugar");
        }
    }

    async createConsumoServicio(body){
        try {
            if(
                !body.id_servicio ||
                !body.id_lugar ||
                !body.cantidad ||
                !body.fecha
            ){
                throw new Error("Todos los campos son requeridos.");
            }

            const consumoServicioCreado = await ConsumoServicio.create({...body});

            return consumoServicioCreado;
        } catch (error) {
            console.error("Error al crear el consumo de servicio: ", error);
            throw new Error("No se pudo crear el consumo de servicio");
        }
    }

    async updateConsumoServicio(id, body) {
        try {
            if (!id || isNaN(Number(id))) {
                throw new Error("Id invalido.");
            }

            const consumoServicio = await ConsumoServicio.findByPk(id);
            if (!consumoServicio) {
                throw new Error("Consumo de servicio no encontrado.");
            }

            consumoServicio.set({...body});
            await consumoServicio.save();

            return consumoServicio;

        } catch (error) {
            console.error("Error al actualizar el consumo de servicio: ", error);
            throw new Error("No se pudo actualizar el consumo de servicio");
        }
    }

    async deleteConsumoServicio(id) {
        try {
            if (!id || isNaN(Number(id))) {
                throw new Error("Id invalido.");
            }

            const consumoServicio = await ConsumoServicio.findByPk(id);
            if (!consumoServicio) {
                return false;
            }

            await consumoServicio.destroy();
            return true;

        } catch (error) {
            console.error("Error al eliminar el consumo de servicio: ", error);
            throw new Error("No se pudo eliminar el consumo de servicio");
        }
    }

}