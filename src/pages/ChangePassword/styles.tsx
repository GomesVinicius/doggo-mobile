import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: '#8257E5',
        color: '#8257E5',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 24,
    },
    passwordText: {
        paddingLeft: 24,
        fontWeight: 'bold',
        fontSize: 24,
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Poppins_400Regular',
        backgroundColor: '#FAFAFC',
        borderColor: '#E6E6F0',
        borderStyle: 'solid',
        alignSelf: 'center',
        paddingLeft: 24,
        borderWidth: 1,
        width: '90%',
        height: 64,
        borderRadius: 8,
    },
    areaButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
    },
    contactButton: {
        height: '15%',
        width: '90%',
        backgroundColor: '#fff',
        marginTop: '100%',
        borderRadius: 8,
    },
    contactButtonText: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        color: '#000',
        fontFamily: 'Archivo_400Regular',
        fontSize: 24,
        marginTop: 17,
        marginLeft: 16,
        
    }
})

export default styles;
