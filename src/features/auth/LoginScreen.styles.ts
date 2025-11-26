import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.background
    },
    title: {fontSize: 32, fontWeight: "bold", marginBottom: 20, color: colors.primary},
    input: {width: "100%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 15},
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10
    },
    buttonText: {color: "#fff", fontWeight: "bold"},
});
