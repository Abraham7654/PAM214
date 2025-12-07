import { useEffect, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { ScrollView } from 'react-native-web';

export default function ImageBackgroundScreen(){
  const [showSplash, setShowSplash] = useState(true)

  useEffect (() => {
    const timer = setTimeout (() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  },[]);

  
  const editarPerfil = () => {
    Alert.alert(
      "Editar Perfil",
      "¿Deseas guardar los cambios?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Guardar", onPress: () => console.log("Perfil guardado") }
      ]
    );
  };


  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <ImageBackground
        source ={{
          uri: 'https://www.freevector.com/uploads/vector/preview/14053/FreeVector-Real-Madrid-FC.jpg',
        }}
          style={{flex: 1, width: '100%', height: '100%'}}>
        <Text style={styles.splashText}> Entrando a mi pagina...</Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source ={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/013/039/130/small/sky-blue-galaxy-background-free-photo.jpg',
        }}
        style={styles.background}
      >
        <ScrollView>
          <View style={styles.overlay}>
            <Text style={styles.title}> Presentacion </Text>

            <Text style={styles.subtitle}> Nombre: </Text>
            <Text style={styles.text}> Abraham Ordoñez Moreno</Text>

            <Text style={styles.subtitle}> Profesion: </Text>
            <Text style={styles.text}> Soy Estudiante en ingenieria en sistemas</Text>

            <Text style={styles.subtitle}> Biografia: </Text>
            <Text style={styles.text}> Trabajo y estudio actualmente me dedico a un negocio comercial</Text>
            <Text style={styles.text}>con mi papa y estudio a la vez, me gusta mucho practicar Deportes, </Text>
            <Text style={styles.text}>actualmente me gusta el gimnasio y estoy estudiando en la upq.</Text>

            <Text style={styles.subtitle}> Estado civil: </Text>
            <Text style={styles.text}>Soltero</Text>

            <Text style={styles.subtitle}> Correo electronico: </Text>
            <Text style={styles.text}>124049257@upq.edu.mx </Text>

            <TouchableOpacity style={styles.button} onPress={editarPerfil}>
              <Text style={styles.btnText}>Editar Perfil</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
  },

  splashText: {
    fontSize: 24, 
    color: '#000000ff', 
    textAlign: "center",
  },

  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
    width: '100%',
    minHeight: 1000,
  },

  title: {
    fontSize: 30, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },

  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    borderRadius: 8,
  },

  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: 'blue',
    fontSize: 20,
  }

});
