import { Router } from 'express';
import { getPrestamos, createPrestamo, updatePrestamo, deletePrestamo } from '../controllers/prestamos.controller.js';

const router = Router();

// Definir las rutas para los préstamos
router.get('/:id', getPrestamos);               // Obtener todos los préstamos de un usuario
router.post('/', createPrestamo);               // Crear un nuevo préstamo
router.put('/:id', updatePrestamo);             // Actualizar un préstamo existente
router.delete('/:id', deletePrestamo);          // Eliminar un préstamo

export default router;
