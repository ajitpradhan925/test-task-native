import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Setting = (props) => {
  const exit = () => {
    BackHandler.exitApp()
  };

  const createThreeButtonAlert = () =>
  Alert.alert(
    "",
    "Choose an option",
    [
      {
        text: "Exit",
        onPress: () => BackHandler.exitApp()
      },
      {
        text: "Navigate",
        onPress: () => props.navigation.navigate('Home'),
        style: "cancel"
      },
      { text: "No", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener();

  }, [])

  const backAction = () => {
    createThreeButtonAlert()
    return true;
  };

  return (
    <View style={{flex: 1}}>
      <View style={{margin: 10, justifyContent: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => exit()}
          style={{
            height: 50,
            backgroundColor: '#f00',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
            borderRadius: 7,
            display: 'flex',
            flexDirection: 'row',

          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center'
            }}>
            Exit App
          </Text>

          <Icon
            name="exit-outline"
            size={18}
            color={'#fff'}
            style={{marginLeft: 10, alignSelf: 'center', marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Setting;
