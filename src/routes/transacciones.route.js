import { Router } from 'express';
import { getTransacciones, createTransaccion, updateTransaccion, deleteTransaccion } from '../controllers/transacciones.controller.js';

const router = Router();

// Definir las rutas para las transacciones
router.get('/:id', getTransacciones);               // Obtener todas las transacciones de un usuario
router.post('/', createTransaccion);                // Crear una nueva transacción
router.put('/:id', updateTransaccion);              // Actualizar una transacción existente
router.delete('/:id', deleteTransaccion);           // Eliminar una transacción

export default router;
