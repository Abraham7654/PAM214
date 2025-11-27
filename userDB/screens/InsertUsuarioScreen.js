import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [procesando, setProcesando] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idUsuarioEditar, setIdUsuarioEditar] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    try {
      if (usuarios.length === 0) setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleGuardar = async () => {
    if (procesando) return;

    try {
      setProcesando(true);

      if (modoEdicion) {
        await controller.actualizarUsuario(idUsuarioEditar, nombre);

        if (Platform.OS !== 'web') {
          Alert.alert('Éxito', 'Usuario actualizado');
        }

        cancelarEdicion();
      } else {
        const usuarioCreado = await controller.crearUsuario(nombre);

        if (Platform.OS !== 'web') {
          Alert.alert(
            'Usuario Creado',
            `"${usuarioCreado.nombre}" con ID: ${usuarioCreado.id}`
          );
        }

        setNombre('');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setProcesando(false);
    }
  };

  const prepararEdicion = (usuario) => {
    setNombre(usuario.nombre);
    setIdUsuarioEditar(usuario.id);
    setModoEdicion(true);
  };

  const cancelarEdicion = () => {
    setModoEdicion(false);
    setIdUsuarioEditar(null);
    setNombre('');
  };

  const handleEliminar = (id) => {
    if (Platform.OS === 'web') {
      if (confirm('¿Eliminar usuario?')) controller.eliminarUsuario(id);
    } else {
      Alert.alert('Eliminar Usuario', '¿Seguro que deseas eliminarlo?', [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => controller.eliminarUsuario(id),
        },
      ]);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userNumber}>#{usuarios.length - index}</Text>
        <View>
          <Text style={styles.userName}>{item.nombre}</Text>
          <Text style={styles.userDetails}>
            ID: {item.id} -{' '}
            {new Date(item.fechaCreacion).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View style={styles.simpleActions}>
        <TouchableOpacity onPress={() => prepararEdicion(item)}>
          <Text style={styles.simpleEditBtn}>Editar</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>|</Text>

        <TouchableOpacity onPress={() => handleEliminar(item.id)}>
          <Text style={styles.simpleDeleteBtn}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Gestión de Usuarios</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.simpleInput}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!procesando}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.mainButton,
              modoEdicion ? styles.btnUpdate : styles.btnAdd,
            ]}
            onPress={handleGuardar}
            disabled={procesando}
          >
            <Text style={styles.mainButtonText}>
              {procesando ? '...' : modoEdicion ? 'Actualizar' : 'Agregar'}
            </Text>
          </TouchableOpacity>

          {modoEdicion && (
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={cancelarEdicion}
            >
              <Text style={styles.btnCancelText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },

  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  formContainer: {
    marginBottom: 25,
  },

  simpleInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 4,
    fontSize: 16,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },

  mainButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
  },

  btnAdd: {
    backgroundColor: '#007AFF',
  },

  btnUpdate: {
    backgroundColor: '#FF9500',
  },

  btnCancel: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },

  mainButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  btnCancelText: {
    color: 'black',
    fontSize: 16,
  },

  listContainer: {
    paddingBottom: 20,
  },

  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  userNumber: {
    fontWeight: 'bold',
    marginRight: 12,
    color: '#555',
    fontSize: 16,
  },

  userName: {
    fontSize: 16,
    fontWeight: '500',
  },

  userDetails: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },

  simpleActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  simpleEditBtn: {
    color: '#007AFF',
    padding: 8,
    fontSize: 14,
  },

  simpleDeleteBtn: {
    color: '#FF3B30',
    padding: 8,
    fontSize: 14,
  },

  separator: {
    color: '#ccc',
    marginHorizontal: 0,
  },
});
