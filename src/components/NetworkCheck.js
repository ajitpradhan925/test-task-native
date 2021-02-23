import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
import NetworkBack from './NetworkBack';

const NetworkCheck = () => {
  const netInfo = useNetInfo();

  // const unsubscribe = NetInfo.addEventListener(state => {
  //   console.log("Connection type", state.type);
  //   console.log("Is connected?", state.isConnected);
  // });

  // unsubscribe()

  
  return (
    <View>

      
      {netInfo.isConnected ? (
           <NetworkBack />
      ) : (
        <Text
        style={{
          textAlign: 'center',
          backgroundColor: '#f00',
          color: '#ddd',
          padding: 10,
        }}>
        No Internet Connection
      </Text>
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({});

export default NetworkCheck;
