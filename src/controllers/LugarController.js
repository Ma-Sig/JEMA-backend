import { LugarRepo } from "../repository/LugarRepo.js";

class LugarController {
    constructor(){
        this.lugarRepo = new LugarRepo();
    }

    getAll = async (req, res) => {
        try {
            const lugares = await this.lugarRepo.retrieveAll();
            res.status(200).json(lugares);
        }catch (error) {
            console.error("Error al obtener a los lugares: ", error);
            res.status(500).json({ message: "No se pudo obtener a los lugares"});
        }
    };

    create = async (req, res) => {
        try {
            const lugares = await this.lugarRepo.createLugar(req.body);
            res.status(201).json(lugares);
        }catch (error) {
            console.error("Error al crear el lugar: ", error);
            res.status(500).json({ message: "No se pudo crear el lugar"});
        }
    }
}

export default LugarController;