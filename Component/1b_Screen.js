import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'

function Screen_1b() {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Image style={styles.lockStyle} source={require('../image/lock.png')} />
            </View>
            <View style={styles.FirstMiddle}>
                <Text style={[styles.FirstText, { marginTop: '20px' }]}> FORGET</Text>
                <Text style={[styles.FirstText, { marginBottom: '20px' }]}> PASSWORD </Text>
            </View>

            <View style={styles.SecondMiddle}>
                <Text style={[styles.SecondText, { marginTop: '20px' }]}> Provide your account's email for which you</Text>
                <Text style={[styles.SecondText, { marginBottom: '20px' }]}> want to reset your password </Text>
            </View>

            <View style={styles.ThirdMiddle}>
                <View style={styles.BoxInput}>
                    <Ionicon name="mail" size={30} />
                    <TextInput style={styles.TextInput} placeholder="Email" />
                </View>

            </View>
            <View style={styles.Footer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>LOGIN</Text>
                </TouchableOpacity>

            </View>
           
        </View>
    )
}
export default Screen_1b;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundImage: 'linear-gradient(#cbf5f7 0%, #d9f4f6 80%, #33d5f8 100%)',

    },
    Header: {

        alignItems: 'center',
    },
    lockStyle: {
        marginTop: '40px',
        marginBottom: '20px',
        width: '120px',
        height: '120px',
    },
    FirstMiddle: {

        alignItems: 'center'
    },
    FirstText: {
        fontSize: '30px',
        fontWeight: '700',
    },
    SecondMiddle: {

        alignItems: 'center'
    },
    SecondText: {
        fontSize: '15px',
        fontWeight: 'bold',
    },
    ThirdMiddle: {

        alignItems: 'center'
    },
    BoxInput: {
        marginVertical: '40px',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10',
        borderRadius: '10px',
        borderWidth: 1,
        width: '90%',
        height: '55px',
        backgroundColor: '#c4c4c4',

    },
    TextInput: {

        width: '300px',
        height: '50px',
        backgroundColor: '#c4c4c4',
    },

    Footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      btn: {
        backgroundColor: '#E3C000',
        color: '#000',
        width: '90%',
        padding: '10px',
        borderRadius: '10px',
      },
      btnTitle: {
        fontSize: '20px',
        fontWeight: '900',
        textAlign: 'center'
      },
});