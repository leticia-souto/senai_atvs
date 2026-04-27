import { useEffect, useState } from "react"
import { Button, Text, View, StyleSheet, Alert } from "react-native"

export default function TelaMoedas() {
    const [moedas, setMoedas] = useState(0)

    useEffect(() => {
        console.log("Executou")
        if (moedas === 5) {
            Alert.alert("Sucesso, você desbloqueou o baú.")
        }

    }, [moedas])

    return (
        <View style={styles.contaneire}>
            <Text style={styles.texto}>Moedas Coletadas: {moedas}</Text>
            <Button title="Pegar Moedas" onPress={() => setMoedas(moedas + 1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    texto: { fontSize: 24, marginBottom: 20 },
});
