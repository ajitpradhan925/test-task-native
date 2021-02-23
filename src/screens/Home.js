import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NetworkCheck} from '../components';

// const createTwoButtonAlert = () =>
//     Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );

const Home = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <View style={styles.main_container}>
      <NetworkCheck />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            width: 250,
          }}>
          <Image
            style={styles.image}
            source={require('../assets/profile.jpg')}></Image>
          
        </TouchableOpacity>

        <Text
            style={styles.welcome_text}>
            Hello React Native User
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 150,
        alignSelf: 'center',
    },
    welcome_text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        padding: 5,
        backgroundColor: '#333',
        color: '#ddd',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default Home;
