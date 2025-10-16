import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackground from './ImageBackground'
import ScrollView  from './ScrollView'
import ActivityIndicator  from './ActivityIndicator'
import FlatList  from './FlatList'
import Modal  from './Modal'
import BottomSheet  from './BottomSheet'


export default function MenuScreen() {
  
    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>

        case 'botones':
            return <BotonesScreen/>

        case 'TextInput':
            return <TextInputScreen/>

        case 'ImageBackground':
            return <ImageBackground/>
        case 'ScrollView':
            return <ScrollView/>
        case 'ActivityIndicator':
            return <ActivityIndicator/>
        case 'FlatList':
            return <FlatList/>
        case 'Modal':
            return <Modal/>
        case 'BottomSheet':
            return <BottomSheet/>
        case 'menu':
            default:
                return (
                     <View>
                     <Text> Menu Practicas </Text>
                     <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                     <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
                     <Button onPress={()=>setScreen('textinput')} title='Pract:TextInput'/>
                     <Button onPress={()=>setScreen('ImageBackground')} title='Pract:ImageBackground'/>
                     <Button onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
                     <Button onPress={()=>setScreen('ActivityIndicator')} title='Pract:ActivityIndicator'/>
                     <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                     <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                     <Button onPress={()=>setScreen('BottonSheet')} title='Pract:BottonSheet'/>
                     </View>
    )
}
  
}

const styles = StyleSheet.create({})
