import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return <View style={styles.container}>

        <Text>Sidebar com Área de Conteúdo</Text>

        <View style={{
            flexDirection: "row",
            width: "100%",
            flex: 1,
            gap: 8,
            justifyContent: "center"


        }}>

            <View style={styles.sideBar}>
                <Text style={styles.textStyle}>SideBar</Text>
            </View>

            <View style={styles.column}>
                <View style={styles.card1}>
                    <Text style={styles.textStyle}>card 1</Text>
                </View>

                <View style={styles.card2}>
                    <Text style={styles.textStyle}>card 2</Text>
                </View>

                <View style={styles.card3}>
                    <Text style={styles.textStyle}>card 3</Text>
                </View>

            </View>

        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 18,

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    sideBar: {
        width:80,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    card1: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    card2: {
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    card3: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        flexDirection: "column",
        flex: 1,
        gap: 8,
        
    }
});