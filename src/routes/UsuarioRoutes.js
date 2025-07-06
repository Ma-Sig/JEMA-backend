import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const UsuarioRouter = Router();
const usuarioController = new UsuarioController();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestionar Usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtiene todos los usuario
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

UsuarioRouter.get("/usuarios", usuarioController.getAll);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - cedula
 *               - email
 *               - celular
 *               - password
 *             properties:
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               cedula:
 *                 type: string
 *               email:
 *                 type: string
 *               celular:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */

UsuarioRouter.post("/usuarios", usuarioController.create);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */

UsuarioRouter.get("/usuarios/:id", usuarioController.getById);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Modifica un usuario existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
  *             required:
 *               - nombres
 *               - apellidos
 *               - cedula
 *               - email
 *               - celular
 *               - password
 *             properties:
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               cedula:
 *                 type: string
 *               email:
 *                 type: string
 *               celular:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario modificado
 *       404:
 *         description: Usuario no encontrado
 */

UsuarioRouter.put("/usuarios/:id", usuarioController.update);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */

UsuarioRouter.delete("/usuarios/:id", usuarioController.delete);

export default UsuarioRouter;