
import { StyleSheet, View } from 'react-native';
import ContadorExemple from './hooks/useState_exemples';
import TelaDeLogin from './hooks/useRef_exemple';
import TelaMoedas from './hooks/useEffect_exemple';
import Recados from './hooks/leticiaSouto_exercicioHooks';



export default function App() {

  return (
    <View style={styles.container}>
      <Recados/>
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
