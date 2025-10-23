import { Text, StyleSheet, View, Alert, TextInput, Button } from 'react-native'
import react, {Component, useState } from "react"

export default function TextInputScreen(){
  
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');

  


  const mostrarAlerta = () => {
    if ([nombre.trim(), password.trim(), comentario.trim()].includes('')){
      alert('Error, Por favor rellena todos los campos. ');
      Alert.alert('Error', 'Por favor rellena todos los campos');
    }else {
      Alert.alert(`Hola, ${nombre}!`, 'Tu nombre ha sido registrado con exito');
      alert(`Hola, ${nombre}!, Tu nombre ha sido registrado con exito. Tu contraseña es ${password}`);


    setNombre('');
    }
  };



    return (
      <View style={styles.container }>
        <Text style={styles.label}>Ingresa tu nombre:</Text>

        <TextInput
        style={styles.input}
        placeholder="Ej. Abraham"
        value={nombre}
        onChangeText={setNombre}
        keyboardType="default"
        autoCapitalize="words"
        />

        <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Ej. Password"
        keyboardType="numeric"
        secureTextEntry = {true}
        />

        <TextInput
        style={styles.input}
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        />

        <Button
        title='Saludar'
        onPress={mostrarAlerta}
        color='#000'
        />

      </View>
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    marginBottom: 20, 
    fontSize: 16,
  },
});