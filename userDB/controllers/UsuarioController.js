import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await DatabaseService.initialize();
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }

  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(
        u => new Usuario(u.id, u.nombre, u.fecha_creacion || u.fechaCreacion)
      );
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevoUsuario = await DatabaseService.add(nombre.trim());
      this.notifyListeners();
      return new Usuario(
        nuevoUsuario.id,
        nuevoUsuario.nombre,
        nuevoUsuario.fecha_creacion
      );
    } catch (error) {
      console.error('Error al crear:', error);
      throw error;
    }
  }

  async actualizarUsuario(id, nombre) {
    try {
      Usuario.validar(nombre);
      await DatabaseService.update(id, nombre.trim());
      this.notifyListeners();
    } catch (error) {
      console.error('Error al actualizar:', error);
      throw error;
    }
  }

  async eliminarUsuario(id) {
    try {
      await DatabaseService.delete(id);
      this.notifyListeners();
    } catch (error) {
      console.error('Error al eliminar:', error);
      throw error;
    }
  }
}
