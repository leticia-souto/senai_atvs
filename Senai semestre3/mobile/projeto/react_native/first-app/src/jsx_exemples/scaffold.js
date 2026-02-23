// ============================================
// Arquivo Base
// ============================================

/*todas as importações*/
import { View, Text, StyleSheet } from "react-native";

/*quando tiver o export quer dizer que ele pd ser usado em outros arquivos*/
export default function Scaffold() { /*função javaScript, que vai retornar um visual, interface*/
  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Texto vem aqui</Text>
      <Text style={styles.subtitulo}>texto vem aqui</Text>
      {/* VAMOS CONSTRUIR AQUI E USAR styles.exemplo */}
    </View>
    //Só tem 1 view, ele é o pai.
  );
}
/*uma estilização por componente e não uma página de estilização*/
//styles é o objeto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});