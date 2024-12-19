import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [side, setSide] = useState("");
  const [height, setHeight] = useState("");
  const [volume, setVolume] = useState("");

  function startCalc(){
    const res = 1.0/3.0 * Math.pow(side, 2) * height;
    setVolume(res);
  }
  return (
    <View style={styles.container}>
      <Text>Gúla térfogatszámítás</Text>

      <Text>Oldal:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={side => setSide(side)}>
      </TextInput>

      <Text>Magasság:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={height => setHeight(height)}>
      </TextInput>

      <Button
      style={styles.input}
      onPress={startCalc}
      title='Számítás'
      ></Button>

      <Text style={styles.volume}>Térfogat:</Text>
      <TextInput 
      style={styles.input}
      value={volume}>
      </TextInput>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
  },

  volume: {
    marginTop: 10
  },

  


  
});
