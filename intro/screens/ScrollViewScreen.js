import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {

  const mostrarAlerta = (titulo) => {
    Alert.alert(
      titulo,
      "¿Qué deseas hacer?",
      [
        { text: "Compartir" },
        { text: "Guardar" },
        { text: "Cerrar", style: "cancel" }
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Mi Portal de Noticias</Text>
      </View>

      <ScrollView>

        <Text style={styles.sectionTitle}>Deportes</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1744806/1273/i/450/depositphotos_12731537-stock-photo-soccer-ball.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Final de fútbol</Text>
          <Text style={styles.date}>12 de diciembre 2025</Text>
          <Text style={styles.resume}>El equipo local ganó el campeonato en un partido lleno de emoción.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Final de fútbol")} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1003341/3284/i/450/depositphotos_32846077-stock-photo-basketball-ball-and-hoop.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Liga de basquetbol</Text>
          <Text style={styles.date}>10 de diciembre 2025</Text>
          <Text style={styles.resume}>La temporada inicia con grandes expectativas para todos los equipos.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Liga de basquetbol")} />
        </View>

        <Text style={styles.sectionTitle}>Nacional</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1000975/2567/i/450/depositphotos_25675137-stock-photo-mexican-flag.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Nuevo proyecto federal</Text>
          <Text style={styles.date}>9 de diciembre 2025</Text>
          <Text style={styles.resume}>El gobierno anunció un nuevo programa de apoyo social.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Nuevo proyecto federal")} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1018724/1614/i/450/depositphotos_16145817-stock-photo-city-traffic.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Tráfico en la ciudad</Text>
          <Text style={styles.date}>8 de diciembre 2025</Text>
          <Text style={styles.resume}>Autoridades recomiendan rutas alternas por obras viales.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Tráfico en la ciudad")} />
        </View>

        <Text style={styles.sectionTitle}>Tecnología</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1062035/3790/i/450/depositphotos_37902125-stock-photo-smartphone.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Nuevo smartphone</Text>
          <Text style={styles.date}>7 de diciembre 2025</Text>
          <Text style={styles.resume}>La nueva generación de teléfonos llega con grandes mejoras.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Nuevo smartphone")} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/1907633/4855/i/450/depositphotos_48557245-stock-photo-coding.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Avances en programación</Text>
          <Text style={styles.date}>6 de diciembre 2025</Text>
          <Text style={styles.resume}>Nuevas herramientas facilitan el desarrollo de aplicaciones.</Text>
          <Button title="Leer más" onPress={() => mostrarAlerta("Avances en programación")} />
        </View>

        <StatusBar style="auto" />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1F7A55',
    padding: 15,
    alignItems: 'center'
  },

  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 15
  },

  card: {
    backgroundColor: '#f2f2f2',
    margin: 15,
    padding: 10,
    borderRadius: 10
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  date: {
    fontSize: 14,
    color: 'gray'
  },

  resume: {
    fontSize: 16,
    marginVertical: 5
  }
});
