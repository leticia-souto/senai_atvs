import { StyleSheet, Text, View } from "react-native";

export default function Exercicio02Somativa() {
    return <View style={styles.container}>

        <Text>Painel com Divisor Destacado</Text>

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textStyle}>Header</Text>
            </View>


            <View style={styles.rowMain}>
                <View style={styles.side}>
                    <Text style={styles.textStyle}>Side</Text>
                </View>

                <View style={styles.columnPrincipail}>

                    <View style={styles.rowSuperior}>
                        <View style={styles.greenBox}>
                            <Text style={styles.textStyle}>Verde</Text>
                        </View>

                        <View style={styles.blueBox}>
                            <Text style={styles.textStyle}>Azul</Text>
                        </View>
                    </View>

                    <View style={styles.rowdivisor}>
                        <View style={styles.circlebox}></View>

                    </View>

                    <View style={styles.rowInferior}>
                        <View style={styles.redBox}>
                            <Text style={styles.textStyle}>Vermelho</Text>
                        </View>

                        <View style={styles.orangeBox}>
                            <Text style={styles.textStyle}>Laranja</Text>
                        </View>

                        <View style={styles.purpleBox}>
                            <Text style={styles.textStyle}>Roxo</Text>
                        </View>
                    </View>

                </View>

            </View>

            <View style={styles.footer}>
                <Text style={styles.textStyle}>Footer</Text>
            </View>


        </View>
    </View>

}


const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        gap: 8,
        backgroundColor: "#1a1a1a",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",


    },

    side: {
        width: 80,
        backgroundColor: "#95a5a6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    orangeBox: {
        flex: 2,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    purpleBox: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    circlebox: {
        height: 50,
        width: 50,
        backgroundColor: "#34495e",
        borderRadius: 25,
    },
    header: {
        height: 60,
        backgroundColor: "#2c3e50",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    footer: {
        height: 50,
        backgroundColor: "#2c3c50",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    columnPrincipail: {
        flexDirection: "column",
        flex: 1,
        gap: 8,

    },

    rowMain: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },

    rowSuperior: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },

    rowdivisor: {
        flexDirection: "column",
        alignSelf: "center"
    },

    rowInferior: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },
});