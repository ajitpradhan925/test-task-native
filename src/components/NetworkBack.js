import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Animated} from 'react-native';

const pageWidth = Dimensions.get('window').width;

export default class NetworkCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      toastColor: 'green',
      message: 'Success!',
    };

    this.animatedValue = new Animated.Value(0);
  }

  callToast(message, type) {
    if (this.state.modalShown) return;
    this.setToastType(message, type);
    this.setState({modalShown: true});
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(this.closeToast());
  }

  closeToast() {
    setTimeout(() => {
      this.setState({modalShown: false});
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }, 2000);
  }

  setToastType(message = 'Success!', type = 'success') {
    let color;
    if (type == 'error') color = 'red';
    if (type == 'warning') color = 'yellow';
    if (type == 'success') color = 'green';
    this.setState({toastColor: color, message: message});
  }

  componentDidMount() {
    this.callToast('Connecting back', 'success');
  }

  render() {
    let animation = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [-70, -10, 0],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateY: animation}],
            height: 70,
            backgroundColor: this.state.toastColor,
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            justifyContent: 'center',
            zIndex: 1000,
          }}>
          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {this.state.message}
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  modalContentStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
