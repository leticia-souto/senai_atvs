import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return <View style={styles.container}>

        <Text>Layout de Duas Colunas</Text>

        <View style={{
            flexDirection: "row",
            width: "100%",
            flex: 1,
            gap: 8,
            justifyContent: "center"


        }}>

            <View style={styles.sideBar}>
                <Text style={styles.textStyle}>Coluna 1</Text>
            </View>

            <View style={styles.column}>
                <View style={styles.blueBox}>
                    <Text style={styles.textStyle}>3</Text>
                </View>

                <View style={styles.orangeBox}>
                    <Text style={styles.textStyle}>4</Text>
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
        padding: 10,

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    sideBar: {
        flex: 1,
        width:80,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    orangeBox: {
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
        
    }
});