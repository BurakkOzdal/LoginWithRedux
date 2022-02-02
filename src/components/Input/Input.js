import React from "react";
import { TextInput, View } from "react-native";
import styles from'./Input.styles';
import Icon from"react-native-vector-icons/MaterialCommunityIcons"

function Input({placeholder, onChangeText, value, iconName, secureTextEntry}) {
    console.log(onChangeText)
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry}/>
            <Icon name={iconName} size={25} color={"#64b5f6"} />
        </View>
    )
}

export default Input;