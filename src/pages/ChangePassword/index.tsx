import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import { StatusBar } from 'react-native';

import styles from './styles';
import InputCustom from '../../components/Input/Input';
import api from '../Services/services';

function ChangePassword({ route }: any) {
    const nav = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const { studentId } = route.params;

    function handleToRates() {
        nav.navigate('Rates');;
    }

    useEffect(() => {
        console.log(studentId)
    }, []);

    function verifyPassword() {
        console.log(route.params);
        
        if (newPassword !== newPasswordConfirm) {
            Alert.alert('Senha incorreta');
        } else {
            api.put(`aluno/alterar-senha${studentId}`)
        }
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#fff"
            />
            <KeyboardAvoidingView>
                <View style={styles.background}>
                    <View style={styles.container}>
                        <Text style={styles.passwordText}>Nova senha</Text>
                        <InputCustom auxText="Nova senha" keyboardNumber={false} passwordInput={true} onChange={(text: string) => {setNewPassword(text)}} value={newPassword} />
                        <Text style={styles.passwordText}>Confirme a nova senha</Text>
                        <InputCustom auxText="Confirme nova senha" keyboardNumber={false} passwordInput={true} onChange={(text: string) => {setNewPasswordConfirm(text)}} value={newPasswordConfirm} />
                        <View style={styles.areaButton}>
                            <RectButton
                                onPress={verifyPassword}
                                style={styles.contactButton}
                            >
                                <Text style={styles.contactButtonText}>Salvar</Text>
                            </RectButton>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default ChangePassword;
