import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import styles from './style';
import InputCustom from '../../components/Input/Input';

function Login() {
    const [revealPassword, setRevealPassword] = useState(true);
    const navigation = useNavigation();

    function handleToRates() {
        navigation.navigate('Rates');
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#8257E5"
            />

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
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

                        <View style={styles.inputArea}>
                            <InputCustom auxText="CPF" keyboardNumber={true} passwordInput={false} />
                            {/*<TextInput style={[styles.input, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]} placeholder="CPF" keyboardType="number-pad" />*/}
                            <View style={styles.passwordContainer}>
                            <InputCustom auxText="Senha" keyboardNumber={false} passwordInput={true} />
                                {/*<TextInput style={[styles.input, { borderTopWidth: 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }]} placeholder="Senha"/>
                                <Feather
                                    onPress={() => setRevealPassword(!revealPassword)}
                                    style={styles.iconEye}
                                    color="#000"
                                    name={revealPassword ? "eye-off" : "eye"}
                                    size={24}
                                />*/}
                            </View>
                        </View>

                        <RectButton style={styles.button} onPress={handleToRates}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </RectButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Login;
