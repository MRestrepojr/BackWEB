import { Router } from 'express';
import { registrarUsuario,  iniciarSesion, obtenerUsuario,  updateUsuario,  deleteUsuario} from '../controllers/usuarios.controller.js';

const router = Router();

// Definir rutas y asignar controladores correspondientes
router.post('/registro', registrarUsuario);    // Ruta para registrar un usuario
router.post('/login', iniciarSesion);          // Ruta para iniciar sesión
router.get('/:id', obtenerUsuario);            // Ruta para obtener información de un usuario específico
router.put('/:id', updateUsuario);             // Ruta para actualizar un usuario
router.delete('/:id', deleteUsuario);          // Ruta para eliminar un usuario

export default router;
