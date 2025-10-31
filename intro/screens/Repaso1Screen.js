import { 
  Text, 
  StyleSheet, 
  View, 
  TextInput, 
  Switch, 
  Alert, 
  ImageBackground, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useState, useEffect } from 'react';

export default function Repaso1Screen() {

  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [acepto, setAcepto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const registrar = () => {
    if ([nombre.trim(), correo.trim()].includes('')) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!acepto) {
      Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
    setNombre('');
    setCorreo('');
    setAcepto(false);
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLvO91XD8ByLVQ1bIYfzzgv4NIMj9Lqjizg&s' }}
        style={styles.fondo}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.caja}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#999"
            value={nombre}
            onChangeText={setNombre}
            keyboardType="default"
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.switchRow}>
            <Text style={styles.textoSwitch}>Aceptar términos y condiciones</Text>
            <Switch
              value={acepto}
              onValueChange={setAcepto}
              trackColor={{ false: '#767577', true: '#28a745' }}
            />
          </View>

          <TouchableOpacity onPress={registrar}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#000',
    marginTop: 20,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
  },
  caja: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 15,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: 'white',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop: 10,
  },
  textoSwitch: {
    fontSize: 14,
    color: 'white',
    flex: 1,
    marginRight: 10,
  },
  registerButtonText: {
    color: '#3498db',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
