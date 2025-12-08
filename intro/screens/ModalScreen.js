import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal, SectionList, TouchableOpacity } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [actual, setActual] = useState({ titulo: "", desc: "" });

  const datos = [
    {
      title: "Compañeros",
      data: [
        { nombre: "Rogelio", desc: "Compañero del grupo A, responsable y colaborativo." },
        { nombre: "Karla", desc: "Le gusta el diseño móvil y la edición digital." }
      ]
    },
    {
      title: "Profesores",
      data: [
        { nombre: "Isaac", desc: "Profesor de programación móvil, exigente pero justo." },
        { nombre: "Santiago", desc: "Imparte bases de datos y análisis de sistemas." }
      ]
    },
    {
      title: "Servicios",
      data: [
        { nombre: "Biblioteca", desc: "Área de estudio con acceso a internet y libros." },
        { nombre: "Cafetería", desc: "Ofrece desayunos, snacks y bebidas todo el día." }
      ]
    }
  ];

  const abrir = (item) => {
    setActual({ titulo: item.nombre, desc: item.desc });
    setVisible(true);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Directorio General</Text>

      <SectionList
        sections={datos}
        keyExtractor={(item, index) => item.nombre + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.seccion}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <TouchableOpacity style={styles.boton} onPress={() => abrir(item)}>
              <Text style={styles.botonTexto}>Ver más</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={visible} transparent>
        <View style={styles.modalFondo}>
          <View style={styles.modalCaja}>
            <Text style={styles.modalTitulo}>{actual.titulo}</Text>
            <Text style={styles.modalDesc}>{actual.desc}</Text>
            <Button title="Cerrar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  seccion: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 5,
    marginTop: 15
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  nombre: {
    fontSize: 16
  },
  boton: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  botonTexto: {
    color: "white"
  },
  modalFondo: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalCaja: {
    margin: 30,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  modalDesc: {
    fontSize: 16,
    marginBottom: 20
  }
});
