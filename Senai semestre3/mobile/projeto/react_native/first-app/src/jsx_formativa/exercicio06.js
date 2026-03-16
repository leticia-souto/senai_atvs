import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
    return <View style={styles.container}>

        <Text>Header, Conteúdo e Footer</Text>

        <View style={styles.container}>

            <View style={styles.greenBox}>
                <Text style={styles.textStyle}>Header</Text>
            </View>

            <View style={styles.greyBox}>
                <Text style={styles.textStyle}>Main Content</Text>
            </View>

            <View style={styles.blueBox}>
                <Text style={styles.textStyle}>Footer</Text>
            </View>


        </View>
    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        
    },

    greyBox: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    greenBox: {
        
        height: 60,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    blueBox: {
        
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
});