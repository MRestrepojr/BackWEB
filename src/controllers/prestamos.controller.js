import pool from '../database/database.js';

// Obtener todos los préstamos de un usuario
export const getPrestamos = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM prestamos WHERE usuario_id = ?', [id]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo préstamos', error });
  }
};

// Crear un nuevo préstamo
export const createPrestamo = async (req, res) => {
  const { usuario_id, monto, plazo, estado, fecha_solicitud } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO prestamos (usuario_id, monto, plazo, estado, fecha_solicitud) VALUES (?, ?, ?, ?, ?)',
      [usuario_id, monto, plazo, estado, fecha_solicitud]
    );
    res.status(201).json({ message: 'Préstamo creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creando préstamo', error });
  }
};

// Actualizar un préstamo existente
export const updatePrestamo = async (req, res) => {
  const { id } = req.params;
  const { monto, plazo, estado, fecha_solicitud } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE prestamos SET monto = ?, plazo = ?, estado = ?, fecha_solicitud = ? WHERE id = ?',
      [monto, plazo, estado, fecha_solicitud, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Préstamo actualizado' });
    } else {
      res.status(404).json({ message: 'Préstamo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando préstamo', error });
  }
};

// Eliminar un préstamo
export const deletePrestamo = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM prestamos WHERE id = ?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Préstamo eliminado' });
    } else {
      res.status(404).json({ message: 'Préstamo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando préstamo', error });
  }
};
