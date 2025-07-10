import { Router } from "express";
import ConsumoServicioController from "../controllers/ConsumoServicioController.js";

const ConsumoServicioRouter = Router();
const consumoServicioController = new ConsumoServicioController();

/**
 * @swagger
 * tags:
 *   name: ConsumosServicio
 *   description: Endpoints relacionados con los consumos de servicio
 */

/**
 * @swagger
 * /consumos-servicio:
 *   get:
 *     summary: Obtiene todos los consumos de servicio
 *     tags: [ConsumosServicio]
 *     responses:
 *       200:
 *         description: Lista de consumos de servicio
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ConsumoServicio'
 */

ConsumoServicioRouter.get("/consumos-servicio", consumoServicioController.getAll);

/**
 * @swagger
 * /consumos-servicio/{id_consumo}:
 *   get:
 *     summary: Obtiene un consumo de servicio por su ID
 *     tags: [ConsumosServicio]
 *     parameters:
 *       - in: path
 *         name: id_consumo
 *         required: true
 *         schema:
 *           type: object
 *         description: ID del consumo de servicio
 *     responses:
 *       200:
 *         description: Consumo de servicio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConsumoServicio'
 *       404:
 *         description: Consumo de servicio no encontrado
 */

ConsumoServicioRouter.get("/consumos-servicio/:id_consumo", consumoServicioController.getById);

/**
 * @swagger
 * /consumos-servicio/lugar/{id_lugar}:
 *   get:
 *     summary: Obtiene los consumos de servicio por ID de lugar
 *     tags: [ConsumosServicio]
 *     parameters:
 *       - in: path
 *         name: id_lugar
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del lugar para obtener los consumos asociados
 *     responses:
 *       200:
 *         description: Lista de consumos de servicio para el lugar especificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ConsumoServicio'
 *       404:
 *         description: Lugar no encontrado
 */

ConsumoServicioRouter.get("/consumos-servicio/lugar/:id_lugar", consumoServicioController.getByIdLugar);


/**
 * @swagger
 * /consumos-servicio:
 *   post:
 *     summary: Crea un nuevo consumo de servicio
 *     tags: [ConsumosServicio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConsumoServicioInput'
 *     responses:
 *       201:
 *         description: Consumo de servicio creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConsumoServicio'
 *       400:
 *         description: Error en la solicitud
 */

ConsumoServicioRouter.post("/consumos-servicio", consumoServicioController.create);

/**
 * @swagger
 * /consumos-servicio/{id_consumo}:
 *   put:
 *     summary: Actualiza un consumo de servicio existente
 *     tags: [ConsumosServicio]
 *     parameters:
 *       - in: path
 *         name: id_consumo
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del consumo de servicio a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConsumoServicioInput'
 *     responses:
 *       200:
 *         description: Consumo de servicio actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConsumoServicio'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Consumo de servicio no encontrado
 */
ConsumoServicioRouter.put("/consumos-servicio/:id_consumo", consumoServicioController.update);

/**
 * @swagger
 * /consumos-servicio/{id_consumo}:
 *   delete:
 *     summary: Elimina un consumo de servicio por su ID
 *     tags: [ConsumosServicio]
 *     parameters:
 *       - in: path
 *         name: id_consumo
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del consumo de servicio a eliminar
 *     responses:
 *       200:
 *         description: Consumo de servicio eliminado exitosamente
 *       404:
 *         description: Consumo de servicio no encontrado
 */
ConsumoServicioRouter.delete("/consumos-servicio/:id_consumo", consumoServicioController.delete);

export default ConsumoServicioRouter;