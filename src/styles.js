import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#455a64'
    },
    input: {
        fontSize: 25,
        width: 300,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginVertical: 10
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#1c313a',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginVertical: 10
    },
    button_text: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 4,
    },
    text: {
        width: 200,
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff'
    }
});