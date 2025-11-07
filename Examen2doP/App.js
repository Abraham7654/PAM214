import { useEffect, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native'
export default function ImageBackgroundScreen(){
  const[showSplash, setShowSplash] = useState(true)
  useEffect (() => {
    const timer = setTimeout (()=> {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
    },[]); 

      if (showSplash) {
    return (
  
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}> Bienvenido a la app! </Text>
      </View>
  
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
      soruce ={{uri:'https://wallpapercave.com/wp/wp3850825.jpg',}}
      style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>NOMBRE: Abraham Ordoñez Moreno.</Text>

           <Text style={styles.title}>PROFESION: Actualmente mi profesion o en lo que estoy estudiando es ingenieria en sistemas. </Text>

            <Text style={styles.title}>Soy estudiante de la upq, trabajp actualmente por cuenta propia como tamnien tengo mi certifcacion de entrenador personal
               y me gusta a lo que me dedico actualmente y me gusta lo que estoy estudiando actualmente </Text>

             <Text style={styles.title}>CORREO ELECTRONICO: 124049257@upq.edu.mx</Text>
              <Text style={styles.title}>NUMERO: 4421274396</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 15, 
    color: '#a9a9a9', 
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
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
});