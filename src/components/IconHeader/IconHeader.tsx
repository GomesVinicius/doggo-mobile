import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface IconProps {
    parameter?: string
}

const IconHeader: React.FC = () => {
    const nav = useNavigation();

    function handleToChangePassword() {
        nav.navigate('ChangePassword')
    }

    return (
        <Feather
            name="settings"
            color="#000"
            size={28}
            onPress={handleToChangePassword}
            style={{
                paddingRight: 12
            }}
        />
    )
}

export default IconHeader;
