import { Router } from "express";
import LugarController from '../controllers/LugarController.js'

const LugarRouter = Router();
const lugarController = new LugarController();

/**
 * @swagger
 * tags:
 *   name: Lugares
 *   description: Endpoints para gestionar los lugares
 */

/**
 * @swagger
 * /lugares:
 *   get:
 *     summary: Obtiene todos los lugares
 *     tags: [Lugares]
 *     responses:
 *       200:
 *         description: Lista de lugares
 */

LugarRouter.get("/lugares", lugarController.getAll);

/**
 * @swagger
 * /lugares:
 *   post:
 *     summary: Crea un nuevo lugar
 *     tags: [Lugares]
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
 *     responses:
 *       201:
 *         description: Lugar creado
 */

LugarRouter.post("/lugares", lugarController.create);

export default LugarRouter;