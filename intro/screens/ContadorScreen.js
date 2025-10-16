// 1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

// 2. Main: Zona de componentes
export default function ContadorScreen() {
  
  const[contador, setContador]=useState(0);

  return (
    
    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}> 
      <Button color='red'  title="Agregar" onPress={()=>setContador(contador+1)}/>
      <Button color='blue' title="Quitar" onPress={()=>setContador(contador-1)}/>
      <Button color='yellow' title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(4, 252, 231, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#370fe8ff' ,
    fontSize:30,
    fontFamily:'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  
  texto2:{
    color:'#ff0000ff' ,
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'900',
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row-reverse',
    gap:15,
  },



});
