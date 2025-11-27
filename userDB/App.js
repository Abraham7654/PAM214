import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

// Importamos la pantalla que creamos en la carpeta screens
import InsertUsuarioScreen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Configuración de la barra de estado (batería, hora, señal) */}
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      {/* Aquí renderizamos tu práctica */}
      <InsertUsuarioScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto asegura que la app ocupe toda la pantalla del celular
    backgroundColor: '#f5f5f5',
  },
});