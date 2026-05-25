// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState — adicione a linha abaixo no topo:
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

// TODO: adicionar { route, navigation } como parametros quando a navegacao estiver configurada
// Os dados chegam via route.params quando o usuario toca em um jogo na HomeScreen
export default function DetalheScreen({ route, navigation }) {
  // Defina os parâmetros de rota, pegando todos os campos presentes no objeto JOGOS definido na HomeScreen
  const { titulo, genero, plataforma, nota, sinopse } = route?.params ?? jogoMock;

  // TODO: estado booleano para controlar se o jogo foi salvo na lista
  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        {/* TODO: quando implementar o estado isSalvo, use:
            onPress={() => setIsSalvo(prev => !prev)}
            style={[styles.botao, isSalvo && styles.botaoAtivo]}
            texto: isSalvo ? 'Remover da Lista' : 'Adicionar a Lista' */}
        <TouchableOpacity
          onPress={() => setIsSalvo(prev => !prev)}
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
        >
          <Text style={styles.botaoTexto} >
            {isSalvo ? 'Remover da Lista' : 'Adicionar a Lista'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },

  hero: {
    backgroundColor: "#1B1B2F",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  heroIcone: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6C4AB6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  heroIconeTexto: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  heroTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },

  heroSubtitulo: {
    fontSize: 14,
    color: "#B8B8D1",
    marginBottom: 18,
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#2A2A40",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 11,
    color: "#AAAACC",
  },

  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "#555577",
  },

  secao: {
    margin: 16,
    backgroundColor: "#1B1B2F",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#2D2D44",
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  detalheTexto: {
    fontSize: 14,
    lineHeight: 24,
    color: "#B8B8D1",
  },

  botao: {
    margin: 16,
    backgroundColor: "#6C4AB6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 32,
  },

  botaoAtivo: {
    backgroundColor: "#8D72E1",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
