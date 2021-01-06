import React, { useEffect, useState } from 'react';

import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, Text, Platform, KeyboardAvoidingView, Alert, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import InputCustom from '../../components/Input/Input';
import styles from './style';
import api from '../Services/services';

function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [studentId, setStudentId] = useState(0);
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    const navigation = useNavigation();

    function handleAuthenticate() {
        api.post('login', {
            cpf,
            senha: password
        }).then(response => {
            console.log(response.data)
            if (response.status == 200) {
                setStudentId(response.data);
                navigation.navigate('Rates', { studentId: response.data })
            } else {
                console.log(response.status);
            }
        }).catch((err) => {
            console.log(err);
            Alert.alert('Erro inesperado');
        })
    }

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        return setKeyboardOpen(true);
    };

    const _keyboardDidHide = () => {
        return setKeyboardOpen(false);
    };


    return (
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#8257E5"
            />

            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.titleArea}>
                        <Text style={styles.textTitle}>Doggo</Text>
                    </View>
                </View>
                <View style={styles.bottom}>

                    <View style={styles.textArea}>
                        <Text style={styles.textLogin}>Fazer Login</Text>
                    </View>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.inputArea}>
                                <InputCustom auxText="CPF" keyboardNumber={true} passwordInput={false} value={cpf} onChange={(text: string) => { setCpf(text) }} />
                                <View style={styles.passwordContainer}>
                                    <InputCustom auxText="Senha" keyboardNumber={false} passwordInput={true} onChange={(text: string) => setPassword(text)} value={password} />
                                </View>
                            </View>
                            <RectButton style={styles.button} onPress={handleAuthenticate}>
                                <Text style={styles.textButton}>Entrar</Text>
                            </RectButton>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </>
    )
}

export default Login;
