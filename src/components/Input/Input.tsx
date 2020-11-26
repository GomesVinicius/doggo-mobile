import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface InputProps {
    auxText: string;
    keyboardNumber: boolean;
    passwordInput: boolean;
}

const InputCustom: React.FC<InputProps> = ({ auxText, keyboardNumber, passwordInput, ...rest }) => {
    const [revealPassword, setRevealPassword] = useState(true);

    return (
        <View style={styles.passwordContainer}>
            <TextInput
                style={[styles.input,
                { borderTopWidth: 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }
                ]}
                placeholder={auxText}
                {...rest}
                secureTextEntry={passwordInput ? revealPassword : !revealPassword}
                keyboardType={keyboardNumber ? "number-pad" : "default"}
            />
            <Feather
                onPress={() => setRevealPassword(!revealPassword)}
                secureTextEntry={revealPassword}
                style={styles.iconEye}
                color="#000"
                name={passwordInput ? revealPassword ? "eye-off" : "eye" : ""}
                size={24}
            />
        </View>
    )
}

export default InputCustom;
