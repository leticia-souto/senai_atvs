import { StyleSheet, Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.texto}>
        Gênero: {genero}
      </Text>

      <Text style={styles.texto}>
        Plataforma: {plataforma}
      </Text>

      <Text style={styles.texto}>
        Nota: {nota}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B2F",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#2D2D44",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  texto: {
    fontSize: 14,
    color: "#B8B8D1",
    marginBottom: 4,
  },
});