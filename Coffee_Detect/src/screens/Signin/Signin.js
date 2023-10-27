/*import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/logo.jpeg';
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"

const GoToMainFlow = async () => {
    if (email && password && password === passwordRepeat) {
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password)

            if (response.user) {
                await createProfile(response, username);
                navigation.replace("Home")
            }

        } catch (e) {
            Alert.alert("Oops, Please check your info and try again")
        }
    }


const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        // validate user

        navigation.navigate('Home');
    }

    const onForgotpasswordPressed = () => {
        console.warn('onForgotpasswordPressed');

       // navigation.navigate('');
    }

    const onSignUpPressed = () => {
        //console.warn('onSignUpPressed');

        navigation.navigate('SignUp');
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.root}>
            <Image source={Logo} style= {[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

            <Inputs placeholder= "Username" value={username} setValue={setUsername}/>
            <Inputs placeholder= "Password" value={password} setValue={setPassword} secureTextEntry/>

            <Button text="Sign in" onPress={handleLogin}/>
            <Button text="Forgot password" onPress={onForgotpasswordPressed} type="TERTIARY"/>

            <Button text="Don't have an account? Create one" onPress={handleSignUp} type="TERTIARY"/>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    },
});
export default Signin*/



import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import Logo from '../../../assets/logooff.png';
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    /*const handleLogin = async () => {
        if (username && password) {
            try {
                const response = await auth().signInWithEmailAndPassword(username, password);

                if (response.user) {
                    navigation.navigate("Home");
                }
            } catch (e) {
                Alert.alert("Oops, Please check your info and try again")
            }
        } else {
            Alert.alert("Please fill in all fields")
        }
    }*/

    const onForgotpasswordPressed = () => {
        console.warn('onForgotpasswordPressed');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }
    const onSignInPressed = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                <Inputs placeholder="Username" value={username} setValue={setUsername} />
                <Inputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

                <Button text="Sign in" onPress={onSignInPressed} />
                <Button text="Forgot password" onPress={onForgotpasswordPressed} type="TERTIARY" />

                <Button text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default Signin;
