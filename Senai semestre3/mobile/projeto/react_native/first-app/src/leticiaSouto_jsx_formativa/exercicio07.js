import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
    return <View style={styles.container}>

        <Text>Grid 2x2</Text>

        <View style={{
            flexDirection: "column",
            width: "100%",
            flex: 1,
            gap: 8,
            justifyContent: "center"
            


        }}>
            <View style={styles.row}>
                <View style={styles.greenBox}>
                    <Text style={styles.textStyle}>1</Text>
                </View>

                <View style={styles.redBox}>
                    <Text style={styles.textStyle}>2</Text>
                </View>

            </View>

            <View style={styles.row}>
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
    redBox: {
        flex: 1,
        backgroundColor: "red",
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
    row: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
        
    }
});