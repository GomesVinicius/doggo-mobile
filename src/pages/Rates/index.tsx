import React, { useEffect, useState } from 'react';

import { View, KeyboardAvoidingView, Platform, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

import { StatusBar } from 'react-native';

import styles from './styles';
import Rate from '../../Models/Rate';
import api from '../Services/services';
import IconHeader from '../../components/IconHeader/IconHeader';

function Rates({ route }: any) {
    const navigation = useNavigation();
    const [rates, setRates] = useState<Rate[]>([]);
    const { studentId } = route.params;

    function handleToChangePassword() {
        navigation.navigate('ChangePassword', { studentId });
    }

    useEffect(() => {
        api.get<Rate[]>(`nota/porcentagem/id=${studentId}`)
            .then(response => {
                const rate = response.data.map(rate => rate);
                setRates(rate);
            }).catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#fff"
            />
            <View
                style={{ flex: 1 }}
            >

                <RectButton style={{}} onPress={handleToChangePassword}>
                    <Text>Alterar senha</Text>
                </RectButton>


                <View style={styles.container}>
                    <View style={styles.background}>
                        <View style={styles.areaRate}>
                            {rates.map(rate => (
                                <>
                                    <Text style={styles.subjectText}>{rate.nomeTurma}</Text>
                                    <Text style={styles.percentRateText}>{rate.porcentagem.toFixed(2)} %</Text>
                                </>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Rates;
