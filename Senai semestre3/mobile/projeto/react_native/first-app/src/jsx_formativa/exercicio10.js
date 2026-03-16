import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
    return <View style={styles.container}>

        <Text>Header, Conteúdo e Footer</Text>
    
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textStyle}>Header</Text>
            </View>

            <View style={styles.row}>
                    <View style={styles.redBox}>
                        <Text style={styles.textStyle}>1</Text>
                    </View>

                    <View style={styles.blueBox}>
                        <Text style={styles.textStyle}>2</Text>
                    </View>

                    <View style={styles.yellowBox}>
                        <Text style={styles.textStyle}>3</Text>
                    </View>
            </View>

            <View style={styles.row}>
                    <View style={styles.painelPrincipal}>
                        <Text style={styles.textStyle}>Painel Principal</Text>
                    </View>

                    <View style={styles.lateral}>
                        <Text style={styles.textStyle}>Lateral</Text>
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
        flex: 1,
        gap: 8,
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",

    },

    redBox: {
        flex: 1,
        backgroundColor: "red",
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
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    painelPrincipal: {
        flex: 2,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    lateral: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    header: {
        height: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {

        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },

    column: {
        flexDirection: "column",
        flex: 1,
        gap: 8,

    },
    row: {
        flexDirection: "row",
        flex: 1,
        gap: 8,

    }
});