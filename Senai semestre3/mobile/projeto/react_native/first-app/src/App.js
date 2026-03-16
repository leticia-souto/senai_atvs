
import { StyleSheet, View } from 'react-native';


import ExercicioView06 from './jsx_formativa/exercicio06';
import ViewExemple02 from './basic_components/view_exemples02';
import ExercicioView07 from './jsx_formativa/exercicio07';
import ExercicioView08 from './jsx_formativa/exercicio08';



export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView08/>
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
