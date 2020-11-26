import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputArea: {
        margin: 24
    },
    input: {
        fontFamily: 'Poppins_400Regular',
        backgroundColor: '#FAFAFC',
        justifyContent: 'center',
        borderColor: '#E6E6F0',
        borderStyle: 'solid',
        alignSelf: 'center',
        paddingLeft: 24,
        borderWidth: 1,
        width: '100%',
        height: 64,
    },
    passwordContainer: {
        flexDirection: 'row',
    },
    iconEye: {
        position: 'absolute',
        alignSelf: 'center',
        right: 10
    },
    textHelp: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        lineHeight: 24
    },
})

export default styles;
