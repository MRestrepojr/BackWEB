import app from './app.js';
import pool from './database/database.js'; // 

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
