import Usuario from  "../models/Usuario.js"

export class UsuarioRepo{
    async retrieveAll() {
        try {
            return await Usuario.findAll({attributes: {exclude: ['password']}});
        } catch (error){
            console.error("Error obteniendo a los usuarios", error);
            throw new Error("No se pudieron obtener a los usuarios");
        }
    }

    async createUsuario(body){
        try {
            if(
                !body.nombres ||
                !body.apellidos ||
                !body.cedula ||
                !body.email ||
                !body.celular ||
                !body.password
            ) {
                throw new Error("Todos los campos son requeridos.");
            }

            const usuario = await Usuario.create({
                nombres: body.nombres,
                apellidos: body.apellidos,
                cedula: body.cedula,
                email: body.email,
                celular: body.celular,
                imagen: body.imagen || null,
                password: body.password,
            });

            return usuario;

        } catch (error) {
            console.error("Error al crear al usuario: ", error);
            throw new Error("No se pudo crear al usuario");
        }
    }

    async retrieveById(id){
        try {
            const usuario = await Usuario.findByPk(id);
            return usuario;
        } catch (error){
            console.error("Error al obtener al usuario: ", error);
            throw new Error("No se puedo obtener al usuario");
        }
    }

    async updateUsuario(id, body){
        try {
            if (!id || isNaN(Number(id))){
                throw new Error("Id invalido.");
            }

            const usuario = await Usuario.findByPk(id);
            
            if (usuario) {
                usuario.nombres = body.nombres,
                usuario.apellidos = body.apellidos,
                usuario.cedula = body.cedula,
                usuario.email = body.email,
                usuario.celular = body.celular,
                usuario.imagen = body.imagen || null, //campo opcional
                usuario.password = body.password,

                await usuario.save();
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error al actulizar al usuario:", error);
            throw new Error("No se puedo actualizar al usuario.");
        }
    }

    async deleteUsuario(id){
        try {
            if (!id || isNaN(Number(id))){
                throw new Error("Id invalido.");
            }

            const usuario = await Usuario.findByPk(id);
            if (usuario){
                await usuario.destroy();
                return true;
            }
            return false;

        } catch (error) {
            console.error("Error al eliminar al usuario:", error);
            throw new Error("No se puedo eliminar al usuario.");
        }
    }
}