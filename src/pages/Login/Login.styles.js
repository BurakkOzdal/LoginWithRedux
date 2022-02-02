import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1
    },
    logo_container: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        width: Dimensions.get("window").width ,
        height: Dimensions.get("window").height / 3,
        resizeMode: "contain",
        tintColor: "#64b5f6",
        alignSelf: "center"
    },
    errors:{
        color:'red',
        alignSelf:"center",
        fontSize:20
    },
    body_container: {
        flex: 1,
    }
})