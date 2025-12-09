import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const verReceta = () => {
    Alert.alert(
      "Receta Completa",
      [
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };


  if (mostrarSplash) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTexto}>CocinApp</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://media.istockphoto.com/id/1477430966/es/foto/mujer-preparando-mezcla-de-verduras-de-quinua-cocinada-en-una-sart%C3%A9n.jpg?s=612x612&w=0&k=20&c=Zo-7Tq2vhj2Pg-9NyTtX4YaIRW3EAQaB6BedsXMo-ww="
        }}
        style={styles.fondo}
      >
        <Text style={styles.titulo}>Mis Recetas</Text>

        <ScrollView style={{ width: "100%" }}>
          <View style={styles.card}>
            <Text style={styles.nombre}>Spaghetti</Text>
            <Text style={styles.tiempo}>Tiempo: 40 min</Text>
            <Text style={styles.Descripcion}> Descripcion: Un platillo delicioso un poco mas elaborado pero muy bueno </Text>
            <Text style={styles.receta}>
              Ingredientes: pasta, carne molida, tomate, cebolla, ajo, especias. 
              Preparación: Cocer pasta, sofreír carne con verduras, agregar salsa y mezclar.
                <TouchableOpacity style={styles.button} onPress={verReceta}>
              <Text style={styles.btnText}>Ver receta </Text>
            </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.nombre}>Enchiladas Verdes</Text>
            <Text style={styles.tiempo}>Tiempo: 30 min</Text>
            <Text style={styles.Descripcion}> Descripcion: Un platillo muy tipico de mexico y que usaulmente es para desayunar </Text>
            <Text style={styles.receta}>
              Ingredientes: tortillas, pollo, salsa verde, crema, queso. 
              Preparación: Rellenar tortillas con pollo, bañar con salsa y gratinar.
              <TouchableOpacity style={styles.button} onPress={verReceta}>
              <Text style={styles.btnText}>Ver receta </Text>
            </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.nombre}>Tacos de Carne Asada</Text>
            <Text style={styles.tiempo}>Tiempo: 20 min</Text>
            <Text style={styles.Descripcion}> Descripcion: Un platillo tipico para fiestas o estar con amigos y familiares </Text>
            <Text style={styles.receta}>
              Ingredientes: carne asada, tortillas, limón, cilantro, cebolla. 
              Preparación: Asar carne, picar ingredientes y servir en tortilla.
              <TouchableOpacity style={styles.button} onPress={verReceta}>
              <Text style={styles.btnText}>Ver receta </Text>
            </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.nombre}>Huevos a la Mexicana</Text>
            <Text style={styles.tiempo}>Tiempo: 10 min</Text>
            <Text style={styles.Descripcion}> Descripcion: Un platillo hecho con huevo muy tipico en guisos o para tacos </Text>
            <Text style={styles.receta}>
              Ingredientes: huevo, tomate, cebolla, chile. 
              Preparación: Sofreír verduras y agregar huevo batido.
              <TouchableOpacity style={styles.button} onPress={verReceta}>
              <Text style={styles.btnText}>Ver receta </Text>
            </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.nombre}>Quesadillas de Champiñón</Text>
            <Text style={styles.tiempo}>Tiempo: 15 min</Text>
            <Text style={styles.Descripcion}> Descripcion: Una receta sencilla pero muy rica y muy mexicana </Text>
            <Text style={styles.receta}>
              Ingredientes: champiñones, queso, tortillas, mantequilla. 
              Preparación: Saltear champiñón, armar quesadilla y dorar.
              <TouchableOpacity style={styles.button} onPress={verReceta}>
              <Text style={styles.btnText}>Ver receta </Text>
            </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  splashTexto: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"
  },
  fondo: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowRadius: 6
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10
  },
  nombre: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5
  },
  tiempo: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 10
  },
  receta: {
    fontSize: 15,
    color: "#fff"
  },
  Descripcion: {
    fontSize: 15,
    color: "#fff"
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
  }
});


//quiero que me pongas en el boton de ver receta un alertde los ingredientes que ya tengo ahi pero deben de estar dentro de ver receta