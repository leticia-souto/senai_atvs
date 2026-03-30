
import { StyleSheet, View } from 'react-native';


import Exercicio01Somativa from './leticiaSouto_somativa/exercicio1';
import Exercicio2Somativa from './leticiaSouto_somativa/exercicio2';
import Exercicio02Somativa from './leticiaSouto_somativa/exercicio2';




export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio02Somativa/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
