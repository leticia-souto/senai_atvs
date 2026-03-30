import { StyleSheet, Text, View } from "react-native";

export default function Exercicio01Somativa() {
    return <View style={styles.container}>

        <Text>Layout em Grades Assimétricas</Text>

        <View style={styles.container}>

            <View style={styles.rowheader}>
                <View style={styles.yellowBox}>
                    <Text style={styles.textStyle}>Amarelo</Text>
                </View>

                <View style={styles.blueBox}>
                    <Text style={styles.textStyle}>Azul Escuro</Text>
                </View>
            </View>


            <View style={styles.rowMain}>
                <View style={styles.greenbox}>
                    <Text style={styles.textStyle}>Verde</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.lateralpink}>
                        <Text style={styles.textStyle}>Rosa</Text>
                    </View>

                    <View style={styles.lateralorange}>
                        <Text style={styles.textStyle}>Laranja</Text>
                    </View>

                </View>

            </View>

            <View style={styles.rowfooter}>
                <View style={styles.redbox}>
                    <Text style={styles.textStyle}>Vermelho</Text>
                </View>

                <View style={styles.tealbox}>
                    <Text style={styles.textStyle}>Teal</Text>
                </View>

                <View style={styles.purplebox}>
                    <Text style={styles.textStyle}>Roxo</Text>
                </View>
            </View>


        </View>
    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",


    },
    rowheader: {
        flexDirection: "row",
        height: 110,
        gap: 8,
        borderRadius: 4
    },
    blueBox: {
        flex: 3,
        backgroundColor: "darkblue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    greenbox: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    lateralpink: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    lateralorange: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    redbox: {
        flex:1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    tealbox: {
        flex: 1,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    purplebox: {
        flex: 1, 
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    column: {
        flexDirection: "column",
        flex: 1,
        gap: 8,

    },
    rowMain: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },
    rowfooter: {
        flexDirection: "row",
        height: 90,
        gap: 8,
    },


});