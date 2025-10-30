import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'
import Repaso1Screen from './Repaso1Screen'

export default function MenuScreen() {

  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />
    case 'botones':
      return <BotonesScreen />
    case 'TextInput':
      return <TextInputScreen />
    case 'ImageBackground':
      return <ImageBackgroundScreen />
    case 'ScrollView':
      return <ScrollViewScreen />
    case 'ActivityIndicator':
      return <ActivityIndicatorScreen />
    case 'FlatList':
      return <FlatListScreen />
    case 'Modal':
      return <ModalScreen />
    case 'BottomSheet':
      return <BottomSheetScreen />
    case 'Repaso1Screen':
      return <Repaso1Screen/>
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.texto}>Menu Practicas</Text>

          <View style={styles.contenedorBotones}>
            <Button color='#8015bfff' onPress={() => setScreen('contador')} title='Pract:Contador' />
            <Button color='#8015bfff' onPress={() => setScreen('botones')} title='Pract:Buttons' />
            <Button color='#8015bfff' onPress={() => setScreen('TextInput')} title='Pract:TextInput' />
            <Button color='#8015bfff' onPress={() => setScreen('ImageBackground')} title='Pract:ImageBackground' />
            <Button color='#8015bfff' onPress={() => setScreen('ScrollView')} title='Pract:ScrollView' />
            <Button color='#8015bfff' onPress={() => setScreen('ActivityIndicator')} title='Pract:ActivityIndicator' />
            <Button color='#8015bfff' onPress={() => setScreen('FlatList')} title='Pract:FlatList' />
            <Button color='#8015bfff' onPress={() => setScreen('Modal')} title='Pract:Modal' />
            <Button color='#8015bfff' onPress={() => setScreen('BottomSheet')} title='Pract:BottomSheet' />
            <Button color='#8015bfff' onPress={() => setScreen('Repaso1Screen')} title='Pract:Repaso1Screen' />
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#0c0c0eff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 25,
  },
  contenedorBotones: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 15,
  },
})
