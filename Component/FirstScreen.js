import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function FirstScreen() {
    return (
        <View style={styles.Container}>
            <View style={styles.HeaderLogo}>
                <svg style={styles.circle} >
                    <circle cx="71" cy="71" r="63.5" stroke="black" stroke-width="15" />
                </svg>
            </View>
            <View style={styles.body}>
                <Text style={styles.firstText}>GROW YOUR BUSINESS</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.secondText}>We will help you to grow your business using</Text><Text style={[styles.secondText, { marginBottom: '50px' }]}>online server</Text>
            </View>

            <View style={styles.ButtonSty}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FirstScreen;
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#00ccf9',
  
    },
    circle: {
      marginLeft: '10px',
      marginTop: '120px',
      width: "150",
      height: "150",
      fill: "none",
    },
    HeaderLogo: {
      alignItems: 'center',
    },
    body: {
  
      alignItems: 'center',
      fontSize: 'bold',
    },
    firstText: {
      marginVertical: '50px',
      fontSize: '30px',
      fontWeight: 'bold',
  
    },
    secondText: {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    ButtonSty: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    btn: {
      backgroundColor: '#E3C000',
      color: '#000',
      width: '40%',
      padding: '10px',
      borderRadius: '10px',
    },
    btnTitle: {
      fontSize: '20px',
      fontWeight: '900',
      textAlign: 'center'
    }
  
  });