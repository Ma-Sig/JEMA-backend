import { ConsumoServicioRepo } from "../repository/ConsumoServicioRepo.js";
import { UnidadRepo } from "../repository/UnidadRepo.js";

class UnidadController {
    constructor(){
        this.unidadRepo = new UnidadRepo();
    }

    getAll = async (req, res) => {
        try {
            const consumosDeServicios = await this.unidadRepo.retrieveAll();
            res.status(200).json(consumosDeServicios);
            
        }catch (error) {
            console.error("Error al obtener a los consumos de servicios: ", error);
            res.status(500).json({ message: "No se pudo obtener a los consumos de servicios"});
        }
    };

    create = async (req, res) => {
        try {
            const unidadCreada = await this.unidadRepo.createUnidad(req.body);
            res.status(201).json(unidadCreada);
        }catch (error) {
            console.error("Error al crear la unidad: ", error);
            res.status(500).json({ message: "No se pudo crear la unidad"});
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id;
            const unidad = await this.unidadRepo.retrieveById(id);
            res.status(200).json(unidad);
            
        } catch (error) {
            console.error("Error al obtener la unidad: ", error);
            res.status(500).json({ message: "No se pudo obtener la unidad."});
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            const state = await this.unidadRepo.updateUnidad(id, req.body);

            if (state){
                res.status(200).json(state);
            }else {
                res.status(500).json({ message: "No se pudo modificar la unidad."});
            }
        } catch (error){
            console.error("No se pudo modificar la unidad.", error);
            res.status(500).json({ message: "No se pudo modificar la unidad."});
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const state = await this.unidadRepo.deleteUnidad(id);

            if (state){
                res.status(200).json({ message: "Unidad eliminada exitosamente."});
            }else {
                res.status(500).json({ message: "No se pudo eliminar la unidad."});
            }
        } catch (error){
            console.error("No se pudo eliminar la unidad.", error);
            res.status(500).json({ message: "No se pudo eliminar la unidad."});
        }
    }

}

export default UnidadController;