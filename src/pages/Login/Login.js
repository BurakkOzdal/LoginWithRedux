import React, { useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as yup from 'yup'
import styles from "./Login.styles";
import { useDispatch } from "react-redux";


function Login({ navigation }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const loginValidation = yup.object().shape({
        username: yup.string().required("Kullanıcı adı boş bırakılamaz").email("E-posta formatında olmalı"),
        password: yup.string().required("Şifre boş bırakılamaz").min(6, ({ min }) => `Şifre en az ${min} karakter olmalı`)
    })

    function handleLogin(values) {
        if (values.username === user.email && values.password === user.password) {
            setLoading(true);
            dispatch({ type: "SET_USER", payload: { user } })
        }else{
            Alert.alert("Login","Kullanıcı bulunamadı!")
        }

    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../assets/user.png")} />
            </View>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={loginValidation}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.body_container}>
                        <Input placeholder="E-postanızı giriniz..." value={values.username} onChangeText={handleChange('username')} iconName={"account"} />
                        {(errors.username && touched.username) && <Text style={styles.errors}>{errors.username}</Text>}

                        <Input placeholder="Şifrenizi giriniz..." value={values.password} onChangeText={handleChange('password')} iconName={"key"} secureTextEntry />
                        {(errors.password && touched.password) && <Text style={styles.errors}>{errors.password}</Text>}

                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    )
}
export default Login;

const user = { "address": { "geolocation": { "lat": "-37.3159", "long": "81.1496" }, "city": "kilcoole", "street": "new road", "number": 7682, "zipcode": "12926-3874" }, "id": 1, "email": "john@gmail.com", "username": "johnd", "password": "123456", "name": { "firstname": "john", "lastname": "doe" }, "phone": "1-570-236-7033", "__v": 0 }