import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#8257E5',
        color: '#8257E5'
    },
    input: {
        marginTop: 50,
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
    areaRate: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    subjectText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    teacherText: {
        textAlign: 'center',
        fontSize: 14,
    },
    percentRateText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 10
    }

})

export default styles;
