import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import RadioForm from 'react-native-simple-radio-button'

function Screen_1e() {
    const items = [{label: 'male',value : 0}, {label: 'female', value: 1},]
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Logo}>REGISTER</Text>
            </View>
            <View style={styles.FirstMiddle}>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Name" />
                </View>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Phone" />
                </View>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Email" />
                </View>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Password" />
                    <Ionicon name="eye" size={30} />
                </View>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.TextInput} placeholder="Birthday" />
                </View>
                <View style = {styles.RadioFormat}>
                    <RadioForm radio_props={items} formHorizontal buttonColor="black" labelColor="black"/>

                </View>

            </View>

            <View style={styles.SecondMiddle}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>REGISTER</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.Footer}>
                <Text style={styles.EndText}>When you agree to terms and conditions</Text>


            </View>

        </View>
    )
}
export default Screen_1e;
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
    EndText: {
        marginVertical: '10px',
        fontSize: '15px',
        fontWeight: 'bold',
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
    RadioFormat:{
        alignItems: 'center',
    }
});