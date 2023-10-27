/*import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import db from "@react-native-firebase/database"
const createProfile = async(Response:FirebaseAuthTypes.UserCredential) =>{
    db().ref(`/users/${response.user.uid}`).set({username});
    db().ref(`/users/${response.user.uid}\leaderboard`).set({totalSteps:0});

};

const registerAndGoToMainFlow = async() => {
    if(email $$ password){
        try{
            const respoonse = await auth().createUserWithEmailAndPassword{
                email,
                password
            }

            if(response.user){
                wait.createProfile(response);
                navigator.replace("Home")
            }
        
        }catch(e) {
            Alert.alert("Oops, Please check your info and try again")
        }
    }
}

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        //console.warn('onRegisterPressed');

        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        //console.warn('onSignInPressed');

        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed =() => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPressed =() => {
        console.warn('onPrivacyPressed')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Create an account</Text>

            <Inputs placeholder= "Username" value={username} setValue={setUsername}/>
            <Inputs placeholder= "Email" value={email} setValue={setEmail}/>
            <Inputs placeholder= "Password" value={password} setValue={setPassword} secureTextEntry/>
            <Inputs placeholder= "Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>


            <Button text="Register" onPress={onRegisterPressed}/>
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and{' '} <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

            <Button text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    
    title: {
        paddingTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});
export default Signup*/


import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"



const __doCreateUser = async (email, password) =>{
    try {
     let response =  await auth().createUserWithEmailAndPassword(email, password);
      if(response){
        console.log(tag,"?",response)
      }
    } catch (e) {
      console.error(e.message);
    }
}
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const registerAndGoToMainFlow = async () => {
        if (email && password && password === passwordRepeat) {
            try {
                let response = await auth().createUserWithEmailAndPassword(email, password)
                if (response) {
                    console.log(tag, "?", response)
                  }
                } catch (e) {
                  console.error(e.message)
                }
    }
    }

    

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <Inputs placeholder="Username" value={username} setValue={setUsername} />
                <Inputs placeholder="Email" value={email} setValue={setEmail} />
                <Inputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <Inputs placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />

                <Button text="Register" onPress={registerAndGoToMainFlow} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and{' '} <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

                <Button text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        paddingTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default Signup;
