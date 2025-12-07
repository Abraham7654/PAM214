import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;

    const nuevaTarea = {
      id: Date.now().toString(),
      texto: tarea,
      completado: false,
    };

    setLista([...lista, nuevaTarea]);
    setTarea("");
  };

  const cambiarEstado = (id) => {
    const nuevaLista = lista.map((item) =>
      item.id === id ? { ...item, completado: !item.completado } : item
    );
    setLista(nuevaLista);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Cargando aplicación...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis Tareas Diarias</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={tarea}
        onChangeText={setTarea}
      />

      <TouchableOpacity style={styles.button} onPress={agregarTarea}>
        <Text style={styles.btnText}>Agregar tarea</Text>
      </TouchableOpacity>

      {lista.length === 0 ? (
        <Text style={styles.emptyText}>No hay tareas registradas</Text>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text
                style={[
                  styles.itemText,
                  item.completado && styles.itemDone,
                ]}
              >
                {item.texto}
              </Text>

              <Switch
                value={item.completado}
                onValueChange={() => cambiarEstado(item.id)}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#4a90e2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  emptyText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 30,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
  },

  itemDone: {
    textDecorationLine: "line-through",
    color: "green",
  },
});
