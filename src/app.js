import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importar rutas usando nombres exactos
import usuariosRoutes from './routes/usuarios.route.js';
import cuentasRoutes from './routes/cuentas.route.js';
import transaccionesRoutes from './routes/transacciones.route.js';
import prestamosRoutes from './routes/prestamos.route.js';

const app = express();

app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Usar rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/cuentas', cuentasRoutes);
app.use('/api/transacciones', transaccionesRoutes);
app.use('/api/prestamos', prestamosRoutes);

export default app;
