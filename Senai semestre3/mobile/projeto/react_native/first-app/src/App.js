
import { StyleSheet, View } from 'react-native';


import ExercicioView10 from './jsx_formativa/exercicio10';
import Lista02 from './jsx_exercicios/lista-02';
import Exemplo03 from './jsx_exemples/exemplo-03-condicionais';




export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10/>
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
