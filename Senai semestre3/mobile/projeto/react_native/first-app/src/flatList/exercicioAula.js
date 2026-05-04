import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function ListaDeCompras() {
    const [nomeProduto, setNomeProduto] = useState("")
    const produtos = []

    function handleAdicionar() {
        if (nomeProduto.trim() === "") {
            Alert.alert('Atenção', "Digite o nome do produto antes de adicionar.")
            return
        }
        console.log("nomeProduto:", nomeProduto)
        setNomeProduto("")


        const novoProduto = {
            id: Date.now().toString(),
            nome: nomeProduto,
        }

        setNomeProduto([...nomeProduto, novoProduto])

        setNomeProduto("")
    }

    return (
        <View style={styles.container}>
            <Text>Lista de Produtos</Text>
            <View style={styles.exemplo}>
                <TextInput
                    style={styles.input}
                    value={nomeProduto}
                    onChangeText={setNomeProduto}
                    placeholder="Nome do Produto"
                />
            </View>
        </View>
    )
}

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
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    botao: {
        backgroundColor: "#4285f4",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 4,
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },
});
