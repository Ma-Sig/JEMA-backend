import { Router } from "express";
import UnidadController from "../controllers/UnidadController.js";

const UnidadRouter = Router();
const unidadController = new UnidadController();

/**
 * @swagger
 * /unidades:
 *   get:
 *     summary: Obtiene todas las unidades
 *     tags: [Unidades]
 *     responses:
 *       200:
 *         description: Lista de unidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_unidad:
 *                     type: integer
 *                     description: ID único de la unidad
 *                   nombre:
 *                     type: string
 *                     description: Nombre de la unidad
 *       500:
 *         description: Error al obtener las unidades
 */

UnidadRouter.get("/unidades", unidadController.getAll);

/**
 * @swagger
 * /unidades/{id}:
 *   get:
 *     summary: Obtiene una unidad por su ID
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la unidad
 *     responses:
 *       200:
 *         description: Unidad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_unidad:
 *                   type: integer
 *                   description: ID único de la unidad
 *                 nombre:
 *                   type: string
 *                   description: Nombre de la unidad
 *       404:
 *         description: Unidad no encontrada
 *       500:
 *         description: Error al obtener la unidad
 */

UnidadRouter.get("/unidades/:id", unidadController.getById);

/**
 * @swagger
 * /unidades:
 *   post:
 *     summary: Crea una nueva unidad
 *     tags: [Unidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la unidad
 *     responses:
 *       201:
 *         description: Unidad creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_unidad:
 *                   type: integer
 *                   description: ID único de la unidad
 *                 nombre:
 *                   type: string
 *                   description: Nombre de la unidad
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error al crear la unidad
 */

UnidadRouter.post("/unidades", unidadController.create);

/**
 * @swagger
 * /unidades/{id}:
 *   put:
 *     summary: Actualiza una unidad existente
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la unidad a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre de la unidad
 *     responses:
 *       200:
 *         description: Unidad actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_unidad:
 *                   type: integer
 *                   description: ID único de la unidad
 *                 nombre:
 *                   type: string
 *                   description: Nombre actualizado de la unidad
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Unidad no encontrada
 *       500:
 *         description: Error al actualizar la unidad
 */

UnidadRouter.put("/unidades/:id", unidadController.update);

/**
 * @swagger
 * /unidades/{id}:
 *   delete:
 *     summary: Elimina una unidad por su ID
 *     tags: [Unidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la unidad a eliminar
 *     responses:
 *       200:
 *         description: Unidad eliminada exitosamente
 *       404:
 *         description: Unidad no encontrada
 *       500:
 *         description: Error al eliminar la unidad
 */

UnidadRouter.delete("/unidades/:id", unidadController.delete);


export default UnidadRouter;