import pool from '../database/database.js';

// Obtener todas las transacciones de un usuario
export const getTransacciones = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM transacciones WHERE usuario_id = ?', [id]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo transacciones', error });
  }
};

// Crear una nueva transacción
export const createTransaccion = async (req, res) => {
  const { usuario_id, tipo, monto, fecha } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO transacciones (usuario_id, tipo, monto, fecha) VALUES (?, ?, ?, ?)',
      [usuario_id, tipo, monto, fecha]
    );
    res.status(201).json({ message: 'Transacción creada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creando transacción', error });
  }
};

// Actualizar una transacción existente
export const updateTransaccion = async (req, res) => {
  const { id } = req.params;
  const { tipo, monto, fecha } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE transacciones SET tipo = ?, monto = ?, fecha = ? WHERE id = ?',
      [tipo, monto, fecha, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Transacción actualizada' });
    } else {
      res.status(404).json({ message: 'Transacción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando transacción', error });
  }
};

// Eliminar una transacción
export const deleteTransaccion = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM transacciones WHERE id = ?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Transacción eliminada' });
    } else {
      res.status(404).json({ message: 'Transacción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando transacción', error });
  }
};

