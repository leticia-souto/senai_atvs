// TODO: estilizar esta tela com as cores e identidade visual do seu tema

import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
// TODO: apos criar o componente CardJogo, importe-o aqui:
import { CardJogo } from '../components';

// Dados de exemplo para voce visualizar o renderItem funcionando
// Em um app real, esses itens chegariam via route.params enviados pela DetalheScreen
const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  // Para receber um jogo salvo da DetalheScreen via route.params:
  if (route.params?.novoJogo) {
    setItensSalvos(prev => [...prev, route.params.novoJogo]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: renomeie o titulo para o seu tema */}
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // TODO: crie o arquivo src/components/CardJogo.js
          // O componente CardJogo deve receber as props: titulo, genero, plataforma e nota
          // Depois substitua este bloco por:
          // <CardJogo titulo={{item.titulo} genero={item.genero} plataforma={item.plataforma} nota={item.nota}} />
          <View style={styles.card} />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              {/* TODO: troque pela inicial do seu tema */}
              <Text style={styles.icone}>G</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

// TODO: ajuste as cores para o tema do seu app
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

  listaVazia: {
    flex: 1,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6C4AB6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  icone: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  descricao: {
    fontSize: 16,
    color: "#B8B8D1",
    marginBottom: 12,
  },

  dica: {
    fontSize: 13,
    color: "#8888AA",
    textAlign: "center",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#1B1B2F",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2D2D44",
  },
});
