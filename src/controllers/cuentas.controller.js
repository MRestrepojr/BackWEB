import pool from '../database/database.js';

// Obtener el saldo de la cuenta del usuario
export const obtenerSaldo = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT saldo FROM usuarios WHERE id = ?', [id]);

    if (rows.length > 0) {
      res.status(200).json({ saldo: rows[0].saldo });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo el saldo de la cuenta', error });
  }
};
