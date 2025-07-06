import { Router } from "express";
import ItemEstadoController  from "../controllers/ItemEstadoController.js";

const ItemEstadoRouter = Router();
const itemEstadoController = new ItemEstadoController();

/**
 * @swagger
 * tags:
 *   name: Estados-Item
 *   description: Endpoints para gestionar los estados de los items
 */

/**
 * @swagger
 * /estado-item:
 *   get:
 *     summary: Obtiene todos los estados
 *     tags: [Estados-Item]
 *     responses:
 *       200:
 *         description: Lista de estados de los items
 */

ItemEstadoRouter.get("/estado-item", itemEstadoController.getAll);

/**
 * @swagger
 * /estado-item:
 *   post:
 *     summary: Crea un nuevo estado de items
 *     tags: [Estados-Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - estado
 *             properties:
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estado creado
 */

ItemEstadoRouter.post("/estado-item", itemEstadoController.create);

export default ItemEstadoRouter;