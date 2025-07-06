import Lugar from '../models/Lugar.js';

export class LugarRepo {
    async retrieveAll() {
        try {
            return await Lugar.findAll({
                include: [
                    {
                        model: Lugar,
                        as: 'lugarPadre',
                        attributes: ["id_lugar", "nombre"],
                    }
                ],
            });
        } catch (error){
            console.error("Error obteniendo a los lugares", error);
            throw new Error("No se pudieron obtener a los lugares");
        }
    }

    async createLugar(body){
        try {
            if(!body.nombre){
                throw new Error("Todos los campos son requeridos.");
            }

            const lugar = await Lugar.create({
                id_lugar_padre: body.id_lugar_padre,
                nombre: body.nombre,
                descripcion: body.descripcion
            });

            return lugar;
        } catch (error) {
            console.error("Error al crear el lugar: ", error);
            throw new Error("No se pudo crear el lugar");
        }
    }

}