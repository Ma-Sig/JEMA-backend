import { ItemEstadoRepo } from "../repository/ItemEstadoRepo.js"

class ItemEstadoController {
    constructor(){
        this.itemEstadoRepo = new ItemEstadoRepo();
    }

    getAll = async (req, res) => {
        try {
            const itemEstados = await this.itemEstadoRepo.retrieveAll();
            res.status(200).json(itemEstados);
        } catch (error) {
            console.error("Error al obtener los estados: ", error);
            res.status(500).json({ message: "No se pudieron obtener los estados."});
        }
    }

    create = async (req, res) => {
        try {
            const itemEstado = await this.itemEstadoRepo.createItemEstado(req.body);
            res.status(201).json(itemEstado);
        } catch (error){
            console.error("Error al crear el estado: ", error);
            res.status(500).json({ message: "No se pudo crear el estado."});
        }
    }
}

export default ItemEstadoController;