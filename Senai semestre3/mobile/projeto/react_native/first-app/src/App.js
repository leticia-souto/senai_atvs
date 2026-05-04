
import { StyleSheet, View } from 'react-native';
import FormularioExemplo from './text_input/formulario';
import FlatListExemplo from './flatList/flatList_exemple';
import ListaDeComprar from './flatList/exercicioAula';
import ListaDeCompras from './flatList/exercicioAula';



export default function App() {

  return (
    <View style={styles.container}>
      <ListaDeCompras/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
});


