import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
function Screen_1c() {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style = {styles.Logo}>CODE</Text>
            </View>
            <View style={styles.FirstMiddle}>
                <Text style={styles.FirstText}>VERTICATION</Text>

            </View>

            <View style={styles.SecondMiddle}>
                <Text style={[styles.SecondText, { marginTop: '20px' }]}>Enter oneline password sent on</Text>
                <Text style={[styles.SecondText, { marginBottom: '20px' }]}>++849092605798</Text>
            </View>

            <View style={styles.ThirdMiddle}>
                <View style = {styles.CodeInput}>
                    <TextInput style = {styles.CodeBox}/>
                    <TextInput style = {styles.CodeBox}/>
                    <TextInput style = {styles.CodeBox}/>
                    <TextInput style = {styles.CodeBox}/>
                    <TextInput style = {styles.CodeBox}/>
                    <TextInput style = {styles.CodeBox}/>

                </View>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>VERTIFY CODE</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default Screen_1c;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundImage: 'linear-gradient(#cbf5f7 0%, #d9f4f6 80%, #33d5f8 100%)',

    },
    Header: {

        alignItems: 'center',
    },
    Logo: {
        marginTop: '40px',
        marginBottom: '20px',
        fontSize: '70px',
        fontWeight: '650',
    },
    FirstMiddle: {

        alignItems: 'center'
    },
    FirstText: {
        marginVertical: '50px',
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
    CodeInput:{
        flexDirection: 'row',
        justifyContent: 'Space-between'
    },
    CodeBox:{
        marginVertical: '50px',
        width: '50px',
        height:'50px',   
        borderWidth: '2px',  
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
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