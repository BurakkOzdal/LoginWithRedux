import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Loading from './components/Loading';
import Login from "./pages/Login";
import Main from "./pages/Main";


const Stack = createNativeStackNavigator();
export default () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);


  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={Main} options={{ headerTitleStyle: { color: '#64b5f6', fontWeight: "bold", fontSize: 25 }, headerTitleAlign: "center", title: "Anasayfa" }} />
        </Stack.Navigator>
      )

      }
    </NavigationContainer>
  )
}
