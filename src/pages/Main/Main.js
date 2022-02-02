import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import styles from "./Main.styles"

function Main() {
    const dispatch = useDispatch();
    const userSession=useSelector(s=>s.user);

    function logOut() {
        dispatch({ type: "REMOVE_USER" })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body_container}>
                
                <Text style={styles.title}>Anasayfa</Text>
                
                <Text style={styles.information_title}>Adı:</Text>
                <Text style={styles.firstname}>{userSession.name.firstname}</Text>
                
                <Text style={styles.information_title}>Soyadı:</Text>
                <Text style={styles.lastname}>{userSession.name.lastname}</Text>
                
                <Text style={styles.information_title}>Eposta Adresi:</Text>
                <Text style={styles.email}>{userSession.email}</Text>
                
                <Button text="Çıkış Yap" onPress={logOut} />
            </View>
        </SafeAreaView>
    )
}

export default Main;