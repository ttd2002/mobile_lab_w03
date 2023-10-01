import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import { SocialIcon } from 'react-native-elements'

function Screen_1d() {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Logo}>LOGIN</Text>
            </View>
            <View style={styles.FirstMiddle}>
                <View style={styles.BoxInput}>

                    <TextInput style={styles.TextInput} placeholder="Email" />
                </View>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Password" />
                    <Ionicon name="eye" size={30} />
                </View>


            </View>

            <View style={styles.SecondMiddle}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>LOGIN</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.ThirdMiddle}>
                <Text style={styles.SecondText}>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style={styles.textMidle}>Forgot your password?</Text>
                </TouchableOpacity>
                <Text style={styles.SecondText}>Or login with</Text>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity>
                    <SocialIcon type="facebook" style = {styles.btnSocial}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialIcon type="twitter" style = {styles.btnSocial}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialIcon type="google" style = {styles.btnSocial}/>
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default Screen_1d;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#d8efde'

    },
    Header: {

        alignItems: 'center',
    },
    Logo: {
        marginTop: '30px',
        marginBottom: '40px',
        fontSize: '30px',
        fontWeight: '600',
    },
    FirstMiddle: {

        alignItems: 'center'
    },
    BoxInput: {
        marginVertical: '10px',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10',
        borderRadius: '10px',
        borderWidth: 1,
        width: '90%',
        height: '55px',
        backgroundColor: '#c9e0d0',

    },
    TextInput: {
        marginLeft: '10px',
        width: '300px',
        height: '50px',
        backgroundColor: '#c9e0d0',
    },
    SecondMiddle: {

        alignItems: 'center'
    },
    SecondText: {
        marginVertical: '10px',
        fontSize: '15px',
        fontWeight: 'bold',
    },
    textMidle: {
        marginVertical: '10px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: "#927dee",
    },
    ThirdMiddle: {

        alignItems: 'center'
    },


    Footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        marginTop: '50px',
        marginBottom: '10px',
        backgroundColor: '#c34e3b',
        width: '90%',
        padding: '10px',
        borderRadius: '10px',
    },
    btnTitle: {
        color: '#d8efde',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center'
    },
    btnSocial:{
        marginVertical: '30px',
        width: '60px',
        height: '60px',
    }
});