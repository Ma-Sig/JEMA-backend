import { ConsumoServicioRepo } from "../repository/ConsumoServicioRepo.js";

class ConsumoServicioController {
    constructor(){
        this.consumoServicioRepo = new ConsumoServicioRepo();
    }

    getAll = async (req, res) => {
        try {
            const consumosDeServicios = await this.consumoServicioRepo.retrieveAll();
            res.status(200).json(consumosDeServicios);
            
        }catch (error) {
            console.error("Error al obtener a los consumos de servicios: ", error);
            res.status(500).json({ message: "No se pudo obtener a los consumos de servicios"});
        }
    };

    create = async (req, res) => {
        try {
            const consumoCreado = await this.consumoServicioRepo.createConsumoServicio(req.body);
            res.status(201).json(consumoCreado);
        }catch (error) {
            console.error("Error al crear el consumo de servicio: ", error);
            res.status(500).json({ message: "No se pudo crear el consumo de servicio"});
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id_consumo;
            const consumoDeServicio = await this.consumoServicioRepo.retrieveById(id);
            res.status(200).json(consumoDeServicio);
            
        } catch (error) {
            console.error("Error al obtener el consumo de servicio: ", error);
            res.status(500).json({ message: "No se pudo obtener el consumo de servicio."});
        }
    }

    getByIdLugar = async (req, res) => {
        try {
            const id_lugar = req.params.id_lugar;
            const consumosDeServicio = await this.consumoServicioRepo.retrieveByIdLugar(id_lugar);
            res.status(200).json(consumosDeServicio);
            
        } catch (error) {
            console.error("Error al obtener los consumos de servicio por lugar: ", error);
            res.status(500).json({ message: "No se pudieron obtener los consumos de servicio por lugar."});
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id_consumo;
            const state = await this.consumoServicioRepo.updateConsumoServicio(id, req.body);

            if (state){
                res.status(200).json({ message: "Consumo de servicio actualizado exitosamente."});
            }else {
                res.status(500).json({ message: "No se pudo modificar el consumo de servicio"});
            }
        } catch (error){
            console.error("No se pudo modificar el consumo de servicio", error);
            res.status(500).json({ message: "No se pudo modificar el consumo de servicio"});
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id_consumo;
            const state = await this.consumoServicioRepo.deleteConsumoServicio(id);

            if (state){
                res.status(200).json({ message: "Consumo de servicio eliminado exitosamente."});
            }else {
                res.status(500).json({ message: "No se pudo eliminar el consumo de servicio"});
            }
        } catch (error){
            console.error("No se pudo eliminar el consumo de servicio", error);
            res.status(500).json({ message: "No se pudo eliminar el consumo de servicio"});
        }
    }

}

export default ConsumoServicioController;