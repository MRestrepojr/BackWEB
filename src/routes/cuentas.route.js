import { Router } from 'express';
import { obtenerSaldo } from '../controllers/cuentas.controller.js';

const router = Router();

// Definir la ruta para obtener el saldo de la cuenta
router.get('/:id/saldo', obtenerSaldo);  // Ruta para obtener el saldo de la cuenta de un usuario específico

export default router;
