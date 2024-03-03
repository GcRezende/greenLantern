import React, {useState} from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'


export default function App() {
  
  const[onState,setOnState] = useState(true)


  function handleSymbol()
  {
    setOnState((oldValue:boolean)=> {return !oldValue})
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSymbol}>
      <Image source={onState ? symbolOn : symbolOff}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
