import pool from '../database/database.js';

// Registrar un usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, email, contrasena, numero_cuenta, tipo, saldo } = req.body;

  try {
    await pool.query(
      'INSERT INTO usuarios (nombre, email, contrasena, numero_cuenta, tipo, saldo) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, email, contrasena, numero_cuenta, tipo, saldo]
    );
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error registrando el usuario', error });
  }
};

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
  const { email, contrasena } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM usuarios WHERE email = ? AND contrasena = ?',
      [email, contrasena]
    );

    if (rows.length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', usuario: rows[0] });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

// Obtener información de un usuario
export const obtenerUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

// Actualizar un usuario
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, contrasena, numero_cuenta, tipo, saldo } = req.body;

  try {
    await pool.query(
      'UPDATE usuarios SET nombre = ?, email = ?, contrasena = ?, numero_cuenta = ?, tipo = ?, saldo = ? WHERE id = ?',
      [nombre, email, contrasena, numero_cuenta, tipo, saldo, id]
    );
    res.status(200).json({ message: 'Usuario actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando el usuario', error });
  }
};

// Eliminar un usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando el usuario', error });
  }
};

