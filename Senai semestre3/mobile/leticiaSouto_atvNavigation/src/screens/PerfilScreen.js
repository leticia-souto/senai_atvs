// TODO: escolher um tema e personalizar os dados e estilizacao desta tela
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>U</Text>
        </View>
        <Text style={styles.nome}>Nome do Usuario</Text>
        <Text style={styles.email}>usuario@email.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },

  header: {
    backgroundColor: "#1B1B2F",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#2D2D44",
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  cartao: {
    margin: 16,
    backgroundColor: "#1B1B2F",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2D2D44",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6C4AB6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarTexto: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#B8B8D1",
    marginBottom: 20,
  },

  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#2D2D44",
    marginBottom: 16,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },

  infoLabel: {
    fontSize: 14,
    color: "#B8B8D1",
  },

  infoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  botao: {
    marginHorizontal: 16,
    backgroundColor: "#6C4AB6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});