import { UsuarioRepo } from "../repository/UsuarioRepo.js";

class UsuarioController {

    constructor(){
        this.usuarioRepo = new UsuarioRepo();
    }

    getAll = async (req, res) => {
        try {
            const usuarios = await this.usuarioRepo.retrieveAll();
            res.status(200).json(usuarios);
        }catch (error) {
            console.error("Error al obtener a los usuarios: ", error);
            res.status(500).json({ message: "No se pudo obtener a los usuarios"});
        }
    };

    create = async (req, res) => {
        try {
            const usuario = await this.usuarioRepo.createUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            console.error("No se pudo crear al usuario: ", error);
            res.status(500).json({ message: "No se puedo crear al usuario."});
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id;
            const usuario = await this.usuarioRepo.retrieveById(id);
            res.status(200).json(usuario);
            
        } catch (error) {
            console.error("Error al obtener al usuario: ", error);
            res.status(500).json({ message: "No se pudo obtener al usuario."});
        }
    }
    
    update = async (req, res) => {
        try {
            const id = req.params.id;
            const state = await this.usuarioRepo.updateUsuario(id, req.body);

            if (state){
                res.status(200).json({ message: "Usuario actualizado exitosamente."});
            }else {
                res.status(500).json({ message: "No se pudo modificar al usuario"});
            }
        } catch (error){
            console.error("No se pudo modificar al usuario", error);
            res.status(500).json({ message: "No se pudo modificar al usuario"});
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const state = await this.usuarioRepo.deleteUsuario(id);

            if (state){
                res.status(200).json({ message: "Usuario eliminado exitosamente."});
            }else {
                res.status(500).json({ message: "No se pudo eliminar al usuario"});
            }
        } catch (error){
            console.error("No se pudo eliminar al usuario", error);
            res.status(500).json({ message: "No se pudo eliminar al usuario"});
        }
    }
}

export default UsuarioController;